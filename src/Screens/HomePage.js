import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from '../Assets/logos/logoBlanc.png';
import NavBar from '../Components/NavBar.js';
import LoginForm from '../Components/LoginForm.js';
import {Popover, OverlayTrigger} from 'react-bootstrap' //régler le problème du OverlayTrigger !!
import '../Stylesheets/HomePage.css';

class HomePage extends Component {
  render(){
    return (

    <div className="container-homePageContainer">
      <NavBar/>
    <LoginForm />

      <div className="homePageContent">
        <div className="homePageContentBackgroundColor">
          <div className="findMyTattooIntro">BIENVENUE À CELLES ET CEUX QUI PENSENT QU'ON PEUT TOUT REGRETTER
            <br/>
            <strong>SAUF SON TATOUAGE !</strong>

          </div>
          <div className="findMyTattooPromise">
            <div className="findmytattooLogoPack">
              <img src={logo}/>
              <h1>Find My Tattoo</h1>
            </div>
            <h2>Rassemble
              <strong>VOS TATOUEURS PREFERES</strong>
              et leurs travaux de
              <strong>TATOUAGES</strong>
              pour que soyez certains de
              <strong>TOUJOURS FAIRE LE BON CHOIX
              </strong>
            </h2>
          </div>

          <div className="homePageFunctionalities">
            <div className="homePageSingleFunctionality col-xs-12">
              <p className="textSingleFunctionality">INSPIREZ-VOUS DES PLUS BEAUX TATOUAGES RÉALISÉS</p>
            </div>
            <div className="homePageSingleFunctionality col-xs-12 ">
              <p className="textSingleFunctionality">TROUVEZ LE TATOUEUR IDEAL POUR VOTRE PROJET</p>
            </div>
              <div className="homePageSingleFunctionality col-xs-12">
                <p className="textSingleFunctionality">PRENEZ LE TEMPS DE CONSTRUIRE VOTRE TATOUAGE</p>
              </div>
          </div>
        </div>

      </div>

    </div>)
  }
}

export default HomePage;
