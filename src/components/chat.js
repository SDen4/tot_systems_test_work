import React, {Component} from 'react';

class Chat extends Component {
    render() {
        const title = this.props.work ? "Работа" : "Болтовня";
        const messagesList = this.props.messages.map( message => 
            <li key={message.id} className="chat__message">{message.message}</li>
        );
        return (
            <div className='chat'>
                <h2 className='chat__subtitle'>{title}</h2>
                <ul className='chat__wrapper'>
                   {messagesList}
                </ul>
                <div className='chat__new_message'>
                    <input
                        className='chat__input'
                        placeholder='Введите сообщение'
                    ></input>
                </div>
            </div>
        )
    }
};

export default Chat;