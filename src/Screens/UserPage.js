import React, {Component} from 'react'

// import des composants appelés
import NavBar from '../Components/NavBar.js'
import FavTattoosProfile from '../Components/FavTattoosProfile.js'
import FavArtistsProfile from '../Components/FavArtistsProfile.js'
import TabsProfile from '../Components/TabsProfile.js'

import '../Stylesheets/UserPage.css';



class UserPage extends Component{
  render(){
    return(
      <div className="userPage-container-fluid">
        <NavBar />
        <div className="mainContainer col-12">
          <div className="topContainer-row col-12 col-sm-10">
            <TabsProfile />
          </div>

                  {/* <div className="lowContainer col-10">
                      Vos tatoueurs favoris
                      <FavArtistsProfile />
                  </div> */}

        </div>
    </div>
  )}
}

export default UserPage;
