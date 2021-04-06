import React from 'react';

//Images 
import MessageBg from '../../img/chat-bg.jpg';
import SearchIcon from '../../img/icons/gif/search.gif';

import MessagePerson from '../messages/MessagePerson';
import Message from '../messages/Message';


const Messages = (props) => {

  let messagePersons = props.personData.map(person => {
    return (
      <MessagePerson id={person.id} photo={person.photo} name={person.name} time="1ч"/>
    )
  });

  let messages = props.messageData.map(message => {
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
        style={{backgroundImage: `linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)), url(${MessageBg})`}}>
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