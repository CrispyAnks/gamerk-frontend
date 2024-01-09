import React from 'react'

function Bio(props) {
  function formatDateString(originalDateString) {
    const originalDate = new Date(originalDateString);
  
    const formattedDate = originalDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).replace(/\//g, '-');
  
    return formattedDate;
  }
  return (
    <div>
      
      <table class="table table-borderless">
        <thead>
        <tr>
          <th>{props.bio.name ? ("ゲーム名:") : ("ユーザー:")}</th>
          <td>{props.bio.name ? (props.bio.name) : (props.bio.username)}</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>{props.bio.gender ? ("性別:") : ("タグ:")}</th>
          <td>{props.bio.gender ? (props.bio.gender) : (props.bio.tag01 + " " + props.bio.tag02 + " " + props.bio.tag03)}</td>
        </tr>
        <tr>
        <th>{props.bio.reldate ? ("発売日:") : ("イントロ:")}</th>
          <td>{props.bio.reldate ? (formatDateString(props.bio.reldate)) : (props.bio.intro)}</td>
        </tr>
        </tbody>
      </table>
      <hr/>
      
    {/* <a class="btn btn-success" href="#">Edit</a> */}
      
    </div>
  )
}

export default Bio
