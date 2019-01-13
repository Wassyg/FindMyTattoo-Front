//// Navbar for the gallerypage ////


/* Importing key components */
import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

/* Importing other components */
import AuthForm from '../Components/AuthForm.js';

/* Importing styles and images */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavbarToggler, Collapse, Button} from "mdbreact";
import '../Stylesheets/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'


class NavbarPage extends Component {
  state = {
    isOpen: false,
    scroll: 0,
    clickOnForm : false,
    routeUserPage : '/'
  };

  toggleAuth = () => {
    this.setState({
      clickOnForm: !this.state.clickOnForm
    })
  }

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

  handleClick = () => {
    if(this.props.user._id == null){
      this.setState({
        clickOnForm: !this.state.clickOnForm,
        routeUserPage : '/',
      });
    }
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
    return (
      <Navbar className={classNavbar.join(" ")}  dark expand="md">
        <NavbarBrand>
          <strong className={classLogoNav.join(" ")}>Find my Tattoo</strong>
        </NavbarBrand>

        <Button outline color="warning" onClick={()=>this.toggleAuth()}>
          <FontAwesomeIcon icon={faUser} className="fa-lg"/>
          <AuthForm clickOnForm={this.state.clickOnForm}/>
        </Button>
        <p className={classNavBtn.join(" ")}>{this.props.user.userFirstName}</p>

        <NavbarToggler
          onClick={() => this.toggleCollapse()}
        />

        <Collapse className="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <NavbarNav left>
          </NavbarNav>
          <NavbarNav right>
            <NavItem>
              <Link className={classNavBtn.join(" ")} to={'/'}>Galerie</Link>
            </NavItem>
            <NavItem>
              <Link className={classNavBtn.join(" ")} to={this.props.user._id ?"/UserPage#top" :"/"} onClick={()=>this.handleClick()}>MoodBoard</Link>
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
