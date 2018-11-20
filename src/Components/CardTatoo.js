import React, { Component } from 'react';
import '../Stylesheets/CardTatoo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import TattooModal from '../Components/TattooModal.js';



class CardTatoo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false,
      classLike: "dislike",
      like: false,
      artistNickname: null
    }
  }

  componentDidMount(){
    var ctx = this;
    console.log('id',this.props.artistId);
   fetch('http://localhost:3000/artist?artist_id='+this.props.artistId)
   .then(function(response) {
     return response.json();
   })
   .then(function(data) {

   ctx.setState({artistNickname: data.result.artistNickname});


   })
   .catch(function(error) {
     console.log('Request failed', error)
   });
 }


  handleMouseOver = () => {
    this.setState({isMouseOver: true});
  }

  handleMouseOut = () => {
    this.setState({isMouseOver: false});
  }

  handleClick = () => {

    if(this.state.like == false){
      this.setState({like: true, classLike: "like"});

    } else if(this.state.like == true){
      this.setState({like: false, classLike: "dislike"});
    }

  }

  render(){
    console.log('alllleeeer',this.state.artistNickname);

    return(
      <div
      className=" col-12 col-md-4 col-lg-2 card-container"
      onMouseOver={() => this.handleMouseOver()}
      onMouseOut={() => this.handleMouseOut()}
      onClick={() => this.handleClick()}
      >
        <div className="img-container">
            <TattooModal/>
            <FontAwesomeIcon className={this.state.classLike} icon={faHeart} />
            <img className="img-tatoo" src={this.props.tattooPhotoLink}/>
            {this.state.isMouseOver
              ?<div className="card-tatoueur">{this.state.artistNickname}</div>
              :<div></div>
            }
        </div>
      </div>
    )
  }
}

export default CardTatoo;
