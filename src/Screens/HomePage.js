import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import { ScrollTo } from "react-scroll-to";

import NavBar from '../Components/NavBar.js';
import GalleryPage from './GalleryPage.js';
import Logo from '../Assets/logos/logoBlanc.png';
import AuthForm from '../Components/AuthForm.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

import '../Stylesheets/HomePage.css';


class HomePage extends Component {


  render(){
    return (

    <div className="container-homePageContainer">
      <div className="text-accueil">
        <h1 className="findMyTattooTitle">Find My Tattoo</h1>
        <h2>vous aide à construire votre projet et à trouver le tatoueur ou la tatoueuse idéal(e)</h2>
      </div>


      <ScrollTo>
       {({ scrollTo }) => (
         <a onClick={() => scrollTo({y: 830, smooth: true})}><FontAwesomeIcon icon={faChevronCircleDown} className="scrollTo"/></a>
       )}
      </ScrollTo>
    </div>
  )}
}

export default HomePage;
