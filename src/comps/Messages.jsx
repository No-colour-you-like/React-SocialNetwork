import React from 'react';
import {NavLink} from 'react-router-dom';

//Images 
import MessageBg from '../img/chat-bg.jpg';
import Person1 from '../img/people/1.jpg';
import Person2 from '../img/people/2.jpg';
import Person3 from '../img/people/3.jpg';
import SearchIcon from '../img/icons/static/search.png';

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
      <div className="message__text">
        {message.text}
      </div>
    </div>     
  )
}

const Messages = () => {

  let personData = [
    {id: '1', name: 'Амелия Джексон', photo: Person1},
    {id: '2', name: 'Дилан Хенкок', photo: Person2},
    {id: '3', name: 'Анжела Мур', photo: Person3}
  ]

  let messageData = [
    {id: '1', message: 'Привет'},
    {id: '2', message: 'Как дела?'},
    {id: '3', message: 'Йоу'}
  ]

  let messagePersons = personData.map(person => {
    return (
      <MessagePerson id={person.id} photo={person.photo} name={person.name} time="1ч"/>
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
        <div className="messages__search">
          <input className="messages__search-input" placeholder="Искать"></input>
          <img src={SearchIcon} alt="search-icon" className="messages__search-icon"/>
        </div>
        {messagePersons}
      </div>
      <div className="messages__chat">
        <div className="messages__chat-name">
        {messagePersons[0]}
        </div>
        <div className="messages__chat-text" 
        style={{backgroundImage: `url(${MessageBg})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover'}}>
          {messages}
        </div>
        <div className="messages__chat-enter">
          <textarea type="text" className="messages__chat-input"/>
          <button className="messages__chat-btn">Отправить</button>
        </div>
        
      </div>
    </section>
  )
};


export default Messages;