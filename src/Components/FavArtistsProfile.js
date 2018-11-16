import React from 'react';
import { Card, CardTitle, CardImg, CardSubtitle, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '../Stylesheets/FavArtistsProfile.css';



export default class FavArtistsProfile extends React.Component {
  render() {
    var artistsList = [];
      artistsList.push({src:'../avatarsTatoueurs/11201563_749803451831654_737090053_a.jpg', artistName:"Bichon", tattooShop: "Golden Rabbit"});
      artistsList.push({src:'../avatarsTatoueurs/41450515_1897257143642841_5668628696324374528_n.jpg', artistName:"Princess Madness", tattooShop: "Lez'Art du corps"});


        var artistsDisplayedCards = artistsList.map(function(tattoo, i){
          return <ArtistCard
           key={i}
           artistName={tattoo.artistName}
           artistImage={tattoo.src}
           tattooShop={tattoo.tattooShop}/>
       })

    return (
      <div className="containerArtist col-12">
            {artistsDisplayedCards}
      </div>
    );
  }
}

class ArtistCard extends React.Component {
  render() {
    return(
      <div className="col-3" id="colCard">
         <Card className="containerArtistCard">
               <CardImg className="artistAvatar" src={this.props.artistImage} alt="Card image cap" />
             <div className="infoArtist">
                   <CardTitle className="textAreaArtistName">{this.props.artistName}</CardTitle>
                 <CardSubtitle className="textAreaTattooShop">{this.props.tattooShop}</CardSubtitle>
                 <Button className="btnProfile" color="primary">Profil de cet artiste</Button>
                   <Button className="btnProfile" color="primary">Partager mon projet</Button>
               </div>
         </Card>
      </div>

    );
  }
}
