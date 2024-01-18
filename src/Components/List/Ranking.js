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
      <div class="container mt-3" style={{margin:'0.5rem', border: '1px solid #ccc',padding:'0', borderRadius:'0 0 10px 10px',color: 'rgba(120, 120, 120, 1)'}}>
            <h2 style={{ backgroundColor: 'rgba(100, 100, 0, 0.1)',margin:'0',padding:'0.5rem'}}>ランキング</h2>
            <div class="list-group" style={{margin:'0.5rem'}}>              
              <a href={'/game/' + gameAtt.gameid} class="list-group-item list-group-item-action" style={{fontSize: '14px', fontWeight: 'bold'}}>{gameAtt.name}</a>
              
            </div>
        </div>
    </div>
  )
}
