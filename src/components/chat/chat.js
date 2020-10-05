import React, {Component} from 'react';
import Message from '../message/message';
import NewMessage from '../newMessage/newMessage';


class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messagesStateWork: this.props.messagesWork,
            messagesStateFlud: this.props.messagesFlud
        }
    }
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    render() {
        let title = this.props.work ? 'Работа' : 'Болтовня';
        let messages = this.props.work ? this.state.messagesStateWork : this.state.messagesStateFlud;
        let messagesList = messages.map( message => 
            <Message
                message={message}
                key={message.id}
                deleteMessage={() => this.deleteMessage(message.id)}
                sendEditedMessage={this.receiveEditedMessage}
            />
        );
        return (
            <section className='chat'>
                <h2
                    className={`${this.props.work ? 'chat__subtitle chat__subtitle_work' : 'chat__subtitle chat__subtitle_flud'}`}
                >{title}</h2>
                <ul className='chat__messages_list'>
                   {messagesList}
                    <div ref={(el) => { this.messagesEnd = el; }}></div>
                </ul>
                <NewMessage
                    sendNewObject={this.addNewMessage}
                    messagesStateWork={this.state.messagesStateWork}
                    messagesStateFlud={this.state.messagesStateFlud}
                    work={this.props.work}
                    login={this.props.login}
                />
            </section>
        )
    }
    addNewMessage = (obj) => {
        if(this.props.work) {
            this.setState({ messagesStateWork: [ ...this.state.messagesStateWork, obj] });
        } else {
            this.setState({ messagesStateFlud: [ ...this.state.messagesStateFlud, obj] });
        }
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView();
    }
    deleteMessage = (id) => {
        if(this.props.work) {
            const newMessageListWork = this.state.messagesStateWork.filter(message => message.id !== id);
            this.setState({ messagesStateWork: newMessageListWork });
        } else {
            const newMessageListFlud = this.state.messagesStateFlud.filter(message => message.id !== id);
            this.setState({ messagesStateFlud: newMessageListFlud });
        }
    }
    receiveEditedMessage = (text, id) => {
        if(this.props.work) {
            this.state.messagesStateWork.map(message => {
                if(message.id === id) {
                    message.message = text;
                };
            })
        } else {
            this.state.messagesStateFlud.map(message => {
                if(message.id === id) {
                    message.message = text;
                };
            })
        }
    }
};

export default Chat;