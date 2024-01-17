import React from 'react'

function Avatar(props) {
  return (
    <div>  
      <img src={props.ava ? props.ava : process.env.PUBLIC_URL + '/avatar.png' } alt='アバター' 
      style={{textAlign:'center', height:'50vh', margin:'0 auto'}}/>
    </div>
  )
}

export default Avatar
