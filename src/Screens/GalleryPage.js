import React, { Component } from 'react';
import {connect} from 'react-redux';

import {  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/GalleryPage.css'

import HomePage from './HomePage.js'
import NavBar from '../Components/NavBar.js';
import CardTatoo from '../Components/CardTatoo.js';
import TattooModal from '../Components/TattooModal.js';


class GalleryPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tattoosList:[]
    };
  }

  componentDidMount(){
    var ctx = this;
    fetch('http://localhost:3000/tattoos')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var tattoosListCopy = [...ctx.state.tattoosList]
        data.map(function(map){
          tattoosListCopy.push(map)
        })
        ctx.setState({ tattoosList: tattoosListCopy});
      })
      .catch(function(error) {
        console.log('Request failed', error)
      });
  }

  render(){
    var tattoosDisplayedCards = [];
    console.log("Current user",this.props.user);
    if(!this.props.user._id){
      for (var i = 0; i < this.state.tattoosList.length; i++) {
        tattoosDisplayedCards.push(<CardTatoo
          key={i}
          tattooID={this.state.tattoosList[i]._id}
          tattooPhotoLink={this.state.tattoosList[i].tattooPhotoLink}
          artistID={this.state.tattoosList[i].artistID}
          tattooStyleList={this.state.tattoosList[i].tattooStyleList}
          tattooLike = {false}
          artistLike = {false}
        />)
      }
    } else {
      for (var i = 0; i < this.state.tattoosList.length; i++) {
        var tattooLike = false;
        var artistLike = false;
        for (var j = 0; j < this.props.user.userFavoriteTattoo.length; j++) {
          if (this.state.tattoosList[i]._id === this.props.user.userFavoriteTattoo[j].favTattooID) {
            tattooLike = true;
            break;
          }
        }
        for (var k = 0; k < this.props.user.userFavoriteArtist.length; k++) {
          if (this.state.tattoosList[i].artistID === this.props.user.userFavoriteArtist[k].favArtistID) {
            artistLike = true;
            break;
          }
        }
        tattoosDisplayedCards.push(<CardTatoo
          key={i}
          tattooID={this.state.tattoosList[i]._id}
          tattooPhotoLink={this.state.tattoosList[i].tattooPhotoLink}
          artistID={this.state.tattoosList[i].artistID}
          tattooStyleList={this.state.tattoosList[i].tattooStyleList}
          tattooLike = {tattooLike}
          artistLike = {artistLike}
        />)
      }
    }

    return(
      <div>
        <NavBar/>
        <HomePage/>
        <div className="container">
          <div className="row gallery-container">
            {tattoosDisplayedCards}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
     user: store.user
  }
}

export default connect(
    mapStateToProps,
    null
)(GalleryPage);
