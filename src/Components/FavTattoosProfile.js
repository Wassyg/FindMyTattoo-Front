import React from 'react';
import {CardImg} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '../Stylesheets/FavTattoosProfile.css';

export default class FavTattoosProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tattoosList: []
    }
  }

  ComponentDidMount() {
    var ctx= this;
    fetch("http://localhost:3000/user")
          .then((response)=> response.json())
          .then((user)=> {
            console.log("user du fetch favorite tattoos", user);
            var tattoosListCopy =[...ctx.state.tattoosList];
            tattoosListCopy.push(user.userFavoriteTattoo);
            ctx.setState({
              tattoosList : tattoosListCopy
            })
              })
          .catch((error)=> console.log('Request failed', error));
  }

  render() {
  console.log("tattoosList", this.state.tattoosList);
        var tattoosList = this.state.tattoosList;
        var tattoosDisplayedCards = tattoosList.map(function(tattoo, i){
          return <TattooCard
           key={i}
           artistName={tattoo.artistName}
           tattooImage={tattoo.src}/>
       })

    return (
      <div className="containerTattoos">
          <div className="row rowTattoos">
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
      <div className="containerCard" onMouseOver ={this.handleMouseOver} onMouseOut={this.handleMouseOut}>

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
