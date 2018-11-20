import React, { Component } from 'react';

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


//// Composant modal qui affiche le tatouage agrandi, les infos tatoueurs et la gallerie des tatouages du tatoueur en question ////

class TattooModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false ,
      pictureData:[],
      visible: false,
    };
  }
  componentDidMount(){
    var ctx = this;
    // Récupération de la liste des tatouages du tatoueur en question
    fetch('http://localhost:3000/tattoosfromartist?artistID='+'5bedb2149081e52c98f7b826')
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

  componentDidUpdate(prevProps){
    if (this.props.clickOnTattoo!==prevProps.clickOnTattoo && this.props.clickOnTattoo === true) {
      this.setState({
        visible : true,
      })
    }
  }

  render() {
    let pictureList = this.state.pictureData.map(function(map, i){
      return <CardTatoo
        key={i}
        idPicture={map._id}
        tattooPhotoLink={map.tattooPhotoLink}
        artistId={map.artistID}
        tattooStyleList={map.tattooStyleList} />
    })

    console.log('props pic', this.props);

    return (
      <Modal
        title= "INFO TATOUAGE"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        width = "90%"
        footer = {null}
        centered = "true"
        bodyStyle = {{backgroundColor : "#F7F7F7", fontFamily: 'Roboto Condensed'}}
      >
        <Container>
          <Row id="tattooImageAndArtistInfoBoxModal">
            <Col xs="12" md="7" id="tattooImageBoxModal">
              <img src="https://res.cloudinary.com/crazycloud/image/upload/v1542368587/ks5rrvax3eily43o35cx.jpg" id="tattooImageModal"/>
              <FontAwesomeIcon icon={faHeart} className="tattooLikeModal"/>
            </Col>
            <Col xs="12" md={{size: "5"}} >
              <TattooArtistCardModal/>
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

export default TattooModal;
