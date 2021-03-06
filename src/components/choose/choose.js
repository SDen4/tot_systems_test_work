import React, {Component} from 'react';
import messagesFlud from '../../scripts/flud';
import messagesWork from '../../scripts/work';

import Chat from '../chat/chat';

class Choose extends Component {
    state = {
        chat: false,
        work: false,
        flud: false
    }
    render() {
        const chatWindow = this.state.chat && 
            <Chat
                messagesFlud={messagesFlud}
                messagesWork={messagesWork}
                work={this.state.work}
                login={this.props.login}
            />
        const greet = !this.state.chat && <h2 className='choose__grit'>Привет, {this.props.login}!</h2>
        return (
            <section className='choose'>
                {greet}
                {chatWindow}
                <div className={`${this.state.chat ? 'choose__content choose__content_mod' : 'choose__content'}`}>
                    <button
                        className={`${this.state.chat ? 'button button__exit button__exit_mod' : 'button button__exit'}`}
                        onClick={this.backToLogin}
                    >Выход</button>
                    <button
                        className={`${this.state.work ? 'button__unactive' : 'button button__choose button__choose_work'}`}
                        onClick={this.openChatWork}
                    >Поработать</button>
                    <button
                        className={`${this.state.flud ? 'button__unactive' : 'button button__choose button__choose_flud'}`}
                        onClick={this.openChatFlud}
                    >Поболтать</button>
                </div>
            </section>
        )
    }
    backToLogin = () => {
        this.props.backToLogin();
    }
    openChatWork = () => {
        this.setState({
            chat: true,
            work: true,
            flud: false
        })
    }
    openChatFlud = () => {
        this.setState({
            chat: true,
            work: false,
            flud: true
        })
    }
};

export default Choose;