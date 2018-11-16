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
    this.state = { collapse: false , pictureData:[]};
  }

  componentDidMount(){
   var ctx = this;
   fetch('http://localhost:3000/tattoos')
   .then(function(response) {
     return response.json();
   })
   .then(function(data) {

     var pictureDataCopy = [...ctx.state.pictureData]
     data.map(function(map){
       pictureDataCopy.push(map)
     })

     ctx.setState({ pictureData: pictureDataCopy});

   })
   .catch(function(error) {
     console.log('Request failed', error)
   });
 }



  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render(){
    


    let pictureList = this.state.pictureData.map(function(map, i){
      return <CardTatoo key={i} idPicture={map._id} tattooPhotoLink={map.tattooPhotoLink} artistId={map.artistID} tattooStyleList={map.tattooStyleList}  />
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
