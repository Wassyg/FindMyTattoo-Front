import React, { Component } from 'react';
import '../Stylesheets/CardTatoo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';



class CardTatoo extends Component {

  handleClick = (props) => {
    console.log(props);
  }

  render(){

    return(
      <div className=" col-12 col-md-3 card-container" onClick={() => this.handleClick(this.props)}>
        <div className="img-container">
          <img className="img-tatoo" src={this.props.tattooPhotoLink}/>
          <div className="card-hover">
            <FontAwesomeIcon className="hover-search" icon={faSearchPlus} />
          </div>
        </div>
      </div>
    )
  }
}

export default CardTatoo;
