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
       <div class="container mt-3"  style={{margin:'0.5rem', backgroundColor:'rgba(194, 82, 242,0.2)',border: '1px solid #532473',padding:'0', 
      borderRadius:'0 0 0 10px',borderColor:'#532473 !important',boxShadow: '0 0 10px rgba(242, 119, 222, 0.2)'}}>
            <h2 style={{ height:'3rem',backgroundColor: 'rgba(139, 136, 242, 0.8)',margin:'0',padding:'0.5rem',fontFamily:'Hiragino Sans',fontWeight:'bolder',fontSize:'20px',color:'whitesmoke'}}>ニュース</h2>
            <div class="list-group" style={{margin:'0.5rem'}}>
                <a href={newsAtt.src} class="list-group-item list-group-item-action" style={{fontSize: '14px', fontWeight: 'bold'}}>{newsAtt.title}</a>      
            </div>
        </div>
    </div>
  )
}
