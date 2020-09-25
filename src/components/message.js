import React from 'react';

export default ({ message }) => {
  return (
    <li
        key={message.id}
        className="message"
    >
        <span className="message_author">{message.author}:</span>
        <span>{message.message}</span>
    </li>
  );
};