import React, {Component} from 'react';
import Message from './message';
import NewMessage from './newMessage';


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
        let title = this.props.work ? "Работа" : "Болтовня";
        let messages = this.props.work ? this.state.messagesStateWork : this.state.messagesStateFlud;
        let messagesList = messages.map( message => 
            <Message
                message={message}
                key={message.id}
                deleteMessage={() => this.deleteMessage(message.id)}
            />
        );
        return (
            <div className='chat'>
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
                />
            </div>
        )
    }
    addNewMessage = (obj) => {
        console.log(obj);
        if(this.props.work) {
            console.log(this.state.messagesStateWork);
            this.setState({ messagesStateWork: [ ...this.state.messagesStateWork, obj]})
            console.log(this.state.messagesStateWork);
        } else {
            console.log(this.state.messagesStateFlud);
            this.setState({ messagesStateFlud: [ ...this.state.messagesStateFlud, obj]})
            console.log(this.state.messagesStateFlud);
        }
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView();
    }
    deleteMessage = (id) => {
        if(this.props.work) {
            console.log(id);
            const newMessageListWork = this.state.messagesStateWork.filter(message => message.id !== id);
            this.setState({
                messagesStateWork: newMessageListWork
            })
        } else {
            console.log(id);
            const newMessageListFlud = this.state.messagesStateFlud.filter(message => message.id !== id);
            console.log(newMessageListFlud);
            this.setState({
                messagesStateFlud: newMessageListFlud
            })
            console.log(this.state.messagesStateFlud);
        }
    }
};

export default Chat;