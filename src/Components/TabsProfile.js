import React, { Component } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FavTattoosProfile from '../Components/FavTattoosProfile.js'
import FavArtistsProfile from '../Components/FavArtistsProfile.js'
import '../Stylesheets/TabsProfile.css';

class TabsProfile extends Component{
  render(){
    return(
      <MuiThemeProvider>
        <Tabs className="tabsInsideProfile col-12">
          <Tab className="singleTabInsideProfile " label="Vos Tatouages" style={{textAlign:"center", backgroundColor:"" }}>
            <FavTattoosProfile />
          </Tab>
          <Tab className="singleTabInsideProfile" label="Vos Tatoueurs" >
            <FavArtistsProfile />
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    )
  }
}



export default TabsProfile;
