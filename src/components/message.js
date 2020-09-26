import React from 'react';

export default ({ message }) => {
  return (
    <li
        className="message"
    >
        <span className="message_author">{message.author}:</span>
        <span>{message.message}</span>
    </li>
  );
};