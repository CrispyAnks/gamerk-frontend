import Card from 'react-bootstrap/Card';
import React from 'react';
import ManageComment from './ManageComment';
import DeleteComment from './DeleteComment';

function MyCard({comAtt}) {
  function formatDateString(originalDateString) {
    const originalDate = new Date(originalDateString);
  
    return originalDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).replace(/\//g, '-');}
  return (
    <>
    <Card className="text-left">
      <Card.Header>ユーザー: {comAtt.nickname}</Card.Header>
      <Card.Body>
        <Card.Title>タイトル</Card.Title>
        <Card.Text>
          {comAtt.comment}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">日付: {formatDateString(comAtt.commentdate)} <ManageComment method={'PUT'} bottonName={'Manage'} comAtt={comAtt}/>   <DeleteComment markid={comAtt.markid}/></Card.Footer>
    </Card>
    <br/>
    </>
  );
}

export default MyCard;
