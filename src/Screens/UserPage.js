import React, {Component} from 'react'
import NavBar from '../Components/NavBar.js'
import ProjectForm from '../Components/ProjectForm.js'
import FavTattoosProfile from '../Components/FavTattoosProfile.js'
import FavArtistsProfile from '../Components/FavArtistsProfile.js'
import TabsProfile from '../Components/TabsProfile.js'
import '../Stylesheets/UserPage.css';

class UserPage extends Component {
  render() {
    return (<div className="userPageContainer">
      <NavBar/>
      <div className="mainContainer col-12">
        <div className="topContainer col-12">
          <div className="row-topFormTattoos col-12 col-sm-8">
            Votre projet de tatouage
            <ProjectForm/>
          </div>

          <div className="row-topImgTattoos col-12 col-sm-4">
            Vos tatouages favoris
            <FavTattoosProfile/>
          </div>
        </div>

        <div className="lowContainer col-12">
          Vos tatoueurs favoris
          <FavArtistsProfile/>
        </div>


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
    </div>)
  }
}

export default UserPage;
