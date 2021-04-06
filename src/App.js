import React from 'react';

import './App.sass';
import Header from './comps/Header';
import Navigation from './comps/Navigation';
import Profile from './comps/Profile';
import FriendsZone from './comps/FriendsZone';
import AddPost from './comps/AddPost';
import Post from './comps/Post';
import Messages from './comps/messages/Messages';
import ProfileAbout from './comps/profile/ProfileAbout';
import { BrowserRouter, Route } from 'react-router-dom';




const App = (props) => {



  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <FriendsZone />
      <main className="main">
        <div className="main__wrapper">
          <div className="main__center">
            <Route path="/profile" render={Profile} />
            <Route exact path="/profile" render={Post} />
            <Route exact path="/profile/about" render={ProfileAbout} />
            <Route path="/messages" render={ () => <Messages personData={props.personData} messageData={props.messageData} /> } />
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}



export default App;


