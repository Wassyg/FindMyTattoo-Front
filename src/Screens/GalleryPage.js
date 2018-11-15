import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/GalleryPage.css'


import NavBar from '../Components/NavBar.js';
import CardTatoo from '../Components/CardTatoo.js';
import FiltreBar from '../Components/FiltreBar.js';



class GalleryPage extends Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
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
          <div>
          <Button className="row-button col-12" color="link" onClick={this.toggle}>Pour filtrer par styles de tatouages ></Button>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody className="btn-filtre">
                <p className= 'filtreStyleTexte'>Un style en particulier ?</p>
                <FiltreBar />
              </CardBody>
            </Card>
          </Collapse>
        </div>
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
