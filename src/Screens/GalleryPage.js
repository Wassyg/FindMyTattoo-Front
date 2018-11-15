import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logoTat from '../photoBichon1.jpg'

import NavBar from '../Components/NavBar.js';
import CardTatoo from '../Components/CardTatoo.js';



class GalleryPage extends Component{
  render(){
    const pictureData = [{idT: 'azertyuiioopqsdfé', url:'../avatarsTatoueurs/11201563_749803451831654_737090053_a.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                         {idT: 'azertyuiioopqsdfé', url: '../tatouagesBichon/photoBichon1.jpg', tag:['#eyes','#dead','#mescouille'], filtre: ['japan', 'ect', 'ect'], idA:'john doe'},
                        ]
    let pictureList = pictureData.map(function(map, i){
      return <CardTatoo key={i} idT={map.iDt} url={map.url} tag={map.tag} filtre={map.filtre} idA={map.idA}  />
    })
    return(
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            {pictureList}
          </div>
        </div>
      </div>
    )
  }
}




export default GalleryPage;
