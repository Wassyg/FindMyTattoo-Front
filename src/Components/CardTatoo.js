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
    console.log('bug modal',this.state.clickOnTattoo);

    return(
      <div className=" col-12 col-md-3 card-container">
        <TattooModal
          clickOnTattoo={this.state.clickOnTattoo}
          favTattooPhotoLink={this.props.tattooPhotoLink}
          artistId={this.props.artistId}
          idPhotoSelected={this.props.idPicture}
          favTattooStyleList={this.props.tattooStyleList}/>
        <div className="img-container" onClick={() => this.handleClick(this.props)}>
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
