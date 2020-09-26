import React from 'react';

export default ({ message }) => {
  return (
    <li
        className="message"
    >
        <span className="message__author">{message.author}:</span>
        <span>{message.message}</span>
        <span className="message__time">{message.time}</span>
    </li>
  );
};