import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import HomePage from './Screens/HomePage.js'
import GalleryPage from './Screens/GalleryPage.js'
import ArtistPage from './Screens/ArtistPage.js'
import UserPage from './Screens/UserPage.js'

import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/GalleryPage" component={GalleryPage}></Route>
          <Route exact path="/ArtistPage" component={ArtistPage}></Route>
          <Route exact path="/UserPage" component={UserPage}></Route>
        </div>
      </Router>

      </div>
    );
  }
}

export default App;
