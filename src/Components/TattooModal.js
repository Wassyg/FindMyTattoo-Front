//contient CardTatoo de l'image clickée, TattooArtistCardModal de l'artiste de la photo et des CardTatoo de toutes les photos du même artiste
import React, { Component } from 'react';
import {connect} from 'react-redux';

//Import des composants externes
import CardTatoo from '../Components/CardTatoo.js';
import TattooArtistCardModal from '../Components/TattooArtistCardModal.js';
import AuthForm from '../Components/AuthForm.js';
import url from '../config.js';

//Import des librairies ou composants de style
import '../Stylesheets/TattooModal.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'reactstrap';

import 'antd/dist/antd.css';
import { Modal } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


//// Composant modal qui affiche le tatouage agrandi, les infos tatoueurs et la gallerie des tatouages du tatoueur en question ////

class TattooModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureData:[],
      visible: false,
      tattooLike: false,
      clickOnForm : false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
      tattooLike: this.props.tattooLike,
    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleTattooLike = () =>{
    if(!this.props.user._id){
      this.setState({
        clickOnForm: !this.state.clickOnForm
      })
    } else {
      var ctx = this;
      if(this.state.tattooLike === false){
        //Update the database
        fetch('http://localhost:3000/userliketattoo', {
        method: 'PUT',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'favTattooPhotoLink='+ctx.props.tattooPhotoLink+'&favTattooStyleList1='+ctx.props.tattooStyleList[0]+'&favTattooStyleList2='+ctx.props.tattooStyleList[1]+'&favTattooStyleList3='+ctx.props.tattooStyleList[2]+'&favArtistID='+ctx.props.artistID+'&user_id='+ctx.props.user._id+'&favTattooID='+ctx.props.tattooID
        });
        //Update the store
        let userPlusFavTattoo = {...ctx.props.user};
        userPlusFavTattoo.userFavoriteTattoo.push({
          favTattooID: ctx.props.tattooID,
          favArtistID: ctx.props.artistID,
          tattooPhotoLink: ctx.props.tattooPhotoLink,
          tattooStyleList: ctx.props.tattooStyleList,
        });
        ctx.props.addTattooToFav(userPlusFavTattoo);
        //Update the state
        this.setState({tattooLike: !this.state.tattooLike});

      } else if(this.state.tattooLike === true){
        //Update the database
        fetch('http://localhost:3000/userdisliketattoo', {
        method: 'PUT',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'favTattooID='+ctx.props.tattooID+'&user_id='+ctx.props.user._id
        });
        //Update the store
        let userMinusFavTattoo = {...ctx.props.user};
        userMinusFavTattoo.userFavoriteTattoo = userMinusFavTattoo.userFavoriteTattoo.filter(function(el) { return el.favTattooID != ctx.props.tattooID; });
        ctx.props.deleteTattooFromFav(userMinusFavTattoo);
        //Update the state
        this.setState({tattooLike: !this.state.tattooLike});
      }
    }
  }

  componentDidUpdate(prevProps){
    var ctx = this;
    if (this.props.clickOnTattoo!==prevProps.clickOnTattoo && this.props.clickOnTattoo===true) {
      this.setState({
        visible : true,
        tattooLike: this.props.tattooLike,
      })
      // Récupération de la liste des tatouages du tatoueur en question
      fetch('http://localhost:3000/tattoosfromartist?artistID='+ctx.props.artistID)
      .then(function(response) {
       return response.json();
      })
      .then(function(data) {
       var pictureDataCopy = [];
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
    console.log("Data Modal", this.props);
    console.log("User favorite tattoo", this.props.user.userFavoriteTattoo);

    let pictureList = this.state.pictureData.map(function(map, i){
      return <CardTatoo
        key={i}
        tattooID={map._id}
        tattooPhotoLink={map.tattooPhotoLink}
        artistID={map.artistID}
        tattooStyleList={map.tattooStyleList} />
    })
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
          <AuthForm clickOnForm={this.state.clickOnForm}/>
          <Row id="tattooImageAndArtistInfoBoxModal">
            <Col xs="12" md="7" id="tattooImageBoxModal">
              <img src={this.props.tattooPhotoLink} id="tattooImageModal" alt=""/>
            <FontAwesomeIcon onClick={() => this.handleTattooLike()} icon={faHeart} className={this.state.tattooLike ? "tattooLikeModal tatoo-liked" : "tattooLikeModal"}/>
            </Col>
            <Col xs="12" md={{size: "5"}} >
              <TattooArtistCardModal artistID={this.props.artistID} artistLike={this.props.artistLike} />
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

function mapDispatchToProps(dispatch) {
  return {
    addTattooToFav: function(user) {
        dispatch({type: 'addTattooToFav', userWithFavTattoo : user})
    },
    deleteTattooFromFav: function(user){
      dispatch({type: 'deleteTattooFromFav', userWithoutFavTattoo : user})
    }
  }
}

function mapStateToProps(store) {
  return {
     user: store.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TattooModal);
