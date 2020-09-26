import React, {Component} from 'react';
import Message from './message';
import NewMessage from './newMessage';


class Chat extends Component {
    state = {
        messagesStateWork: [],
        messagesStateFlud: []
    }
    componentDidMount() {
        this.scrollToBottom();
        this.test2();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    render() {
        let title = this.props.work ? "Работа" : "Болтовня";
        let messages = this.props.work ? this.props.messagesWork : this.props.messagesFlud;
        let messagesList = messages.map( message => 
            <Message message={message} key={message.id}/>
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
                    sendNewObject={this.test}
                    messagesStateWork={this.state.messagesStateWork}
                    messagesStateFlud={this.state.messagesStateFlud}
                    work={this.props.work}
                />
            </div>
        )
    }
    test2 = () => {
        this.setState({
            messagesStateWork: this.props.messagesWork,
            messagesStateFlud: this.props.messagesFlud
        })
    }
    test = (x) => {
        console.log(x);
        if(this.props.work) {
            this.setState({
                messagesStateWork: this.state.messagesStateWork.push(x)
            });
            this.test2();
            console.log(this.state.messagesStateWork);
        } else {
            this.setState({
                messagesStateFlud: this.state.messagesStateFlud.push(x)
            })
            this.test2();
            console.log(this.state.messagesStateWork);
        }
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView();
    }
};

export default Chat;