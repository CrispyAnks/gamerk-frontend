import React,{ useState,useEffect } from 'react'
import styles from './mypage.module.css'
import NavBar from '../../Nav/NavBar'
import Avatar from '../../List/Avatar'
import Bio from '../../List/Bio'
import GameIntro from '../../List/GameIntro'
import GameInfo from '../../List/GameInfo'
import Comments from '../../List/Comments'
import { Container,Row,Col } from 'react-bootstrap'

function Game(props) {
  const COM_DATA={}
  const GAME_ID = props.match.params.id;
  const GAME_DATA={}
  const [commentData, setCommentData] = useState(COM_DATA);
  const [gameData, setGameData] = useState(GAME_DATA);
  const [show, setShow] = useState(false);
  useEffect(() => {
    var myHeaders = new Headers();
    const token = localStorage.getItem('token')
    myHeaders.append("Authorization", token);
    console.log(token)
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const fetchGAME = async () => {
      await fetch('/api/game/'+ GAME_ID)
    .then((res) =>{
      console.log(res)
      return res.json();
    }).then(data => {
      console.log(data)
      setGameData(data);
    })
    .catch(()=>{})}
    const fetchCOM = async () => {
      try {
        const gameResponse = await fetch('/api/mark/game/' + GAME_ID + '?pageNum=1&pageSize=3', requestOptions);
        const gameData = await gameResponse.json();
        setCommentData(gameData.data.items);
        console.log(gameData);
    
        if (gameData.data.items.length === 0 || gameData.data.total === 0) {
          setShow(true);
        } else {
          const id = localStorage.getItem('userid');
          let hasUserComment = false;
    
          for (const comment of gameData.data.items) {
            if (comment.userid === id) {
              hasUserComment = true;
              break;
            }
          }
    
          setShow(!hasUserComment);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchGAME();
    fetchCOM();
    
}, []);
  return (
    <Container>
        <NavBar/>
        <div class='row' className={styles.myrow}>
     
     </div>
     <Row>
      <Col sm={5}>
      {gameData.data != null && <Avatar ava={gameData.data.imgsrc}/>}
      </Col>
      <Col sm={7}>
      {gameData.data != null && <Bio bio={gameData.data}/>}
      </Col>
     </Row>
     <div class='row' className={styles.myrow}>
    
     </div>

     <Row>
      <Col sm={5}>
      {gameData.data != null && <GameInfo info={gameData.data}/>}
      </Col>
      <Col sm={7}>
      {gameData.data != null && <GameIntro intro={gameData.data} gameid={GAME_ID} show={show}/>}
      </Col>
     </Row>
      <div class='row' className={styles.myrow}>
    
     </div>
    
    <div class="row">
     <div class="col">
      { Array.isArray(commentData) && <Comments Gamecoms={commentData}/>}
      </div>
      {/* <div class="col">
        <Links/>
      </div> */}
    </div> 

    </Container>
  )
}

export default Game
