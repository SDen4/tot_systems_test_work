import React, {Component} from 'react';
import DeleteMessage from '../deleteMessage/deleteMessage';


class Message extends Component {
  state = {
    editedText: this.props.message.message,
    editMessageState: false,
    deleteMessageState: false,
    deleteIdMessage: null
  }
  render() {
    const buttonDelete =
      <button
        className='button__cross'
        onClick={(e) => this.confirmDelete(this.props.message.id)}
      >
        <div className='button__cross_segment'></div>
      </button>

    const buttonEdit =
      <button
        className='button__cross button__edit'
        onClick={(e) => this.editMessage(this.props.message.id)}
      >
        <div className='button__cross_segment button__edit_segment'></div>
      </button>

    const messageButtons = this.props.message.removable &&
      <div className='message__buttons'>
        {buttonDelete}
        {buttonEdit}
      </div>

    const currentMessage = !this.state.editMessageState && 
      <span className='message__message'>
        {this.props.message.message}
      </span>

    const editMessageInput = this.state.editMessageState && 
      <input 
        className='message__input_edit'
        value={this.state.editedText}
        onChange={this.handleEditMessage}
      >
      </input>

    const deleteMessage = this.state.deleteMessageState &&
      <DeleteMessage
        message={this.props.message.message}
        deleteMessage={this.deleteMyMessage}
        canselDelete={this.canselDelete}
      />

    return (
      <li className='message'>
        <div className='message__up'>
          <span className='message__author'>{this.props.message.author}:</span>
          {messageButtons}
        </div>
        {currentMessage}
        {editMessageInput}
        <div className='message__time_wrapper'>
          <span className='message__time_date message__date'>{this.props.message.date}</span>
          <span className='message__time_date'>{this.props.message.time}</span>
        </div>
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
    });
  }
  handleEditMessage = (event) => {
    this.setState({
      editedText: event.target.value
    });
  }
  editMessage = (id) => {
    this.setState({
      editMessageState: !this.state.editMessageState
    });
    if(this.state.editMessageState) {
      this.props.sendEditedMessage(this.state.editedText, id);
    };

  }
}

export default Message;