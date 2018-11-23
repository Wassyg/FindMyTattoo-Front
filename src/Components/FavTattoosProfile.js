//Alimente UserPage

import React from 'react';
import {CardImg} from 'reactstrap';

import {connect} from 'react-redux';

import CardTatoo from '../Components/CardTatoo.js'

import 'bootstrap/dist/css/bootstrap.css';
import '../Stylesheets/FavTattoosProfile.css';

class FavTattoosProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tattoosList: []
    }
  }

  ComponentDidMount() {
    var ctx= this;
    fetch("http://localhost:3000/user?user_id=" + this.props.userId)
          .then((response)=> response.json())
          .then((user)=> {
            var tattoosListCopy =[...ctx.state.tattoosList];
            user.map(function(user){
              tattoosListCopy.push(user.userFavoriteTattoo.tattoo_id);
            })

            ctx.setState({
              tattoosList : tattoosListCopy
            })
              })
          .catch((error)=> console.log('Request failed', error));
  }

  render() {
  console.log("tattoosList", this.state.tattoosList);
        var tattoosList = this.state.tattoosList;
        //   var tattoosList = [{
        //     artistName:"Bichon", src:"",
        //     artistName:"Bichon", src:"",
        //     artistName:"Bichon", src:""
        // }]
        var tattoosDisplayedCards = tattoosList.map(function(tattoo, i){
          return <CardTatoo
           key={i}
           artistName={tattoo.artistName}
           tattooImage={tattoo.src}/>
       })

    return (
      <div className="containerTattoos">
          <div className="row rowTattoos">
            {tattoosDisplayedCards}
          </div>
      </div>
    )
  }
}

// class TattooCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isMouseOver: false
//     }
//   }
//
//   handleMouseOver = () => {
//     this.setState({isMouseOver: true});
//   }
//
//   handleMouseOut = () => {
//     this.setState({isMouseOver: false});
//   }
//
//   render() {
//     console.log("this.state.isMouseOver", this.state.isMouseOver);
//
//     return(
//       <div className="containerCard" onMouseOver ={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
//
//            <div id="imgContainer">
//              <CardImg id ="TattooImg" src={this.props.tattooImage} alt="Card image cap"/>
//                {this.state.isMouseOver
//                ? <div className="infoArtistUnderImg">{this.props.artistName}</div>
//                :<div></div>
//              }
//            </div>
//
//       </div>
//     );
//   }
// }
function mapStateToProps(store) {
  return { userId: store.user._id,
  }
}

export default connect(
    mapStateToProps,
    null
)(FavTattoosProfile);
