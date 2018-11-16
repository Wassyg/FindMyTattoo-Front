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

  componentDidMount() {
    var ctx = this;
    fetch("http://localhost:3000/user?user_id="+"5beee9149dbdeb5bac33360e")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var tattoosListCopy = [...ctx.state.tattoosList];
      data.result.userFavoriteTattoo.map(function(map){
        return tattoosListCopy.push(map)
      })
      ctx.setState({ tattoosList: tattoosListCopy});
    })
    .catch(function(error) {
      console.log('Request failed', error);
    });
  }

  render() {
    var tattoosDisplayedCards = this.state.tattoosList.map(function(tattoo, i) {
      return <TattooCard key={i} artistName="Bichon" tattooImage={tattoo.tattooPhotoLink}/>
    });

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

    return (
      <div className="containerCard col-6" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <div id="imgContainer">
          <CardImg id="TattooImg" src={this.props.tattooImage} alt="Card image cap"/>
          {
            this.state.isMouseOver
              ? <div className="infoArtistUnderImg">{this.props.artistName}</div>
              : <div></div>
          }
        </div>
      </div>
    );
  }
}
