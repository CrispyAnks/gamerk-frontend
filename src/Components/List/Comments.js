import React, { useState } from 'react'
import MyCard from '../Functions/MyCard'


function Comments(props) {
  
  return (
    <div>
      <h1>Comments</h1>
      {props.Usercoms ? (props.Usercoms.map(comment => <MyCard key={comment.markid} comAtt={comment}/>)) : (props.Gamecoms.map(comment => <MyCard key={comment.markid} comAtt={comment}/>))}
    </div>
  )
}

export default Comments
