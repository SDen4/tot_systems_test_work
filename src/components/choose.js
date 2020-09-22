import React, {Component} from 'react';
import messages from '../scripts/flud';

import Chat from './chat';

class Choose extends Component {
    state = {
        chat: false,
        work: false,
        flud: false
    }
    render() {
        const chatWindow = this.state.chat && <Chat messages={messages} work={this.state.work}/>
        return (
            <div className='choose'>
                {chatWindow}
                <div
                    className={`${this.state.chat ? 'choose__content choose__content_mod' : 'choose__content'}`}
                >
                    <button
                        className={`${this.state.work ? 'button__unactive' : 'button button__choose'}`}
                        onClick={this.openChatWork}
                    >Поработать</button>
                    <button
                        className={`${this.state.chat ? 'button button__exit button__exit_mod' : 'button button__exit'}`}
                        onClick={this.backToLogin}
                    >Exit</button>
                    <button
                        className={`${this.state.flud ? 'button__unactive' : 'button button__choose'}`}
                        onClick={this.openChatFlud}
                    >Поболтать</button>
                </div>
            </div>
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