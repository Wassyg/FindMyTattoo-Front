import React, { Component } from 'react';
import '../Stylesheets/FiltreBar.css';
import logo from '../Assets/filters/Blackwork.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

import CardFiltre from './CardFiltre.js'

class FiltreBar extends Component{
  render(){

    const dataFiltre = [{ text: 'Blackwork'},
                        { text: 'Japonais'},
                        {text: 'Mandala'},
                        {text: 'Neotradi'},
                        {text: 'PostModern'},
                        { text: 'Realiste'},
                        ]

    let filtreList = dataFiltre.map(function(map){
      return <CardFiltre text={map.text} />
    })

    return(
      <div className="container-fluid filtre-bar-container">
        <div className="row card-filtre-container col-12">
          <div className="offset-1">
          </div>
          {filtreList}
        </div>
      </div>
    )
  }
}

export default FiltreBar;
