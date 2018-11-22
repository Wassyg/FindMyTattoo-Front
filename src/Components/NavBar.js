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
    isOpen: false,
    scroll: 0,
  };

  componentDidMount() {
     window.addEventListener('scroll', this.handleScroll);
   }

   componentWillUnmount() {
     window.removeEventListener('scroll', this.handleScroll);
   }

   handleScroll = () => {
     this.setState({scroll: window.scrollY});
  }

  toggleCollapse = () =>{
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    let classNavbar = ["Navbar"];
    let classLogoNav = ["logo-navbar"];
    let classNavBtn = ["nav-btn"];

    if(this.state.scroll > 50){
        classNavbar.push("navbar-scrolled");
        classLogoNav.push("logo-navbar-scrolled");
        classNavBtn.push("nav-btn-scrolled");
     }

     console.log(classNavbar);
    return (
      <Navbar className={classNavbar.join(" ")}  dark expand="md">
        <NavbarBrand>
          <strong className={classLogoNav.join(" ")}>Find my Tattoo</strong>
        </NavbarBrand>
        <AuthForm/>
        <p>{this.props.user.userFirstName}</p>
        <NavbarToggler
          onClick={() => this.toggleCollapse()}
        />
        <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <NavbarNav left>

          </NavbarNav>

          <NavbarNav right>
            <NavItem>
              <Link className={classNavBtn.join(" ")} to={'/'}>Galerie</Link>
            </NavItem>
            <NavItem>
              <Link className={classNavBtn.join(" ")} to={'/UserPage'}>MoodBoard</Link>
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
