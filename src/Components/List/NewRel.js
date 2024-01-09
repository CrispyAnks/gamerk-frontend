import React from 'react'

export default function NewRel({gameAtt}) {
  if(!gameAtt){
    return(
      <div>  
      <div class="col">
         <h2>新着</h2>
              <div id="accordion">
                    <div class="card">
                        <div class="card-header">
                            <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
                            Game1
                            </a>
                        </div>
                        <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
                            <div class="card-body">
                            GameIntro
                            </div>
                    </div>
                </div>
            </div>        
         </div>
    </div>
    )
  }
  return (
    <div>  
      <div class="col">
         <h2>新着</h2>
              <div id="accordion">
                    <div class="card">
                        <div class="card-header">
                            <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
                            {gameAtt.name}
                            </a>
                        </div>
                        <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
                            <div class="card-body">
                            {gameAtt.intro}
                            </div>
                    </div>
                </div>
            </div>        
         </div>
    </div>
  )
  
}
