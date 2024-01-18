import React from 'react'

export default function NewsBullet({newsAtt}){
  if(!newsAtt){
    return (
      <div>
       <div class="container mt-3">
            <h2>News</h2>
            <div class="list-group">
                <a href='#' class="list-group-item list-group-item-action">title</a>      
            </div>
        </div>
    </div>

    )
  }
  return (
    <div>
       <div class="container mt-3" style={{border: '1px solid #ccc',padding:'0', borderRadius:'0 0 10px 10px',color: 'rgba(120, 120, 120, 1)'}}>
            <h2 style={{ backgroundColor: 'rgba(100, 100, 0, 0.1)',margin:'0',padding:'0.5rem'}}>ニュース</h2>
            <div class="list-group" style={{margin:'0.5rem'}}>
                <a href={newsAtt.src} class="list-group-item list-group-item-action" style={{fontSize: '14px', fontWeight: 'bold'}}>{newsAtt.title}</a>      
            </div>
        </div>
    </div>
  )
}
