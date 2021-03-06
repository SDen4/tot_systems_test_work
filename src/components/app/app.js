import React, {Component} from 'react';

import Login from '../login/login';
import Choose from '../choose/choose';


class App extends Component {
    state = {
        login: true,
        choose: false,
        loginName: ''
    }
    render() {
        const login = this.state.login && <Login enter={this.enter} loginName={this.loginName} backToButton={this.comeToButton}/>
        const choose = this.state.choose && <Choose backToLogin={this.enter} login={this.state.loginName}/>
        return (
            <article className='main'>
                {login}
                {choose}
            </article>
        );
    }
    enter = () => {
        this.setState({
            login: !this.state.login,
            choose: !this.state.choose
        })
    }
    loginName = (login) => {
        this.setState({
            loginName: login
        })
    }
};

export default App;