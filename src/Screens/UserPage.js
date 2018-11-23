import React, {Component} from 'react'

// import des composants appelés
import NavBarEspacePerso from '../Components/NavBarEspacePerso.js'
import FavTattoosProfile from '../Components/FavTattoosProfile.js'
import FavArtistsProfile from '../Components/FavArtistsProfile.js'
import TabsProfile from '../Components/TabsProfile.js'

import '../Stylesheets/UserPage.css';



class UserPage extends Component{
  render(){
    return(
      <div className="userPage-container-fluid">
        <NavBarEspacePerso />


        <div className="mainContainer col-12">
          <div className="topContainer-row col-12 col-sm-10">
            <TabsProfile />
          </div>

        </div>
    </div>
  )}
}

export default UserPage;
