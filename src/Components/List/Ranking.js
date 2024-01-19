import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Ranking({gameAtt}) {
  return (
    <div>
      <div class="container mt-3" 
      style={{margin:'0.5rem', backgroundColor:'rgba(240, 107, 242,0.5)',border: '1px solid #532473',padding:'0', 
      borderRadius:'0 0 10px 0',borderColor:'#532473 !important',boxShadow: '0 0 10px rgba(242, 119, 222, 0.2)'}}>
            <h2 style={{ height:'3rem',backgroundColor: 'rgba(139, 136, 242, 0.8)',margin:'0',padding:'0.5rem',fontFamily:'Hiragino Sans',fontWeight:'bolder',fontSize:'20px',color:'whitesmoke'}}>ランキング</h2>
            <div class="list-group" style={{margin:'0.5rem'}}>              
              <a href={'/game/' + gameAtt.gameid} class="list-group-item list-group-item-action" style={{fontSize: '14px', fontFamily:'monospace',fontWeight: 'bold'}}>{gameAtt.name}</a>             
            </div>
        </div>
    </div>
  )
}
