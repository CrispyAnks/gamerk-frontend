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
        <Offcanvas.Body>
          <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action>
              <NavLink to='/' className='nav-link'>H O M E</NavLink>
            </ListGroup.Item>
            {props.userid == null &&<ListGroup.Item action>
             <NavLink to='/login' className='nav-link'>L O G I N</NavLink>
            </ListGroup.Item>}
            {props.userid == null &&<ListGroup.Item action>
             <NavLink to='/signup' className='nav-link'>S I G N  U P</NavLink>
            </ListGroup.Item>}
            {props.userid != null &&<ListGroup.Item action>
              <NavLink to={'/mypage/' + props.userid} className='nav-link'>M Y P A G E</NavLink>
            </ListGroup.Item>}
            {props.userid != null &&
            <ListGroup.Item action>
             <NavLink to='/logout' className='nav-link'>L O G O U T</NavLink>
            </ListGroup.Item>}
            <ListGroup.Item action>
              <NavLink to='/about' className='nav-link'>A B O U T  M E</NavLink>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideMenu
