import React, {Component} from 'react';

import Login from './login';
import Choose from './choose';


class App extends Component {
    state = {
        login: true,
        choose: false
    }
    render() {
        const login = this.state.login && <Login />
        const choose = this.state.choose && <Choose />
        return (
            <div className="main">
                {login}
                {choose}
            </div>
        );
    }
};

export default App;