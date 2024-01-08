import React from 'react';
import Card from 'react-bootstrap/Card';

function SearchResult(props) {
  return (
    <div>
      <Card style={{ width: '38rem' }}>
      <Card.Body>
        <Card.Title>{props.res.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.res.rating}</Card.Subtitle>
        <Card.Text>
          {props.res.intro}
        </Card.Text>
        <Card.Link href={"/game/" + props.res.gameid}>Link</Card.Link>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default SearchResult
