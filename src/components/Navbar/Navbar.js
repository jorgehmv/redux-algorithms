import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import config from '../../config';

export default () => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">{config.app.title}</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse eventKey={0}>
      <Nav navbar className="visible-xs">
        <NavItem eventKey={1} href="/">Home</NavItem>
        <NavItem eventKey={1} href="#">Bubble Sort</NavItem>
        <NavItem eventKey={1} href="#">Insertion Sort</NavItem>
        <NavItem eventKey={1} href="#">Quick Sort</NavItem>
        <NavItem eventKey={1} href="#">About</NavItem>
      </Nav>
      <Nav navbar pullRight>
        <NavItem eventKey={1} target="_blank" title="View on Github" href="https://github.com/jorgehmv/redux-algorithms">
          <i className="fa fa-github" />
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
