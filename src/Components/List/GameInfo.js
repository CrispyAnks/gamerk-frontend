import React from 'react'

function GameInfo(props) {
  return (
    <div>
        <br/>
        <br/>
        <table class="table table-dark table-striped">
                  <tbody>
                    <tr>
                      <td>プラットフォーム</td>
                      <td>{props.info.platform}</td>
                    </tr>
                    <tr>
                      <td>プロデューサー</td>
                      <td>{props.info.producer}</td>
                    </tr>
                    <tr>
                      <td>スタッフメンバー</td>
                      <td>{props.info.mainstaff}</td>
                    </tr>
                  </tbody>
                </table>
    </div>
  )
}

export default GameInfo
