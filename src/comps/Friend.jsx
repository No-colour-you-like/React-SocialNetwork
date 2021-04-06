import React from 'react';


//Images 
import Person1 from '../img/friends/bonnie_dunbar.jpg';
import Person2 from '../img/friends/dave_bowman.jpg';
import Person3 from '../img/friends/ellen_ripley.jpg';
import Person4 from '../img/friends/elon_musk.jpg';
import Person5 from '../img/friends/victor_glover.jpg';
import Person6 from '../img/friends/jan_davis.jpg';
import Person7 from '../img/friends/janet_kavandi.jpg';
import Person8 from '../img/friends/josef_cooper.png';
import Person9 from '../img/friends/mark_yotney.jpg';
import Person10 from '../img/friends/robert_gibson.jpg';
import Person11 from '../img/friends/robert_kimbro.jpg';
import Person12 from '../img/friends/alien.jpg';

const Friend = (friend) => {
  return (
    <div className="friend">
    <a href="#" className="friend__link">
      <div className="friend__image">
        <img src={friend.img} alt="friend-img" className="friend__img" />
      </div>
      <div className="friend__text">
        <p className="friend__name">{friend.name}</p>
        <p className="friend__mutual">{friend.mutual}</p>
      </div>
    </a>
  </div>
  )
};


const Friends = (friends) => {

  let friendData = [
    {id: '1', img: Person1, name: 'Бонни Дунбар', mutual: '5 общих'},
    {id: '2', img: Person2, name: 'Дейв Боуман', mutual: '5 общих'},
    {id: '3', img: Person3, name: 'Эллен Рипли', mutual: '5 общих'},
    {id: '4', img: Person4, name: 'Илон Маск', mutual: '5 общих'},
    {id: '5', img: Person5, name: 'Виктор Гловер', mutual: '5 общих'},
    {id: '6', img: Person6, name: 'Джэн Дэвис', mutual: '5 общих'},
    {id: '7', img: Person7, name: 'Джанет Каванди', mutual: '5 общих'},
    {id: '8', img: Person8, name: 'Джозеф Купер', mutual: '5 общих'},
    {id: '9', img: Person9, name: 'Марк Уитни', mutual: '5 общих'},
    {id: '10', img: Person10, name: 'Роберт Гибсон', mutual: '5 общих'},
    {id: '11', img: Person11, name: 'Роберт Кимбро', mutual: '5 общих'},
    {id: '12', img: Person12, name: 'Мистер Чужой', mutual: '5 общих'},
  ];
    
  let friend = friendData.map(friend => {
    return (
      <Friend img={friend.img} name={friend.name} mutual={friend.mutual}></Friend>
    )
  });

  return (
    <div className="friends-zone__list">
      {friend}
    </div>
    
  )
};

export default Friends;