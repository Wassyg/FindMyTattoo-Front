import React, { Component } from 'react';
import logo from '../Assets/filters/Blackwork.jpg';
import '../Stylesheets/FiltreBar.css';



class CardFiltre extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-12 card-filtre">
          <img className="filtre-logo" src={this.props.url}/>
          <p className="filtreStyleTexte">{this.props.text}</p>
        </div>
        <div className="col-12">
        </div>
      </div>

    )
  }
}

export default CardFiltre;
