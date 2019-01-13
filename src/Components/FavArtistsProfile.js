//// User Favorite Artist gallery  ////


/* Importing key components */
import React from 'react';
import {connect} from 'react-redux';

/* Importing styles and images */
import '../Stylesheets/FavArtistsProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

/* Importing other components */
import TattooArtistCardModal from '../Components/TattooArtistCardModal.js';


class FavArtistsProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favArtistsList: []
    }
  }

  componentDidMount() {
    this.setState({
      favArtistsList: this.props.user.userFavoriteArtist
    })
  }

  render() {
    var favArtistsDisplayedCards = this.state.favArtistsList.map(function(artist) {
      return (
        <div className="tattooArtistCardProfile col-12 col-sm-6 col-md-4" style={{padding:5, height:400, minWidth:310}} >
          <TattooArtistCardModal
            artistID={artist.favArtistID}
            artistLike={true}
          />
        </div>)
    })
    return (
      <div className="containerArtistProfile">
        <div className="row rowArtistProfile col-12">
          {favArtistsDisplayedCards}
        </div>
      </div>);
  }
}


function mapStateToProps(store) {
  return {user: store.user}
}

export default connect(
    mapStateToProps,
    null
)(FavArtistsProfile);
