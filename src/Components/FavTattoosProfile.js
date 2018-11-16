import React from 'react';
import { CardImg } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '../Stylesheets/FavTattoosProfile.css';



export default class FavTattoosProfile extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tattoosList: []
    }
  }

  // ComponentDidMount() {
  //   var ctx= this;
  //   fetch("http://localhost:3000/user")
  //         .then(function(response) {
  //             return response.json();
  //           })
  //         .then(function(data) {
  //           tatoosListCopy =[...tattoosList];
  //           tatoosListCopy.push(data.userFavoriteTattoo);
  //           ctx.setState({
  //             tattoosList : tatoosListCopy
  //           })
  //             })
  //         .catch(function(error) {
  //             console.log('Request failed', error)
  //           });
  // }

  render() {
  console.log("tattoosList", this.state.tattoosList);
  var tattoosList= [];
    for(var i =1; i< 8; i ++){
      tattoosList.push({src:'../tatouagesBichon/photoBichon'+ i +'.jpg', artistName:"Bichon"})
    };
    for(var j =1; j< 8; j ++){
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
