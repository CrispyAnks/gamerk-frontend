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
    <div class="container mt-3">
        <h2>Nintendo Switch</h2>
        <div class="list-group">
        <div class="list-group"> 
              {Array.isArray(gameData) && gameData.map(game =>  <a href={"/game/"+ game.gameid} key={game.gameid} class="list-group-item list-group-item-action">{game.name}</a>)}
            </div>
        </div>
    </div>
  )
}

export default RankingByPlat
