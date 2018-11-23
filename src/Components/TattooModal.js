import React, { Component } from 'react';
import {connect} from 'react-redux';

//Import des composants externes
import CardTatoo from '../Components/CardTatoo.js';
import TattooArtistCardModal from '../Components/TattooArtistCardModal.js';

//Import des librairies ou composants de style
import '../Stylesheets/TattooModal.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col} from 'reactstrap';

import 'antd/dist/antd.css';
import { Modal } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function checkAndAdd(arr,IdTattooSelected) {
  var found = arr.some(function (el) {
    return el.tattoo_id === IdTattooSelected;
  });
  return found
 }
//// Composant modal qui affiche le tatouage agrandi, les infos tatoueurs et la gallerie des tatouages du tatoueur en question ////

class TattooModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false ,
      pictureData:[],
      visible: false,
      classLike: false,
      idPhotoSelected: this.props.idPhotoSelected,
    };
  }

  componentDidMount(){


    if(this.props.userId != null){
      var ctx = this;
      fetch('http://localhost:3000/user?user_id='+ctx.props.userId)
      .then(function(response) {
       return response.json();
      })
      .then(function(data) {
        if (checkAndAdd(data.result.userFavoriteTattoo,ctx.state.idPhotoSelected)) {
          ctx.setState({classLike: true});

        }
        // data.result.userFavoriteTattoo.map(function(map){
        //   console.log("like user",map.tattoo_id);
        //   console.log("state like user",ctx.state.idPhotoSelected);
        //
        //   if(ctx.state.idPhotoSelected == map.tattoo_id ){
        //     ctx.setState({classLike: true});
        //     console.log("deja liké");
        //   }
        // })

      })
      .catch(function(error) {
       console.log('Request failed', error)
      });
    }
  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleLike = (props) =>{
    if(this.props.userId == null){
      alert("connecte toi....")
    }else{
      this.setState({classLike: !this.state.classLike});


      if(this.state.classLike == false){
        var ctx = this;
        fetch('http://localhost:3000/userliketattoo', {
        method: 'PUT',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'favTattooPhotoLink='+props.favTattooPhotoLink+'&favTattooStyleList='+props.favTattooStyleList+'&favArtistID='+props.artistId+'&user_id='+ctx.props.userId+'&idPhotoSelected='+props.idPhotoSelected
        });
      } else if(this.state.classLike == true){
        var ctx = this;
        fetch('http://localhost:3000/userdisliketattoo', {
        method: 'PUT',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'idPhotoSelected='+props.idPhotoSelected+'&user_id='+ctx.props.userId
        });
      }
    }
   }

  componentDidUpdate(prevProps){
    if (this.props.clickOnTattoo!==prevProps.clickOnTattoo && this.props.clickOnTattoo === true) {
      this.setState({
        visible : true,
      })
      var ctx = this;
      // Récupération de la liste des tatouages du tatoueur en question
      fetch('http://localhost:3000/tattoosfromartist?artistID='+ctx.props.artistId)
      .then(function(response) {
       return response.json();
      })
      .then(function(data) {
        console.log(data);
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
  }

  render() {
    let classLike = ["tattooLikeModal"]


    let pictureList = this.state.pictureData.map(function(map, i){
      return <CardTatoo
        key={i}
        idPicture={map._id}
        tattooPhotoLink={map.tattooPhotoLink}
        artistId={map.artistID}
        tattooStyleList={map.tattooStyleList} />
    })



    if(this.state.classLike){
      classLike.push("tatoo-liked");
    }


    return (
      <Modal
        title= "INFO TATOUAGE"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        width = "90%"
        footer = {null}
        centered = {true}
        bodyStyle = {{backgroundColor : "#F7F7F7", fontFamily: 'Roboto Condensed'}}
      >
        <Container>
          <Row id="tattooImageAndArtistInfoBoxModal">
            <Col xs="12" md="7" id="tattooImageBoxModal">
              <img src={this.props.favTattooPhotoLink} id="tattooImageModal"/>
              <FontAwesomeIcon onClick={() => this.handleLike(this.props)} icon={faHeart} className={this.state.classLike ? "tattooLikeModal tatoo-liked" : "tattooLikeModal"}/>
            </Col>
            <Col xs="12" md={{size: "5"}} >
              <TattooArtistCardModal artistId={this.props.artistId} />
            </Col>
          </Row>
          <hr id="separationModal"/>
          <h1>AUTRES TATOUAGES DU MEME ARTISTE</h1>
          <Row id="otherArtistImagesBoxModal">
            {pictureList}
          </Row>
        </Container>
      </Modal>
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
)(TattooModal);
