import React from 'react';
import '../Header/Header.css';
import { Navbar,Container,Nav } from 'react-bootstrap';
import logo from '../../Img/Cuda Logo.png';

const Header = () => {
    return (
        <section className='Main-header'>
            <div>
            <nav >
            <Navbar className='Navbar' bg=""expand="lg" >
            <Container fluid>
    <Navbar.Brand href="#"><img className="logo" src={logo} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className=" navbar-link"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className="link text-white" href="#action1">Home</Nav.Link>
        <Nav.Link className="link text-white"  href="#action2">About</Nav.Link>
        <Nav.Link className="link text-white"  href="#action2">Blog</Nav.Link>
        <Nav.Link className="link text-white"  href="#action2">Contact</Nav.Link>
        
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
            </nav>
            </div>
            <div className='text-center Header-letter'>
            <h3 className='mt-5 pt-5'>Hi there! We are the new kids on the block 
                and we build awesome websites and mobile apps.</h3>
                <button className='mt-3 Header-button'>Work With Us</button>
            </div>
            
        </section>
    );
};

export default Header;