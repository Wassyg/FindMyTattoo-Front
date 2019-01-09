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
    // console.log("pour le format ID du tattoo ===>", this.state.pictureData);
    var pictureList = [];
    console.log("Current user",this.props.user);
    if(!this.props.user._id){
      for (var i = 0; i < this.state.pictureData.length; i++) {
        pictureList.push(<CardTatoo
          key={i}
          tattooID={this.state.pictureData[i]._id}
          tattooPhotoLink={this.state.pictureData[i].tattooPhotoLink}
          artistID={this.state.pictureData[i].artistID}
          tattooStyleList={this.state.pictureData[i].tattooStyleList}
          tattooLike = {false}
          artistLike = {false}
        />)
      }
    } else {
      console.log("checking the liked tattoos in gallery");
      console.log("number of liked tattoos", this.props.user.userFavoriteTattoo.length);
      for (var i = 0; i < this.state.pictureData.length; i++) {
        var tattooLike = false;
        var artistLike = false;
        for (var j = 0; j < this.props.user.userFavoriteTattoo.length; j++) {
          if (this.state.pictureData[i]._id === this.props.user.userFavoriteTattoo[j].favTattooID) {
            tattooLike = true;
            break;
          }
        }
        for (var k = 0; k < this.props.user.userFavoriteArtist.length; k++) {
          if (this.state.pictureData[i].artistID === this.props.user.userFavoriteArtist[k].favArtistID) {
            artistLike = true;
            break;
          }
        }
        pictureList.push(<CardTatoo
          key={i}
          tattooID={this.state.pictureData[i]._id}
          tattooPhotoLink={this.state.pictureData[i].tattooPhotoLink}
          artistID={this.state.pictureData[i].artistID}
          tattooStyleList={this.state.pictureData[i].tattooStyleList}
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
            {pictureList}
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
