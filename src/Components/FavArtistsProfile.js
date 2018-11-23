//Alimente UserPage

import React from 'react';
import {Card, CardTitle, CardImg, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';

import TattooArtistCardModal from '../Components/TattooArtistCardModal.js'
import 'bootstrap/dist/css/bootstrap.css';
import '../Stylesheets/FavArtistsProfile.css';


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
      fetch("http://localhost:3000/user?user_id=" + this.props.userId)
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
        artistName={artist.artistNickname} artistImage={artist.artistPhotoLink}
        tattooShop={artist.artistCompanyName}
        artistID={artist._id}
      />
    })

    return (<div className="containerArtist col-12">
      {artistsDisplayedCards}
    </div>);
  }
}

class ArtistCard extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      artistName : this.props.artistName,
      artistImage : this.props.artistImage,
      tattooShop : this.props.tattooShop,
      artistID : this.props.artistID
    }
  }
  render() {
    return (
      <Container style={{padding:10}}>
        <Row id="tattooImageAndArtistInfoBoxModal">
          <Col xs="12" md={{size: "5"}} >
            <TattooArtistCardModal
              artistNickname = {this.state.artistName}
              artistPhotoLink = {this.state.artistImage}
              artistCompanyName = {this.state.tattooShop}
              artistID = {this.state.artistID}
            />
          </Col>
        </Row>
      </Container>
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
