import React, { Component } from 'react';

//Import des librairies ou composants de style
import '../Stylesheets/TattooArtistCardModal.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Badge} from 'reactstrap';

import ProjectForm from '../Components/ProjectForm.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMapMarkerAlt, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons'


class TattooArtistCardModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickSend = this.handleClickSend.bind(this);
    this.state = {
      clickToSend: false,
      artistNickname: this.props.artistNickname,
      artistCompanyName: this.props.artistCompanyName,
      artistAddress: "",
      artistStyleList1: "",
      artistStyleList2: "",
      artistDescription:"",
      artistPhotoLink:this.props.artistPhotoLink
      // artistsList: []
    }
  }
  handleClickSend(props){
    this.setState({
      clickToSend: !this.state.clickToSend
    })
  }

  componentDidMount(){
    var ctx = this;
    fetch('http://localhost:3000/artist?artist_id='+ this.props.artistId)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
       ctx.setState({
         clickToSend: false,
         artistNickname: data.result.artistNickname,
         artistCompanyName: data.result.artistCompanyName,
         artistAddress: data.result.artistAddress,
         artistStyleList1: data.result.artistStyleList[0],
         artistStyleList2: data.result.artistStyleList[1],
         artistStyleList3: data.result.artistStyleList[2],
         artistDescription: data.result.artistDescription,
         artistPhotoLink: data.result.artistPhotoLink
         })
       })
     .catch(function(error) {
      console.log('Request failed', error);
    });
  }

  render () {

    return (

      <Card id="artistInfoBoxModal">
        <CardBody>
          <Row>
            <Col xs="4" id="artistInfoLeftBoxModal">
              <img src={this.state.artistPhotoLink} alt="Card image cap" id="artistImageModal" />
              <div id="artistStarRateModal">
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
              </div>
              <Button outline color="success" size="sm" className="artistButtonModal" ><FontAwesomeIcon icon={faHeart} className="fa-xs"/> Garder</Button>
              <Button outline color="success" size="sm" className="artistButtonModal" onClick={this.handleClickSend}> <ProjectForm  clickToSend={this.state.clickToSend} artistId={this.props.artistId}/> <FontAwesomeIcon icon={faEnvelope} className="fa-xs"/> Contacter</Button>
            </Col>
            <Col xs="8">
              <CardTitle id="artistNameModal">{this.state.artistNickname}</CardTitle>
            <CardSubtitle id="artistCompanyNameModal">{this.state.artistCompanyName}</CardSubtitle>
              <CardText>{this.state.artistDescription}</CardText>
              <div id = "artistAllBadgeModal">
                <Row>
                  <h6><Badge color="info" pill className="artistStyleBadgeModal">{this.state.artistStyleList1}</Badge></h6>
                <h6><Badge color="info" pill className="artistStyleBadgeModal">{this.state.artistStyleList2}</Badge></h6>
                  <h6><Badge color="info" pill className="artistStyleBadgeModal">{this.state.artistStyleList3}</Badge></h6>
                </Row>
              </div>
              <CardText><FontAwesomeIcon icon={faMapMarkerAlt} /> {this.state.artistAddress}</CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>


    )
  }
};


export default TattooArtistCardModal;
