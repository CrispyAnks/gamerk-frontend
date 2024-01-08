import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Ranking({gameAtt}) {
  
  if(!gameAtt){
    return (
      <div>
      <div class="container mt-3">
            <h2>ランキング</h2>
            <div class="list-group">              
              <a href="#" class="list-group-item list-group-item-action">GameName</a>
            </div>
        </div>
    </div>

    )
  }
  return (
    <div>
      <div class="container mt-3">
            <h2>ランキング</h2>
            <div class="list-group">              
              <a href={'/game/' + gameAtt.gameid} class="list-group-item list-group-item-action">{gameAtt.name}</a>
              
            </div>
        </div>
    </div>
  )
}
