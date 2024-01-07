import React from 'react'

function GameInfo(props) {
  return (
    <div>
        <br/>
        <br/>
        <table class="table table-dark table-striped">
                  <tbody>
                    <tr>
                      <td>Platform</td>
                      <td>{props.info.platform}</td>
                    </tr>
                    <tr>
                      <td>Producer</td>
                      <td>{props.info.producer}</td>
                    </tr>
                    <tr>
                      <td>Main staffs</td>
                      <td>{props.info.mainstaff}</td>
                    </tr>
                  </tbody>
                </table>
    </div>
  )
}

export default GameInfo
