import React, { Component } from 'react';
import '../Stylesheets/FiltreBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Blackwork from '../Assets/filters/Blackwork.jpg';
import Japonais from '../Assets/filters/Japonais.png';
import Mandale from '../Assets/filters/Mandala.png';
import Neotradi from '../Assets/filters/Neotradi.jpg';
import PostModern from '../Assets/filters/PostModern.jpg';
import Realiste from '../Assets/filters/Realiste.jpg';


import CardFiltre from './CardFiltre.js'

class FiltreBar extends Component{
  render(){

    const dataFiltre = [{url:Blackwork, text: 'Blackwork'},
                        {url:Japonais, text: 'Japonais'},
                        {url:Mandale, text: 'Mandala'},
                        {url:Neotradi, text: 'Neotradi'},
                        {url:PostModern, text: 'PostModern'},
                        {url:Realiste, text: 'Realiste'},
                        ]

    let filtreList = dataFiltre.map(function(map){
      return <CardFiltre text={map.text}  url={map.url}/>
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
