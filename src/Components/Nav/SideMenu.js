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
          <Offcanvas.Title>メニュー</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action>
              <NavLink to='/' className='nav-link'>ホーム</NavLink>
            </ListGroup.Item>
            {props.userid == null &&<ListGroup.Item action>
             <NavLink to='/login' className='nav-link'>ログイン</NavLink>
            </ListGroup.Item>}
            {props.userid == null &&<ListGroup.Item action>
             <NavLink to='/signup' className='nav-link'>サインアップ</NavLink>
            </ListGroup.Item>}
            {props.userid != null &&<ListGroup.Item action>
              <NavLink to={'/mypage/' + props.userid} className='nav-link'>マイページ</NavLink>
            </ListGroup.Item>}
            {props.userid != null &&
            <ListGroup.Item action>
             <NavLink to='/logout' className='nav-link'>ログアウト</NavLink>
            </ListGroup.Item>}
            {/* <ListGroup.Item action>
              <NavLink to='/about' className='nav-link'>A B O U T  M E</NavLink>
            </ListGroup.Item> */}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideMenu
