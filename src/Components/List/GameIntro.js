
import Card from 'react-bootstrap/Card';
import ManageComment from '../Functions/ManageComment';

function GameIntro(props) {
  return (
    <Card className="text-left">
      <Card.Header>Game Intro</Card.Header>
      <Card.Body>
        <Card.Title>About this game</Card.Title>
        <Card.Text>
          {props.intro.intro}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">{localStorage.getItem('userid') != null && <ManageComment gameid={props.gameid}/>}</Card.Footer>
    </Card>
  );
}

export default GameIntro;