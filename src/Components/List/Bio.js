import React from 'react';
import BioEdit from '../Functions/BioEdit';

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
    <div style={{border: '1px solid #ccc',padding:'0 0 1rem 0', borderRadius:'0 0 10px 10px',color: 'rgba(120, 120, 120, 1)', margin:'2rem 2rem 0 0'}}>
        <h1 style={{ backgroundColor: 'rgba(100, 100, 0, 0.1)',margin:'0',padding:'0.5rem'}}>{props.bio.name ? ('This is ' + props.bio.name) : ('Hi, ' + props.bio.nickname + "!")}</h1>
      <table class="table table-borderless">
        <thead>
        <tr>
          <th style={{textAlign:'right', width:'30%',color: 'rgba(120, 120, 120, 1)',}}>{props.bio.name ? ("ゲーム名:") : ("ユーザー:")}</th>
          <td>{props.bio.name ? (props.bio.name) : (props.bio.nickname)}</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th style={{textAlign:'right',color: 'rgba(120, 120, 120, 1)',}}>{props.bio.gender ? ("性別:") : ("タグ:")}</th>
          <td>{props.bio.gender ? (props.bio.gender) : (props.bio.tag01 + " " + props.bio.tag02 + " " + props.bio.tag03)}</td>
        </tr>
        <tr>
        <th style={{textAlign:'right',color: 'rgba(120, 120, 120, 1)',}}>{props.bio.reldate ? ("発売日:") : ("イントロ:")}</th>
          <td>{props.bio.reldate ? (formatDateString(props.bio.reldate)) : (props.bio.intro)}</td>
        </tr>
        </tbody>
      </table>
      <hr/>

      {props.bio.username ? (<BioEdit method={'PUT'} bottonName={'Edit'} bio={props.bio}/>) : (<p></p>)}
      
      
      
    </div>
  )
}

export default Bio
