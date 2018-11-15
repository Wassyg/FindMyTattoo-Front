import React from 'react';
import { Col, Button, FormGroup, Label, Input, FormText, Form, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, CardImg, Container, CardBody, Tooltip } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '../Stylesheets/FavTattoosProfile.css';



export default class FavTattoosProfile extends React.Component {
  render() {
    var tattoosList = [];
    for(var i =1; i< 8; i ++){
      tattoosList.push({src:'../tatouagesBichon/photoBichon'+ i +'.jpg', artistName:"Bichon"})
    };
    for(var i =1; i< 8; i ++){
      tattoosList.push({src:'../tatouagesPrincess/photoMadness'+ i +'.jpg', artistName:"Princess Madness"})
    };


        var tattoosDisplayedCards = tattoosList.map(function(tattoo, i){
          return <TattooCard
           key={i}
           artistName={tattoo.artistName}
           tattooImage={tattoo.src}/>
       })

    return (
      <div className="containerTattoos col-12">
          <div className="row">
            {tattoosDisplayedCards}
          </div>
      </div>
    );
  }
}

class TattooCard extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     isMouseOver: false
   }
 }


 handleMouseOver = () => {
   this.setState({isMouseOver: true});
 }

 handleMouseOut = () => {
   this.setState({isMouseOver: false});
 }



  render() {
    console.log("this.state.isMouseOver", this.state.isMouseOver);

    return(
      <div className="containerCard col-6" onMouseOver ={this.handleMouseOver} onMouseOut={this.handleMouseOut}>

           <div id="imgContainer">
             <CardImg id ="TattooImg" src={this.props.tattooImage} alt="Card image cap"/>
               {this.state.isMouseOver
               ? <div className="infoArtistUnderImg">{this.props.artistName}</div>
               :<div></div>
             }
           </div>

      </div>

    );
  }
}
