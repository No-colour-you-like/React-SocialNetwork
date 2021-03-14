import React from 'react';

import './App.sass';
import Header from './comps/Header';
import Footer from './comps/Footer';
import FriendsZone from './comps/FriendsZone';
import ProfilePhoto from './comps/ProfilePhoto';
import AddPost from './comps/AddPost';
import Post from './comps/Post';
import Messages from './comps/Messages';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div class="container">
        <main className="main">
          <div className="container">
            <div className="main__wrapper">
              <aside className="main__aside-left">
              <Route path="/main" component={ProfilePhoto} />
              </aside>
              <div className="main__center">
                <Route path="/main" component={AddPost} />
                <Route path="/main" component={Post} />
                <Route path="/messages" component={Messages} />
              </div>
              <aside className="main__aside-right">
              <Route path="/main" component={FriendsZone} />
              </aside>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
