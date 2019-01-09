//Alimente UserPage

import React from 'react';
import {CardImg} from 'reactstrap';

import {connect} from 'react-redux';

import CardTatoo from '../Components/CardTatoo.js';
import url from '../config.js';

import 'bootstrap/dist/css/bootstrap.css';
import '../Stylesheets/FavTattoosProfile.css';

class FavTattoosProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favTattoosList: []
    }
  }

  componentDidMount() {
    var ctx= this;
    this.setState({
      favTattoosList: this.props.user.userFavoriteTattoo
    })
  }

  render() {
    var favTattoosDisplayedCards = [];
    for (var i = 0; i < this.state.favTattoosList.length; i++) {
      var tattooLike = true;
      var artistLike = false;
      for (var k = 0; k < this.props.user.userFavoriteArtist.length; k++) {
        if (this.state.favTattoosList[i].artistID === this.props.user.userFavoriteArtist[k].favArtistID) {
          artistLike = true;
          break;
        }
      }
      favTattoosDisplayedCards.push(<CardTatoo
        key={i}
        tattooID={this.state.favTattoosList[i]._id}
        tattooPhotoLink={this.state.favTattoosList[i].tattooPhotoLink}
        artistID={this.state.favTattoosList[i].artistID}
        tattooStyleList={this.state.favTattoosList[i].tattooStyleList}
        tattooLike = {tattooLike}
        artistLike = {artistLike}
      />)
    }

    return (
      <div className="containerTattoosProfile">
        <div className="row rowTattoosProfile col-12">
          {favTattoosDisplayedCards}
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    user: store.user,
  }
}

export default connect(
    mapStateToProps,
    null
)(FavTattoosProfile);
