import Card from 'react-bootstrap/Card';
import React from 'react';
import ManageComment from './ManageComment';
import DeleteComment from './DeleteComment';

function MyCard({comAtt}) {
  return (
    <>
    <Card className="text-left">
      <Card.Header>Username: {comAtt.userid}</Card.Header>
      <Card.Body>
        <Card.Title>Comment Title</Card.Title>
        <Card.Text>
          {comAtt.comment}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Comment Date: {comAtt.comment_date}<ManageComment/>   <DeleteComment markid={comAtt.markid}/></Card.Footer>
    </Card>
    <br/>
    </>
  );
}

export default MyCard;