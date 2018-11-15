import React, { Component } from 'react';
import '../Stylesheets/CardTatoo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



class CardTatoo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false,
      classLike: "dislike",
      like: false
    }
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
    console.log(this.props.url)


    return(
      <div
      className=" col-12 col-md-4 col-lg-2 card-container"
      onMouseOver={() => this.handleMouseOver()}
      onMouseOut={() => this.handleMouseOut()}
      onClick={() => this.handleClick()}
      >
        <div className="img-container">
            <FontAwesomeIcon className={this.state.classLike} icon={faHeart} />
            <img className="img-tatoo" src={this.props.url}/>
            {this.state.isMouseOver
              ?<div className="card-tatoueur">{this.props.idA}</div>
              :<div></div>
            }
        </div>
      </div>
    )
  }
}

export default CardTatoo;
