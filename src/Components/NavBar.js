import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../Stylesheets/NavBar.css'


import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../Assets/logos/logoBlanc.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';



import HomePage from '../Screens/HomePage.js'
import GalleryPage from '../Screens/GalleryPage.js'
import ArtistPage from '../Screens/ArtistPage.js'
import UserPage from '../Screens/UserPage.js'



class NavBar extends Component{

  render(){
    const route = [{route: "/GalleryPage", icon: faHeart, key: 'gallery'},
                   {route: "/ArtistPage", icon: faStar, key: 'artist'},
                   {route: "/UserPage", icon: faUser, key: 'user'},
                   ]

    let btnList = route.map(function(route){
      return<Navbtn route={route.route} icon={route.icon} position={route.key}  />
    })

    return(
      <nav className="navbarContainer">
          <div className="logo-container">
            <img src={logo} />
          </div>

          <div className="btn-container">
            {btnList}
          </div>

          <div className="basket-container">
            <div className="basket-like">
              <p>0</p>
              <FontAwesomeIcon className="basket-like-icon" icon={faHeart} />
            </div>
            <div className="basket-artist">
              <p>0</p>
              <FontAwesomeIcon className="basket-artist-icon" icon={faStar} />
            </div>
          </div>
      </nav>
    )
  }
}

class Navbtn extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false,
    }
  }


  handleMouseOver = () => {
    this.setState({isMouseOver: true});
  }

  handleMouseOut = () => {
    this.setState({isMouseOver: false});
  }


  render(){

    let btnClasse = 'nav-btn'

    if(this.state.isMouseOver){
      btnClasse = 'nav-btn-hover'
    }else if(!this.state.isMouseOver){
      btnClasse = 'nav-btn'
    }



    return(

      <Link className="navUl" to={this.props.route}>
          <div
             className="circle-container"
             onMouseOver={() => this.handleMouseOver()}
             onMouseOut={() => this.handleMouseOut()}
           >
            <FontAwesomeIcon className={btnClasse} icon={this.props.icon} />
          </div>
      </Link>
    )
  }

}

export default NavBar;
