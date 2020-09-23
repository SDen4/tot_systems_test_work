import React, {Component} from 'react';

class Chat extends Component {
    render() {
        const title = this.props.work ? "Работа" : "Болтовня";
        const messages = this.props.work ? this.props.messagesWork : this.props.messagesFlud;
        const messagesList = messages.map( message => 
            <li
                key={message.id}
                className="chat__message"
            >
                <span className="chat_message_author">{message.author}:</span>
                <span>{message.message}</span>
            </li>
        );
        return (
            <div className='chat'>
                <h2 className='chat__subtitle'>{title}</h2>
                <ul className='chat__messages_list'>
                   {messagesList}
                </ul>
                <div className='chat__new_message'>
                    <input
                        className='chat__input'
                        placeholder='Введите сообщение'
                    ></input>
                    <div className="chat__button_wrapper">
                        <button className="button__send_message">
                            <div className="button__send_message_triangle"></div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Chat;