import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Marked(props) {
  const [gameWant, setGameWant] = useState([]);
  const [gamePlaying, setGamePlaying] = useState([]);
  const [gameRated, setGameRated] = useState([]);

  useEffect(() => {
    if (props.data.length > 0) {
      const propsData = props.data;
      propsData.forEach((item) => {
        switch (item.status) {
          case 1:
            if (gameWant.length < 3) {
              setGameWant((prev) => [...prev, item]);
            }
            break;
          case 2:
            if (gamePlaying.length < 3) {
              setGamePlaying((prev) => [...prev, item]);
            }
            break;
          case 3:
            if (gameRated.length < 3) {
              setGameRated((prev) => [...prev, item]);
            }
            break;
          default:
            break;
        }
      });
    }
  }, [props.data]);

  return (
    <Tabs defaultActiveKey="playing" id="justify-tab" className="mb-3" justify>
      <Tab eventKey="want-to-play" title="Want">
        {gameWant.length !== 0 ? (
    <ul>
      {gameWant.map((item) => (
        <li key={item.markid}>{<a href={'/game/' + item.gameid}><img src={item.imgsrc} style={{maxWidth:'50%'}}/></a>}</li>
      ))}
    </ul>
  ) : '0'}
      </Tab>
      <Tab eventKey="playing" title="Playing">
      {gamePlaying.length !== 0 ? (
    <ul>
      {gamePlaying.map((item) => (
        <li key={item.markid}>{<a href={'/game/' + item.gameid}><img src={item.imgsrc} style={{maxWidth:'50%'}}/></a>}</li>
      ))}
    </ul>
  ) : (
    '0'
  )}
      </Tab>
      <Tab eventKey="rated" title="Rated">
        {gameRated.length !== 0 ? (
    <ul>
      {gameRated.map((item) => (
        <li key={item.markid}>{<a href={'/game/' + item.gameid}><img src={item.imgsrc} style={{maxWidth:'50%'}}/></a>}</li>
      ))}
    </ul>
  ) : '0'}
      </Tab>
    </Tabs>
  );
}

export default Marked;
