import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SideMenu from './SideMenu';
import { Button } from 'react-bootstrap';


function NavBar() {
  const [userid, setUserId] = useState();
  useEffect(() => {
    setUserId(localStorage.getItem('userid'));
    console.log(userid)
  }, [userid]);
  
  const [showOffCanvNav, setShowOffCanvNav] = useState(false);
  return (
    <>
    <Navbar collapseOnSelect expand="md" className="" style={{padding:0, backgroundColor:'#9177F2', opacity:0.8}}>
      <Container style={{margin:0, padding:0, maxWidth:'100%'}}>
      <Button style={{height:'100%',borderRadius: '0',color: 'white', fontFamily:'monospace',fontSize:'18px',fontWeight: 'bolder', backgroundColor:'#410590', height:'4rem'}} variant="dark" onClick={() => setShowOffCanvNav(true)}>Gamerk</Button>
      <SideMenu userid={userid}/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" style={{opacity: '0.5',borderRadius: '0'}}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href='/' style={{ color:'white',fontFamily:'monospace',fontWeight: 'bold' }}>Home</Nav.Link>
            <Nav.Link href="/catalog" style={{ color:'white',fontFamily:'monospace',fontWeight: 'bold' }}>Catalog</Nav.Link>
            <Nav.Link href="/news" style={{ color:'white',fontFamily:'monospace',fontWeight: 'bold' }}>News</Nav.Link>
            <Nav.Link href="/search" style={{ color:'whitesmoke',fontFamily:'Hiragino Sans',fontWeight: 'bold' }}>検索</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <SideMenu isShow={showOffCanvNav} handleClose1={()=>setShowOffCanvNav(false)} userid={userid} />
    </>
  )
}

export default NavBar;
