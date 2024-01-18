import Card from 'react-bootstrap/Card';
import React from 'react';
import ManageComment from './ManageComment';
import DeleteComment from './DeleteComment';

function MyCard({comAtt, mypage}) {
  function formatDateString(originalDateString) {
    const originalDate = new Date(originalDateString);
  
    return originalDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).replace(/\//g, '-');}
  return (
    <>
    <Card className="text-left" style={{margin:'1rem'}}>
      <Card.Header style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '-0.5px' }}>{mypage ? (<p style={{margin:0}}>ゲーム：{comAtt.gamename}</p>) : (<p style={{margin:0}}>ユーザー: {comAtt.nickname}</p>)}</Card.Header>
      <Card.Body>
        <Card.Title>Rating：{comAtt.rating}</Card.Title>
        <Card.Text>
          {comAtt.comment}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted" style={{ fontSize: '14px', display: 'flex', justifyContent: 'space-between' }}><div>日付: {formatDateString(comAtt.commentdate)}</div> <div>{localStorage.getItem('userid') === comAtt.userid && <><ManageComment method={'PUT'} bottonName={'Manage'} comAtt={comAtt}/> <DeleteComment markid={comAtt.markid}/></>}</div></Card.Footer>
    </Card>
    </>
  );
}

export default MyCard;