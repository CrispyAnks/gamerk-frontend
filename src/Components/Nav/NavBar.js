import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SideMenu from './SideMenu';

function NavBar() {
  const [userid, setUserId] = useState();
  useEffect(() => {
    setUserId(localStorage.getItem('userid'));
    console.log(userid)
  }, [userid])
  
  return (
    <>
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container>
      <SideMenu userid={userid}/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/catalog">Catalogs</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar;