import React, {Component} from 'react';

import Login from './login';
import Choose from './choose';


class App extends Component {
    state = {
        login: false,
        choose: true
    }
    render() {
        const login = this.state.login && <Login enter={this.enter}/>
        const choose = this.state.choose && <Choose backToLogin={this.enter} />
        return (
            <div className="main">
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
};

export default App;