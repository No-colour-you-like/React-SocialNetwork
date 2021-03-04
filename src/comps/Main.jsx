import React from 'react';
import FriendsZone from './FriendsZone';
import ProfilePhoto from './ProfilePhoto'

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__wrapper">
          <ProfilePhoto />
          <FriendsZone />
        </div>
      </div>
    </main>
  );
}

export default Main;