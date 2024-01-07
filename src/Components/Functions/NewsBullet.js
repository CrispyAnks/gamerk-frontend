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
       <div class="container mt-3">
            <h2>News</h2>
            <div class="list-group">
                <a href={newsAtt.src} class="list-group-item list-group-item-action">{newsAtt.title}</a>      
            </div>
        </div>
    </div>
  )
}
