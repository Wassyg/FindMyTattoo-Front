import React, { Component } from 'react';

//Import des composants externes
import NavBar from '../Components/NavBar.js';
import ArtistCard from '../Components/ArtistCard.js';

//Import des librairies ou composants de style
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col}  from 'reactstrap';
import '../Stylesheets/ArtistPage.css';

//Import de la librairie leaflet / open street map
import L from 'leaflet';


//// Simulation de base de données ////

//Les coordonnées GPS ont été mises en dur dans la BDD pour des raisons d'asynchronicité du fetch. Il faudra fetcher les coordonnées GPS directement dans le back pour contourner ce problème
var ArtistDB = [
  {
    artistNickname : "Bichon",
    artistCompany : "The Golden Rabbit Tattoo",
    artistPhotoLink : "../../avatarsTatoueurs/11201563_749803451831654_737090053_a.jpg",
    artistAddress: "16 Rue Geoffroy-Marie, 75009 Paris",
    artistStyle : ["Japopnais", "Postmodern"],
    artistAddressLat: 48.873806,
    artistAddressLon: 2.344659
 },
 {
   artistNickname : "Princesse Madness",
   artistCompany : "Lez'art du Corps - Paris",
   artistPhotoLink : "../../avatarsTatoueurs/41450515_1897257143642841_5668628696324374528_n.jpg",
   artistAddress: "10 Rue Gambey, 75011 Paris, France, 75011 Paris",
   artistStyle : ["Tribal", "OldSchool"],
   artistAddressLat: 48.865267,
   artistAddressLon: 2.371948
 },
 {
   artistNickname : "Bichon",
   artistCompany : "The Golden Rabbit Tattoo",
   artistPhotoLink : "../../avatarsTatoueurs/11201563_749803451831654_737090053_a.jpg",
   artistAddress: "12 Rue Saint-Denis, 75002 Paris",
   artistStyle : ["Japopnais", "Postmodern"],
   artistAddressLat: 48.858941,
   artistAddressLon: 2.347756
},
{
  artistNickname : "Princesse Madness",
  artistCompany : "Lez'art du Corps - Paris",
  artistPhotoLink : "../../avatarsTatoueurs/41450515_1897257143642841_5668628696324374528_n.jpg",
  artistAddress: "10 Rue Gambey, 75011 Paris, France, 75011 Paris",
  artistStyle : ["Tribal", "OldSchool"],
  artistAddressLat: 48.865267,
  artistAddressLon: 2.371948
}
];

//// Enrichissement de la base de données tatoueurs avec coordonnées GPS ////
// Partie à mettre dans le back

var ArtistDBAddress=ArtistDB.map(a=>a.artistAddress);
var ArtistTempCoordinates =[];

for (var i = 0; i < ArtistDBAddress.length; i++) {
  var j=0;
  // To learn more on how to convert addresses to coordinates, check this simple website : https://dzone.com/articles/mapboxs-api-to-geocode-data-to-get-location-inform
  fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/'+ ArtistDBAddress[i]+'.json?access_token=pk.eyJ1IjoiZml0emZvdWZvdSIsImEiOiJjam9nMGlkMXowOTkzM3h0N3E5am45b3hxIn0.IBgvst88EucTyqijWWnpSg')
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
    ArtistDB[j].artistAddressLat = data.features[0].center[1];
    ArtistDB[j].artistAddressLon = data.features[0].center[0];
    j++;
    console.log(ArtistDB);
  })
  .catch(function(error) {
      console.log('Request failed', error)
  });
}

///test

//// Composant qui affiche tous ////

class ArtistPage extends Component{

  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [48.852969, 2.349903],
      zoom: 12,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });

    for (var i = 0; i < ArtistDBAddress.length; i++) {
      // Add marker
      this.marker = L.marker([ArtistDB[i].artistAddressLat, ArtistDB[i].artistAddressLon]).addTo(this.map);
      // Add popup to marker with artistNickname
      this.marker.bindPopup(ArtistDB[i].artistNickname);
    }
  }
  render(){
    var artistListCards = ArtistDB.map(function(artist,i){
      return <ArtistCard
        key={i}
        artistNickname={artist.artistNickname}
        artistCompany={artist.artistCompany}
        artistStyle={artist.artistStyle.join(" ")}
        artistPhotoLink={artist.artistPhotoLink}/>
    });

    return(
      <div >
        <NavBar/>
        <Container>
          <Row>
            <Col xs="12" md="6">
              <Row>
                {artistListCards}
              </Row>
            </Col>
            <Col xs="12" md="6">
              <div id="map"></div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}




export default ArtistPage;
