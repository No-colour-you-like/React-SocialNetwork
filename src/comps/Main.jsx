import React from 'react';
import FriendsZone from './FriendsZone';
import ProfilePhoto from './ProfilePhoto'
import AddPost from './AddPost'
import Post from './Post'

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__wrapper">
          <aside className="main__aside-left">
            <ProfilePhoto />
          </aside>
          <div className="main__center">
            <AddPost />
            <Post />
          </div>
          <aside className="main__aside-right">
            <FriendsZone />
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Main;