'use strict';
import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Menu extends React.Component {
  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/index'>
              <NavItem>Home</NavItem>
            </LinkContainer>
            <NavItem eventKey={1} href='/about'>About</NavItem>
              <LinkContainer to='/contact'>
            <NavItem>Contact Us</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to='/admin/products/new'>
              <NavItem>Admin</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default Menu;
