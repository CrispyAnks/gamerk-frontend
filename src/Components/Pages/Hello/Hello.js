import React,{ useEffect, useState } from 'react'
import styles from'./hello.module.css'
import NavBar from '../../Nav/NavBar'
import NewRel from '../../List/NewRel'
import Ranking from '../../List/Ranking'
import NewsBullet from '../../Functions/NewsBullet'
import MainView from '../../Functions/MainView'
import { async } from 'q'

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
    <div class="container-fluid" id="main">
      <NavBar/>
      <div class="row" className={styles.myrow}>
        <MainView/>
      </div>
      <div class="row">
        <div class="col">
          {rankingData.data ? (rankingData.data.map(game =>  <Ranking key={game.gameid} gameAtt={game}/>)) : (<p>loading...</p>)}
           
        </div>
        <div class="col">
          
        {newsData.data ? (newsData.data.map(news => <NewsBullet key={news.newsid} newsAtt={news}/>)) : (<p>loading...</p>)}   
        
        </div>
      </div>
      <div class="row" className={styles.myrow}>
        <div class="col">
          {newgameData.data ? (newgameData.data.map(game => <NewRel key={game.gameid} gameAtt={game}/>)) : (<p>loading...</p>)}
          
        </div>
        
      </div>
    </div>
  )
}

export default Hello
