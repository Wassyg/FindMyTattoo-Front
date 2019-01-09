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
      tattooLike: this.props.dataModal.tattooLike,
    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
    this.props.closeModalClick();
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
    this.props.closeModalClick();
  }

  handleTattooLike = (props) =>{
    if(!this.props.user._id){
      this.setState({
        clickOnForm: !this.state.clickOnForm
      })
    } else {
      var ctx = this;
      console.log("state tattooLike before",this.state.tattooLike);
      if(this.state.tattooLike === false){
        //Update the database
        fetch('http://localhost:3000/userliketattoo', {
        method: 'PUT',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'favTattooPhotoLink='+ctx.props.dataModal.tattooPhotoLink+'&favTattooStyleList1='+ctx.props.dataModal.tattooStyleList[0]+'&favTattooStyleList2='+ctx.props.dataModal.tattooStyleList[1]+'&favTattooStyleList3='+ctx.props.dataModal.tattooStyleList[2]+'&favArtistID='+ctx.props.dataModal.artistID+'&user_id='+ctx.props.user._id+'&favTattooID='+ctx.props.dataModal.tattooID
        });
        //Update the store
        let newProps = {...props};
        newProps.tattooLike = true;
        this.props.addTattooToFav(newProps);
        //Update the state
        this.setState({tattooLike: !this.state.tattooLike});

      } else if(this.state.tattooLike === true){
        //Update the database
        fetch('http://localhost:3000/userdisliketattoo', {
        method: 'PUT',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'favTattooID='+ctx.props.dataModal.tattooID+'&user_id='+ctx.props.user._id
        });
        //Update the store
        let newProps = {...props};
        newProps.tattooLike = false;
        this.props.addTattooToFav(newProps);
        //Update the state
        this.setState({tattooLike: !this.state.tattooLike});
      }
    }
   }

  componentDidUpdate(prevProps){
    var ctx = this;

    if (this.props.dataModal.clickOnTattoo!==prevProps.dataModal.clickOnTattoo && this.props.dataModal.clickOnTattoo===true) {
      console.log("update");
      this.setState({
        visible : true,
        tattooLike: this.props.dataModal.tattooLike,
      })
      // Récupération de la liste des tatouages du tatoueur en question
      fetch('http://localhost:3000/tattoosfromartist?artistID='+ctx.props.dataModal.artistID)
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
    console.log("Data Modal", this.props.dataModal);
    var pictureList = [];
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
          tattooArtist = {artistLike}
        />)
      }
    }

    // let pictureList = this.state.pictureData.map(function(map, i){
    //   return <CardTatoo
    //     key={i}
    //     tattooID={map._id}
    //     tattooPhotoLink={map.tattooPhotoLink}
    //     artistID={map.artistID}
    //     tattooStyleList={map.tattooStyleList} />
    // })
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
              <img src={this.props.dataModal.tattooPhotoLink} id="tattooImageModal" alt=""/>
            <FontAwesomeIcon onClick={() => this.handleTattooLike(this.props.dataModal)} icon={faHeart} className={this.state.tattooLike ? "tattooLikeModal tatoo-liked" : "tattooLikeModal"}/>
            </Col>
            <Col xs="12" md={{size: "5"}} >
              <TattooArtistCardModal artistId={this.props.dataModal.artistID} artistLike={this.props.dataModal.artistLike} />
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
    closeModalClick: function() {
        dispatch({
          type: 'closeModal',
          clickOnTattoo: false,
          tattooPhotoLink:[],
          artistID:"",
          tattooID:"",
          tattooStyleList:"",
          tattooLike:false,
          artistLike:false,
        })
    },
    addTattooToFav: function(props) {
        dispatch({
          type: 'addTattooToFav',
          clickOnTattoo: props.clickOnTattoo,
          tattooPhotoLink: props.tattooPhotoLink,
          artistID: props.artistID,
          tattooID: props.tattooID,
          tattooStyleList: props.tattooStyleList,
          tattooLike: props.tattooLike,
          artistLike: props.artistLike,
         })
    }
  }
}

function mapStateToProps(store) {
  return {
     user: store.user,
     dataModal: store.dataModal
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TattooModal);
