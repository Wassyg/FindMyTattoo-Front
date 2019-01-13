//// Page dedicated for logged in users : navbar, gallery of fav tattoos and artists ////


/* Importing key components */
import React, {Component} from 'react'
import {connect} from 'react-redux';

/* Importing styles and images */
import '../Stylesheets/UserPage.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* Importing other components */
import NavBarEspacePerso from '../Components/NavBarEspacePerso.js'
import FavTattoosProfile from '../Components/FavTattoosProfile.js'
import FavArtistsProfile from '../Components/FavArtistsProfile.js'


class UserPage extends Component{
  render(){
    return(
      <div className="userPage-container-fluid">
        <NavBarEspacePerso />
        <div className="mainContainer col-12">
          <div className="topContainer-row col-12 col-sm-10">
            <MuiThemeProvider>
              <Tabs className="container tabsInsideProfile col-12">
                <Tab className="row singleTabInsideProfile" label="Vos Tatouages" style={{textAlign:"center", backgroundColor:"" }}>
                  <FavTattoosProfile />
                </Tab>
                <Tab className="row singleTabInsideProfile" label="Vos Tatoueurs" >
                  <FavArtistsProfile />
                </Tab>
              </Tabs>
            </MuiThemeProvider>
          </div>

        </div>
    </div>
  )}
}

export default UserPage;
