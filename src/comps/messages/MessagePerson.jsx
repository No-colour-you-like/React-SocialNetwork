import React from 'react';
import {NavLink} from 'react-router-dom';

const MessagePerson = (messagePerson) => {

  let path = "/messages/" + messagePerson.id;

  return (
    <NavLink id={messagePerson.id} to={path} className="message-person">
      <img src={messagePerson.photo} alt="friend-img" className="message-person__img"/>
      <p className="message-person__name">{messagePerson.name}</p>
      <p className="message-person__time">{messagePerson.time}</p>
    </NavLink>
  )
}

export default MessagePerson;