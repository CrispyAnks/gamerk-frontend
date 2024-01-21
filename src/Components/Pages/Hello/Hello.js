import React,{ useEffect, useState } from 'react'
import styles from'./hello.module.css'
import NavBar from '../../Nav/NavBar'
import NewRel from '../../List/NewRel'
import Ranking from '../../List/Ranking'
import NewsBullet from '../../Functions/NewsBullet'
import MainView from '../../Functions/MainView'
import { Container,Row,Col } from 'react-bootstrap'

function Hello() {
  const NEW_GAME = {};
  const NEWS = {};
  const RANKING = {};
  const [newgameData, setNewGameData] = useState(NEW_GAME);
  const [newsData, setNewsData] = useState(NEWS);
  const [rankingData, setRankingData] = useState(RANKING);
  
  useEffect(() =>{
    const fetchNG = async () =>{
      await fetch('/api/game/new')
      .then((res) =>{
        return res.json();
      }).then(data => {
        setNewGameData(data);

      })
      .catch(()=>{})
    }
    const fetchNews = async () => {
      await fetch('/api/index/news')
      .then((res) =>{
        return res.json();
      }).then(data => {
        setNewsData(data);
      })
      .catch(()=>{})
    }
    const fetchRank = async () => {
      await fetch('/api/game/hot')
      .then((res) =>{
        return res.json();
      }).then(data => {
        setRankingData(data);
      })
      .catch(()=>{})
    }

    fetchRank();
    fetchNG();
    fetchNews();
    console.log(rankingData)
    console.log(newgameData)
    console.log(newsData)
  },[])
  return (
    <Container>
      
      <div class="row" className={styles.myrow} style={{margin:0}}>
        <NavBar style={{ position: 'relative', zIndex: 2 }}/>
        <MainView style={{ position: 'relative', zIndex: 1 }}/>
      </div>
      <Row>
        <Col sm={4}>
        {rankingData.data ? (rankingData.data.map(game =>  <Ranking key={game.gameid} gameAtt={game}/>)) : (<p>loading...</p>)}
        </Col>
        <Col sm={8}>
        {newsData.data ? (newsData.data.map(news => <NewsBullet key={news.newsid} newsAtt={news}/>)) : (<p>loading...</p>)}   
        </Col>
      </Row>
      <div class="row" className={styles.myrow}>
        <div class="col">
          {newgameData.data ? (newgameData.data.map(game => <NewRel key={game.gameid} gameAtt={game}/>)) : (<p>loading...</p>)}
          
        </div>
        
      </div>
    </Container>
  )
}

export default Hello
