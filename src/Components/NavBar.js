import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";
import '../Stylesheets/NavBar.css';





class NavbarPage extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () =>{
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Navbar color="default-color" dark expand="md">
          <NavbarBrand>
            <strong className="white-text">Find my Tattoo</strong>
          </NavbarBrand>
          <NavbarToggler
            onClick={() => this.toggleCollapse()}
          />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav left>

            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <Link className="nav-btn" to={'/'}>Galerie</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-btn" to={'/UserPage'}>MoodBoard</Link>
              </NavItem>
              <NavItem>
              <p className="nav-sign">Log in</p>
              </NavItem>
            </NavbarNav>
          </Collapse>
      </Navbar>
    );
  }
}

export default NavbarPage;
