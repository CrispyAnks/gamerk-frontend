
import Card from 'react-bootstrap/Card';
import ManageComment from '../Functions/ManageComment';

function GameIntro(props) {
  
  return (
    <Card className="text-left">
      <Card.Header>ゲーム紹介</Card.Header>
      <Card.Body>
        <Card.Title>このゲームについて</Card.Title>
        <Card.Text>
          {props.intro.intro}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">{localStorage.getItem('userid') != null && props.show && <ManageComment gameid={props.gameid} method={'POST'} bottonName={'Add'}/>}</Card.Footer>
    </Card>
  );
}

export default GameIntro;