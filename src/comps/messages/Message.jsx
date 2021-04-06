import React from 'react'; 

const Message = (message) => {


  return (
    <div className="message">
      <div className="message__text">
        {message.text}
      </div>
    </div>     
  )
} 


export default Message;