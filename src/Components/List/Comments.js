import React, { useState } from 'react'
import MyCard from '../Functions/MyCard'


function Comments(props) {
  
  return (
    <div class="container mt-3" style={{border: '1px solid #ccc',padding:'0', borderRadius:'0 0 10px 10px',color: 'rgba(120, 120, 120, 1)'}}>
      <h1 style={{ height:'3rem',backgroundColor: 'rgba(139, 136, 242, 0.8)',margin:'0',padding:'0.5rem',fontFamily:'monospace',fontWeight:'bolder',fontSize:'20px',color:'whitesmoke'}}>コメント</h1>
      
      {props.Usercoms ? (props.Usercoms.map(comment => <MyCard key={comment.markid} comAtt={comment} mypage={true}/>)) : (props.Gamecoms.map(comment => <MyCard key={comment.markid} comAtt={comment} mypage={false}/>))}
    </div>
  )
}

export default Comments
