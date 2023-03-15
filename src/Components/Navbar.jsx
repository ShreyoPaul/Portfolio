import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {NavLink } from 'react-router-dom';
import "../css/navbar.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="" variant="dark" className='nav' style={{opacity:'1',transition: '1s',zIndex:'100'}}>
        <Container>
        <Nav className=" mx-15">
            <img src="https://picsum.photos/50/50" alt="" style={{zIndex:'1',borderRadius:'50%'}} />
        </Nav>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className=""  style={{opacity:'1'}}>
            <NavLink  to="/" className='navb px-3'>Home</NavLink >
            <NavLink  to="/skill" className='navb px-3'>Skills</NavLink >
            <NavLink  to="/project" className='navb px-3'>Projects</NavLink >
            <NavLink  to="/contact" className='navb px-3'>Contact</NavLink >
            {/* <NavLink  to="/" className='navb px-3'></NavLink > */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;