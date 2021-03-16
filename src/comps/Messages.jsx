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

const Message = (message) => {
  return (
    <div className="message">
      {message.text}
    </div>     
  )
}

const Messages = () => {

  let personData = [
    {id: '1', name: 'Чендлер Чейз', photo: "img/friends/man-1.jpg"},
    {id: '2', name: 'Кейт Дикенз', photo: "img/friends/woman-2.jpg"},
    {id: '3', name: 'Рейчел Кекс', photo: "img/friends/man-1.jpg"}
  ]

  let messageData = [
    {id: '1', message: 'Привет'},
    {id: '2', message: 'Как дела?'},
    {id: '3', message: 'Йоу'}
  ]

  let messagePersons = personData.map(person => {
    return (
      <MessagePerson id={person.id} photo={person.photo} name={person.name} time="1ч 10м"/>
    )
  })

  let messages = messageData.map(message => {
    return (
      <Message id={message.id} text={message.message} />
    )
  })


  return (
    <section className="messages">
      <div className="messages__persons">
        {messagePersons}
      </div>
      <div className="messages__chat">
        <div className="messages__chat-text">
          {messages}
        </div>
        <input type="text" className="messages__chat-input"/>
      </div>
    </section>
  )
};


export default Messages;