import React from 'react';
import Card from 'react-bootstrap/Card';

function SearchResult(props) {
  return (
    <div>
      <Card className="text-left">
      <Card.Header>{props.res.platform}</Card.Header>
      <Card.Body>
        <Card.Title>{props.res.name}</Card.Title>
        <br/>
        <Card.Subtitle className="mb-2 text-muted">Rating: {props.res.rating}</Card.Subtitle>
        <Card.Text>
          Intro: {props.res.intro}
        </Card.Text> 
      </Card.Body>
      <Card.Footer className="text-muted"> <Card.Link href={"/game/" + props.res.gameid}>Link</Card.Link> </Card.Footer>
    </Card>
    </div>
  )
}

export default SearchResult
