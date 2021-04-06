import React from 'react';
import Friends from './Friend';

//Images 
import Person1 from '../img/friends/bonnie_dunbar.jpg';


const FriendsZone = () => {



  return (
    <section className="friends-zone">
      <h2 className="friends-zone__title">
        Друзья
      </h2>
      <Friends />
    </section>
  );
}

export default FriendsZone;