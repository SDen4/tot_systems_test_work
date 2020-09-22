import React, {Component} from 'react';

class Choose extends Component {
    render() {
        return (
            <div className="choose">
                <div className="choose__content">
                    <button className="button">Work</button>
                    <button className="button">Chat</button>
                </div>
                <button 
                    className="button button__exit"
                    onClick={this.backToLogin}
                >Exit</button>
            </div>
        )
    }
    backToLogin = () => {
        this.props.backToLogin();
    }
};

export default Choose;