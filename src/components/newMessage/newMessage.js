import React, {Component} from 'react';


class NewMessage extends Component {
    state = {
        id: '',
        message: '',
        date: '',
        time: '',
        author: this.props.login,
        removable: true
    }
    render() {
        return (
            <form
                className='newMessage'
                onSubmit={this.addNewMessage}
            >
                <input
                    className='newMessage__input'
                    placeholder={`${this.props.login}, введите сообщение`}
                    value={this.state.message}
                    onChange={this.handleChange}
                ></input>
                <div className='newMessage__button_wrapper'>
                    <button
                        className='button__send_message'
                        type='submit'
                    >
                        <div className='button__send_message_triangle'></div>
                    </button>
                </div>
            </form>
        )
    }
    handleChange =(event) => {
        this.setState({
            message: event.target.value
        });
        this.createNewId();
        this.createNewDateAndTime();
    }
    createNewId = () => {
        let newIdVar;
        if(this.props.work) {
            newIdVar = this.props.messagesStateWork[this.props.messagesStateWork.length-1].id + 1;
            this.setState({
                id: newIdVar
            })
        } else {
            newIdVar = this.props.messagesStateFlud[this.props.messagesStateFlud.length-1].id + 1;
            this.setState({
                id: newIdVar
            })
        };
    }

    createNewDateAndTime = () => {
        let current = new Date();

        let year = current.getFullYear();
        let month = current.getMonth() + 1;
        let day = current.getDate();
        let hours = current.getHours();
        let min = current.getMinutes();

        //add '0' if digit is less than 10
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        hours = hours < 10 ? '0' + hours : hours;
        min = min < 10 ? '0' + min : min;

        let totalDate = day + '.' + month + '.' + year;
        let totalTime = hours + ':' + min;
        
        this.setState({
            date: totalDate,
            time: totalTime
        })
    }

    clearNewMessage = () => {
        this.setState({
            id: '',
            message: '',
            date: '',
            time: ''
        })
    }

    addNewMessage = (event) => {
        event.preventDefault();

        // don't send empty messages! //
        if(!this.state.message) return;

        this.props.sendNewObject(this.state);
        this.clearNewMessage();
    }
}

export default NewMessage;