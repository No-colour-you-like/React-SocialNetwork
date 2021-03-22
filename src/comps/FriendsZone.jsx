import React from 'react';
import Friends from './Friend';

//Images 
import Person1 from '../img/friends/bonnie_dunbar.jpg';
import Person2 from '../img/people/2.jpg';
import Person3 from '../img/people/3.jpg';
import Person4 from '../img/people/4.jpg';
import Person5 from '../img/people/5.jpg';

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