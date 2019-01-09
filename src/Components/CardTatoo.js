import React, { Component } from 'react';
import '../Stylesheets/CardTatoo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';

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
      <div className=" col-12 col-md-3 card-container" style={{minHeight: 290, minWidth: 290, maxHeight: 350, maxWidth: 350}}>
        <TattooModal
          clickOnTattoo = {this.state.clickOnTattoo}
          tattooID={this.props.tattooID}
          tattooPhotoLink={this.props.tattooPhotoLink}
          artistID={this.props.artistID}
          tattooStyleList={this.props.tattooStyleList}
          tattooLike = {this.props.tattooLike}
          artistLike = {this.props.artistLike}
        />
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

function mapStateToProps(store) {
  return { userId: store.user._id}
}

export default connect(
    mapStateToProps,
    null
)(CardTatoo);
