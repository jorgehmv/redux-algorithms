import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import config from '../../config';

export default () => {
  const styles = require('./Navbar.scss');
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">{config.app.title}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav navbar>
          <NavItem href="#Overview">Overview</NavItem>
          <NavDropdown title="Algorithms" id="basic-nav-dropdown">
            <MenuItem href="#BubbleSort">Bubble Sort</MenuItem>
            <MenuItem href="#InsertionSort">Insertion Sort</MenuItem>
            <MenuItem href="#Quicksort">Quicksort</MenuItem>
          </NavDropdown>
          <NavItem href="#About">About</NavItem>
        </Nav>
        <Nav navbar pullRight>
          <NavItem target="_blank" title="View on Github" href="https://github.com/jorgehmv/redux-algorithms">
            <i className={`${styles.github} fa fa-github`} />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

