//Alimente UserPage

import React from 'react';
import {Card, CardTitle, CardImg, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';

import TattooArtistCardModal from '../Components/TattooArtistCardModal.js'
import 'bootstrap/dist/css/bootstrap.css';
import '../Stylesheets/FavArtistsProfile.css';
import urlHeroku from '.../config.js';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import {connect} from 'react-redux';


class FavArtistsProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistsList: []
    }
  }

  componentDidMount() {

      var ctx = this;
      fetch(urlHeroku+"/user?user_id=" + this.props.userId)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        var artistsListCopy = [...ctx.state.artistsList];
        var userFavoriteArtist = data.result.userFavoriteArtist;
          userFavoriteArtist.map(function(favArtists) {
            artistsListCopy.push(favArtists)
          })
        ctx.setState({artistsList: artistsListCopy});

      }).catch(function(error) {
        console.log('Request failed', error);
      });

  }

  render() {

    var artistsList = this.state.artistsList;
    console.log("artistsList==>",artistsList)


    // artistsList.push({src: '../avatarsTatoueurs/11201563_749803451831654_737090053_a.jpg', artistName: "Bichon", tattooShop: "Golden Rabbit"});
    // artistsList.push({src: '../avatarsTatoueurs/41450515_1897257143642841_5668628696324374528_n.jpg', artistName: "Princess Madness", tattooShop: "Lez'Art du corps"});

    var artistsDisplayedCards = this.state.artistsList.map(function(artist, i) {
      return <ArtistCard
        key={i}
        artistName={artist.artistNickname}
        artistImage={artist.artistPhotoLink}
        artistCompanyName={artist.artistCompanyName}
        artistDescription={artist.artistDescription}
        artistAddress={artist.artistAddress}
        artistStyleList1={artist.artistStyleList.join("").split(",")[0]}
        artistStyleList2={artist.artistStyleList.join("").split(",")[1]}
        artistStyleList3={artist.artistStyleList.join("").split(",")[2]}
        artistID={artist._id}
      />
    })

    return (
      <div className="containerArtistProfile">
      <div className="row rowArtistProfile col-12">
        {artistsDisplayedCards}
      </div>
      </div>);
  }
}

class ArtistCard extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      artistName : this.props.artistName,
      artistImage : this.props.artistImage,
      artistCompanyName : this.props.artistCompanyName,
      artistDescription : this.props.artistDescription,
      artistAddress : this.props.artistAddress,
      artistStyleList1 : this.props.artistStyleList1,
      artistStyleList2 : this.props.artistStyleList2,
      artistStyleList3 : this.props.artistStyleList3,
      artistID : this.props.artistID
    }
  }
  render() {
    return (
          <div className="col-12 col-sm-6 col-md-4" style={{padding:10, height:380, overflow: "scroll"}} >
            <TattooArtistCardModal
              artistNickname = {this.state.artistName}
              artistPhotoLink = {this.state.artistImage}
              artistCompanyName = {this.state.artistCompanyName}
              artistDescription = {this.state.artistDescription}
              artistAddress = {this.state.artistAddress}
              artistStyleList1 = {this.state.artistStyleList1}
              artistStyleList2 = {this.state.artistStyleList2}
              artistStyleList3 = {this.state.artistStyleList3}
              artistID = {this.state.artistID}
            />
          </div>
    );
  }
}

function mapStateToProps(store) {
  return { userId: store.user._id,
  }
}

export default connect(
    mapStateToProps,
    null
)(FavArtistsProfile);
