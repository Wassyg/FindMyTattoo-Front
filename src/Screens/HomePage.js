//// Landing page with introductory page and text ////


/* Importing key components */
import React, {Component} from 'react';

/* Importing styles and images */
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import '../Stylesheets/HomePage.css';


class HomePage extends Component {
  render(){
    return (
      <div className="container-homePageContainer">
        <div className="text-accueil">
          <h1 className="findMyTattooTitle">Find My Tattoo</h1>
          <hr></hr>
          <hr></hr>
          <h2>vous aide à construire votre projet</h2>
          <h2> et à trouver le tatoueur ou la tatoueuse idéal(e)</h2>
        </div>
        <Animated animationIn="flash" isVisible={true} animationInDelay={3000} animateOnMount={true}>
          <FontAwesomeIcon icon={faChevronCircleDown} className="scrollTo"/>
        </Animated>
      </div>
    )
  }
}

export default HomePage;
