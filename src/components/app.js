import React, {Component} from 'react';

import Login from './login';
import Choose from './choose';


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
            <div className='main'>
                {login}
                {choose}
            </div>
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