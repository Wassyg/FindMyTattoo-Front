//// Artist card shown on the modal which pops up when user clicks on a tattoo ////


/* Importing key components */
import React, { Component } from 'react';
import {connect} from 'react-redux';

/* Importing styles and images */
import '../Stylesheets/TattooArtistCardModal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Badge} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMapMarkerAlt, faHeart, faEnvelope, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

/* Importing other components */
import ProjectForm from '../Components/ProjectForm.js'
import AuthForm from '../Components/AuthForm.js';
import backendServerAddress from '../Assets/backendServerPath.js';


class TattooArtistCardModal extends Component {
  constructor(props) {
    super(props);
    this.handleClickSend = this.handleClickSend.bind(this);
    this.state = {
      artistLike : this.props.artistLike,
      clickToSend: false,
      artistNickname: "",
      artistCompanyName: "",
      artistAddress: "",
      artistStyleList1: "",
      artistStyleList2: "",
      artistStyleList3: "",
      artistDescription:"",
      artistPhotoLink:"",
      clickOnForm: false
    }
  }
  handleClickSend(props){
    this.setState({
      clickToSend: !this.state.clickToSend
    })
  }

  componentDidMount(){
    var ctx = this;
    //Ask the server for the artist information from its ID
    fetch(backendServerAddress.current+'/artist?artist_id='+ this.props.artistID)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
       ctx.setState({
         artistLike: ctx.props.artistLike,
         clickToSend: false,
         artistNickname: data.result.artistNickname,
         artistCompanyName: data.result.artistCompanyName,
         artistAddress: data.result.artistAddress,
         artistStyleList1: data.result.artistStyleList[0],
         artistStyleList2: data.result.artistStyleList[1],
         artistStyleList3: data.result.artistStyleList[2],
         artistDescription: data.result.artistDescription,
         artistPhotoLink: data.result.artistPhotoLink,
         artistNote: data.result.artistNote
         })
       })
     .catch(function(error) {
      console.log('Request failed', error);
    });
  }

  handleArtistLike = (props) =>{
    if(this.props.user._id == null){
      this.setState({
        clickOnForm: !this.state.clickOnForm
      })
    }else{
      var ctx = this;
      if(this.state.artistLike === false){
        //Update the user database
        fetch(backendServerAddress.current+'/userlikeartist', {
        method: 'PUT',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'favArtistNickname='+ctx.state.artistNickname+'&favArtistCompanyName='+ctx.state.artistCompanyName+'&favArtistAddress='+ctx.state.artistAddress+'&favArtistDescription='+ctx.state.artistDescription+'&favArtistPhotoLink='+ctx.state.artistPhotoLink+'&favArtistStyleList1='+ctx.state.artistStyleList1+'&favArtistStyleList2='+ctx.state.artistStyleList2+'&favArtistStyleList3='+ctx.state.artistStyleList3+'&favArtistNote='+ctx.state.artistNote+'&favArtistID='+ctx.props.artistID+'&user_id='+ctx.props.user._id
        });
        //Update the store
        let userPlusFavArtist = {...ctx.props.user};
        userPlusFavArtist.userFavoriteArtist.push({
          favArtistID: ctx.props.artistID,
          artistNickname: ctx.state.artistNickname,
          artistCompanyName: ctx.state.artistCompanyName,
          artistAddress: ctx.state.artistAddress,
          artistDescription: ctx.state.artistDescription,
          artistStyleList: ctx.props.artistStyleList,
        });
        ctx.props.addArtistToFav(userPlusFavArtist);
      } else {
        //Update the user database
        fetch(backendServerAddress.current+'/userdislikeartist', {
        method: 'PUT',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'favArtistID='+ctx.props.artistID+'&user_id='+ctx.props.user._id
        });
        //Update the store
        let userMinusFavArtist = {...ctx.props.user};
        userMinusFavArtist.userFavoriteArtist = userMinusFavArtist.userFavoriteArtist.filter(function(el) { return el.favArtistID != ctx.props.artistID; });
        ctx.props.deleteArtistFromFav(userMinusFavArtist);
      }
      //Update the state
      this.setState({artistLike: !this.state.artistLike});
    }
   }

  render () {
    return (

      <Card id="artistInfoBoxModal">
        <CardBody>
          <Row>
            <AuthForm clickOnForm={this.state.clickOnForm}/>
            <Col xs="4" id="artistInfoLeftBoxModal">
              <img src={this.state.artistPhotoLink} alt="" id="artistImageModal" />
              <div id="artistStarRateModal">
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
                <FontAwesomeIcon icon={faStar} className="artistStarIconModal fa-xs"/>
              </div>
              {
                !this.state.artistLike ?
                <Button outline color="success" size="sm" className="artistButtonModal" onClick={()=>this.handleArtistLike()}><FontAwesomeIcon icon={faHeart} className="fa-xs"/> Garder</Button>
                  :
                <Button outline color="secondary" size="sm" className="artistButtonModal" onClick={()=>this.handleArtistLike()}><FontAwesomeIcon icon={faTimesCircle} className="fa-xs"/> Retirer</Button>
              }
              <Button outline color="success" size="sm" className="artistButtonModal" onClick={this.handleClickSend}>
              <ProjectForm clickToSend={this.state.clickToSend} artistID={this.props.artistID}/> <FontAwesomeIcon icon={faEnvelope} className="fa-xs"/> Contacter</Button>
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

function mapDispatchToProps(dispatch) {
  return {
    addArtistToFav: function(user) {
        dispatch({type: 'addArtistToFav', userWithFavArtist : user})
    },
    deleteArtistFromFav: function(user){
      dispatch({type: 'deleteArtistFromFav', userWithoutFavArtist : user})
    }
  }
}

function mapStateToProps(store) {
  return {user: store.user}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TattooArtistCardModal);
