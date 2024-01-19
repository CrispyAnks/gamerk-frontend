import React from 'react'

function Avatar(props) {
  return (
    <div style={{margin:'0 auto', padding:'0 auto'}}>  
      <img src={props.ava ? props.ava : process.env.PUBLIC_URL + '/avatar.png' } alt='アバター' 
      style={{textAlign:'center', height:'50vh'}}/>
    </div>
  )
}

export default Avatar
