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
      <div class="col" style={{border: '1px solid #ccc',padding:'0', borderRadius:'0 0 10px 10px',color: 'rgba(120, 120, 120, 1)'}}>
         <h2 style={{ backgroundColor: 'rgba(100, 100, 0, 0.1)',margin:'0',padding:'0.5rem'}}>新着</h2>
              <div id="accordion" style={{margin:'0.5rem',fontSize: '14px'}}>
                    <div class="card">
                        <div class="card-header">
                            <a class="btn" data-bs-toggle="collapse" href="#collapseOne" style={{fontSize: '14px', fontWeight: 'bold'}}>
                            {gameAtt.name}
                            </a>
                        </div>
                        <div id="collapseOne" class="collapse show" data-bs-parent="#accordion" style={{padding:'0 1rem'}}>
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
