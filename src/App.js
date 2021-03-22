import React from 'react';

import './App.sass';
import Header from './comps/Header';
import Navigation from './comps/Navigation';
import Profile from './comps/Profile';
import FriendsZone from './comps/FriendsZone';
import AddPost from './comps/AddPost';
import Post from './comps/Post';
import Messages from './comps/Messages';
import ProfileAbout from './comps/profile/ProfileAbout';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <FriendsZone />
      <main className="main">
        <div className="main__wrapper">
          <div className="main__center">
            <Route path="/profile" component={Profile} />
            <Route exact path="/profile" component={Post} />
            <Route exact path="/profile/about" component={ProfileAbout} />
            <Route path="/messages" component={Messages} />
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}



export default App;
