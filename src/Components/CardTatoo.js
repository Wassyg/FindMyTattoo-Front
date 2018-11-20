import React, { Component } from 'react';
import '../Stylesheets/CardTatoo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

import TattooModal from '../Components/TattooModal.js';



class CardTatoo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickOnTattoo: false,
    };
  }

  handleClick = (props) => {
    this.setState({
      clickOnTattoo: !this.state.clickOnTattoo
    })
  }

  render(){

    return(
      <div className=" col-12 col-md-3 card-container" onClick={() => this.handleClick(this.props)}>
        <TattooModal clickOnTattoo={this.state.clickOnTattoo}/>
        <div className="img-container">
          <TattooModal/>
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
