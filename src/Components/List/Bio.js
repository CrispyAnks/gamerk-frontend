import React from 'react'

function Bio(props) {
  return (
    <div>
      <h1>bio</h1><br/>
      <table class="table table-borderless">
        <thead>
        <tr>
          <th>{props.bio.name ? ("Game Name:") : ("Username:")}</th>
          <td>{props.bio.name ? (props.bio.name) : (props.bio.username)}</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>{props.bio.gender ? ("Gender:") : ("Tag:")}</th>
          <td>{props.bio.gender ? (props.bio.gender) : (props.bio.tag01 + " " + props.bio.tag02 + " " + props.bio.tag03)}</td>
        </tr>
        <tr>
        <th>{props.bio.reldate ? ("Release Date:") : ("Intro:")}</th>
          <td>{props.bio.reldate ? (props.bio.reldate) : (props.bio.intro)}</td>
        </tr>
        </tbody>
      </table>
      <hr/>
      
    <a class="btn btn-success" href="#">Edit</a>
      
    </div>
  )
}

export default Bio
