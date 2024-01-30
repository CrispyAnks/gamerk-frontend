import React from 'react';
import { NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';

function SideMenu(props) {
  const {isShow, handleClose1 } = props;

  return (
    <>
      <Offcanvas id={`offcanvasNavbar-expand`} show={isShow} onHide={handleClose1}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>M E N U</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{backgroundcolor:'rgba(246, 173, 73, 0.95)', textAlign:'center'}}>
          <ListGroup defaultActiveKey="#link1" >
            <ListGroup.Item action >
              <NavLink to='/' className='nav-link' style={{fontWeight: 'bold' }}>ホーム</NavLink>
            </ListGroup.Item>
            {props.userid == null &&<ListGroup.Item action>
             <NavLink to='/login' className='nav-link' style={{fontWeight: 'bold' }}>ログイン</NavLink>
            </ListGroup.Item>}
            {props.userid == null &&<ListGroup.Item action>
             <NavLink to='/signup' className='nav-link' style={{fontWeight: 'bold' }}>サインアップ</NavLink>
            </ListGroup.Item>}
            {props.userid != null &&<ListGroup.Item action>
              <NavLink to={'/mypage/' + props.userid} className='nav-link' style={{fontWeight: 'bold' }}>マイページ</NavLink>
            </ListGroup.Item>}
            {props.userid != null &&
            <ListGroup.Item action>
             <NavLink to='/logout' className='nav-link' style={{fontWeight: 'bold' }}>ログアウト</NavLink>
            </ListGroup.Item>}
            <ListGroup.Item action>
              <NavLink to='https://sei-portfolio-e34a1928f16c.herokuapp.com/' className='nav-link'>A B O U T  M E</NavLink>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideMenu
