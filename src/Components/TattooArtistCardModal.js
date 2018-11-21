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
      // artistsList: []
    }
  }
  handleClickSend(props){
    this.setState({
      clickToSend: !this.state.clickToSend
    })
  }
 // componentDidMount(){
 //   this.setState({
 //     clickToSend: false
 //   })
 // }

  render () {
console.log("this.state.clickToSend", this.state.clickToSend)
    return (

      <Card id="artistInfoBoxModal">
        <CardBody>
          <Row>
            <Col xs="4" id="artistInfoLeftBoxModal">
              <img src="https://res.cloudinary.com/crazycloud/image/upload/v1542304276/gas3khshphtf0rs3w0oj.jpg" alt="Card image cap" id="artistImageModal" />
              <div id="artistStarRateModal">
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
              </div>
              <Button outline color="success" size="sm" className="artistButtonModal" ><FontAwesomeIcon icon={faHeart} className="fa-xs"/> Garder</Button>
            <Button outline color="success" size="sm" className="artistButtonModal" onClick={this.handleClickSend}> <ProjectForm clickToSend={this.state.clickToSend}/> <FontAwesomeIcon icon={faEnvelope} className="fa-xs"/> Contacter</Button>
            </Col>
            <Col xs="8">
              <CardTitle id="artistNameModal">BICHON</CardTitle>
              <CardSubtitle id="artistCompanyNameModal">The Golden Rabbit Tattoo</CardSubtitle>
              <CardText>Bichon tatoue depuis 10 ans. Il a commencé à l'âge de 14 ans avec sa grande soeur. Depuis il est passionné de tatouages.</CardText>
              <div id = "artistAllBadgeModal">
                <Row>
                  <h6><Badge color="info" pill className="artistStyleBadgeModal">Black & Grey</Badge></h6>
                  <h6><Badge color="info" pill className="artistStyleBadgeModal">Japonais</Badge></h6>
                  <h6><Badge color="info" pill className="artistStyleBadgeModal">Fine Line</Badge></h6>
                </Row>
              </div>
              <CardText><FontAwesomeIcon icon={faMapMarkerAlt} /> 16 Rue Geoffroy-Marie, 75009 Paris</CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>


    )
  }
};


export default TattooArtistCardModal;
