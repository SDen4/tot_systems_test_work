import React, {Component} from 'react';
import DeleteMessage from './deleteMessage';


class Message extends Component {
  state = {
    editedText: this.props.message.message,
    editMessageState: false,
    deleteMessageState: false,
    deleteIdMessage: null
  }
  render() {
    const deleteMessage = this.state.deleteMessageState && <DeleteMessage
      message={this.props.message.message}
      deleteMessage={this.deleteMyMessage}
      canselDelete={this.canselDelete}
    />
    return (
      <li className='message'>
        <div className='message__up'>
          <span className='message__author'>{this.props.message.author}:</span>
          <div className={`${this.props.message.removable ? 'message__buttons' : 'message__buttons_unactive'}`}>
            <button
              className='button__cross'
              onClick={(e) => this.confirmDelete(this.props.message.id)}
            >
              <div className='button__cross_segment'></div>
            </button>
            <button
              className='button__cross button__edit'
              onClick={(e) => this.editMessage(this.props.message.id)}
            >
              <div className='button__cross_segment button__edit_segment'></div>
            </button>
          </div>
        </div>
        <span className={`${this.state.editMessageState ? 'message__unactive' : 'message__message'}`}>
          {this.props.message.message}
        </span>
        <input
          className={`${this.state.editMessageState ? 'message__input_edit' : 'message__unactive'}`}
          value={this.state.editedText}
          onChange={this.handleEditMessage}
        >
        </input>
        <span className='message__time'>{this.props.message.time}</span>
        {deleteMessage}
      </li>
    )
  }
  confirmDelete = (id) => {
    this.setState({
      deleteMessageState: true,
      deleteIdMessage: id
    });
  }
  deleteMyMessage = () => {
    this.props.deleteMessage(this.state.deleteIdMessage);
    this.canselDelete();
  }
  canselDelete = () => {
    this.setState({
      deleteMessageState: false,
      deleteIdMessage: null
    })
  }
  handleEditMessage = (event) => {
    this.setState({
      editedText: event.target.value
    })
  }
  editMessage = (id) => {
    console.log(id);
    this.setState({
      editMessageState: !this.state.editMessageState
    })

    if(this.state.editMessageState) {
      this.props.sendEditedMessage(this.state.editedText, id);
      console.log('sending ' + this.state.editedText + ' ' + id);
    };

  }
}

export default Message;