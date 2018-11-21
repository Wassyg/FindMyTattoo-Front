import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

//Import des composants externes
import AuthForm from '../Components/AuthForm.js';

//Import des librairies ou composants de style
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavbarToggler, Collapse} from "mdbreact";
import '../Stylesheets/NavBar.css';

import {connect} from 'react-redux';

class NavbarPage extends Component {
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
        <AuthForm/>
        <p>Welcome {this.props.user.userFirstName}</p>
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

            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user }
}

export default connect(
    mapStateToProps,
    null
)(NavbarPage);
