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

  componentDidMount() {
    var ctx= this;
    fetch('http://localhost:3000/user?user_id='+ctx.props.userID)
    .then(function(response) {
     return response.json()
    })
    .then(function(data) {
      console.log("data du fetch===>", data);
               var tattoosListCopy =[...ctx.state.tattoosList];
               var userFavoriteTattoo = data.result.userFavoriteTattoo;
               userFavoriteTattoo.map(function(favTattoos){
                 tattoosListCopy.push(favTattoos);
               })
               ctx.setState({
                 tattoosList : tattoosListCopy
               })
             })
    .catch(function(error) {
     console.log('Request failed', error);
   });
 }

  render() {
        var tattoosList = this.state.tattoosList;
        console.log("tattoosList==>",tattoosList)

        var tattoosDisplayedCards = tattoosList.map(function(tattoo, i){
          return <CardTatoo
           key={i}
           artistID={tattoo.artistID}
           tattooPhotoLink={tattoo.tattooPhotoLink}
           tattooStyleList={tattoo.tattooStyleList}
           tattooPhotoID={tattoo.tattooPhotoID}
         />
       })
//c.dajeans@gmail.com
    return (
      <div className="containerTattoos">
          <div className="row">
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
  return { userID: store.user._id
  }
}

export default connect(
    mapStateToProps,
    null
)(FavTattoosProfile);
