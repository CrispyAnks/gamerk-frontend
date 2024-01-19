import React from 'react'

function GameInfo(props) {
  return (
    <div style={{fontFamily:'monospace'}}>
        
        <table class="table table-dark table-striped">
                  <tbody>
                    <tr>
                      <td style={{width:'40%', fontWeight:"bold",fontSize:'14px'}}>プラットフォーム</td>
                      <td>{props.info.platform}</td>
                    </tr>
                    <tr>
                      <td style={{width:'40%', fontWeight:"bold",fontSize:'14px'}}>プロデューサー</td>
                      <td>{props.info.producer}</td>
                    </tr>
                    <tr>
                      <td style={{width:'40%', fontWeight:"bold",fontSize:'14px'}}>スタッフメンバー</td>
                      <td>{props.info.mainstaff}</td>
                    </tr>
                  </tbody>
                </table>
    </div>
  )
}

export default GameInfo
