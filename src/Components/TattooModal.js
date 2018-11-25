import React, { Component } from 'react';
import {connect} from 'react-redux';

//Import des composants externes
import CardTatoo from '../Components/CardTatoo.js';
import TattooArtistCardModal from '../Components/TattooArtistCardModal.js';
import AuthForm from '../Components/AuthForm.js';
import urlHeroku from '..../config.js';

//Import des librairies ou composants de style
import '../Stylesheets/TattooModal.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col} from 'reactstrap';

import 'antd/dist/antd.css';
import { Modal } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


//// Composant modal qui affiche le tatouage agrandi, les infos tatoueurs et la gallerie des tatouages du tatoueur en question ////

class TattooModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false ,
      pictureData:[],
      visible: false,
      classLike: false,
      clickOnForm : false,
    };
    // if (this.props.dataModal.clickOnTattoo === true) {
    //   this.setState({
    //     visible: false,
    //   });
    // }
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

  handleTattooLike = (props) =>{
    if(this.props.userId == null){
      this.setState({
        clickOnForm: !this.state.clickOnForm
      })
    }else{
      this.setState({classLike: !this.state.classLike});

      if(this.state.classLike == false){
        var ctx = this;
        fetch(urlHeroku+'/userliketattoo', {
        method: 'PUT',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'favTattooPhotoLink='+ctx.props.dataModal.favTattooPhotoLink+'&favTattooStyleList1='+ctx.props.dataModal.favTattooStyleList[0]+'&favTattooStyleList2='+ctx.props.dataModal.favTattooStyleList[1]+'&favTattooStyleList3='+ctx.props.dataModal.favTattooStyleList[2]+'&favArtistID='+ctx.props.dataModal.favArtistID+'&user_id='+ctx.props.userId+'&favTattooID='+ctx.props.dataModal.favTattooID
        });
      } else if(this.state.classLike == true){
        var ctx = this;
        fetch(urlHeroku+'/userdisliketattoo', {
        method: 'PUT',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'favTattooID='+ctx.props.dataModal.favTattooID+'&user_id='+ctx.props.userId
        });
      }
    }
   }

  componentDidUpdate(prevProps){
    if (this.props.dataModal.clickOnTattoo!==prevProps.dataModal.clickOnTattoo && this.props.dataModal.clickOnTattoo === true) {
      this.setState({
        visible : true,
      })
      var ctx = this;
      // Récupération de la liste des tatouages du tatoueur en question
      fetch(urlHeroku+'/tattoosfromartist?artistID='+ctx.props.dataModal.artistId)
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

    console.log('result reducer',this.props.dataModal);

    let pictureList = this.state.pictureData.map(function(map, i){
      return <CardTatoo
        key={i}
        tattooId={map._id}
        tattooPhotoLink={map.tattooPhotoLink}
        artistId={map.artistID}
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
              <img src={this.props.dataModal.favTattooPhotoLink} id="tattooImageModal"/>
              <FontAwesomeIcon onClick={() => this.handleTattooLike(this.props)} icon={faHeart} className={this.state.classLike ? "tattooLikeModal tatoo-liked" : "tattooLikeModal"}/>
            </Col>
            <Col xs="12" md={{size: "5"}} >
              <TattooArtistCardModal artistId={this.props.dataModal.artistId} />
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
  return {
     userId: store.user._id,
     dataModal: store.dataModal
  }
}

export default connect(
    mapStateToProps,
    null
)(TattooModal);
