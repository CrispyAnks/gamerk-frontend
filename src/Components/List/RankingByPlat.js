import React, { useState, useEffect } from 'react';

function RankingByPlat(props) {

  const PLATFORM_ID = props.id;
  const [gameData, setGameData] = useState();

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("/api/game/cata/" + PLATFORM_ID, requestOptions)
      .then(response => response.json())
      .then(result => {
        setGameData(result.data)
        console.log(result)
        console.log(gameData)}
      )
      .catch(error => console.log('error', error));
  },[])

  return (      
    <div class="container mt-3" style={{border: '1px solid #ccc',padding:'0', borderRadius:'0 0 0 10px',color: 'rgba(120, 120, 120, 1)'}}>
        <h2 style={{ height:'3rem',backgroundColor: 'rgba(139, 136, 242, 0.8)',margin:'0',padding:'0.5rem',fontFamily:'Hiragino Sans',fontWeight:'bolder',fontSize:'20px',color:'whitesmoke'}}>Nintendo Switch</h2>
        <div class="list-group" style={{margin:'0.5rem'}}>
        
              {Array.isArray(gameData) && gameData.map(game =>  <a href={"/game/"+ game.gameid} key={game.gameid} class="list-group-item list-group-item-action" style={{fontSize: '14px', fontWeight: 'bold'}}>{game.name}</a>)}
            
        </div>
    </div>
  )
}

export default RankingByPlat
