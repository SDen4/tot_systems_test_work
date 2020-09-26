import React, {Component} from 'react';
import DeleteMessage from './deleteMessage';


class Message extends Component {
  state = {
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
        <div className='message__left'>
          <span className='message__author'>{this.props.message.author}:</span>
          <span className='message__message'>{this.props.message.message}</span>
          <span className='message__time'>{this.props.message.time}</span>
        </div>
        <div className={`${this.props.message.removable ? 'message__right' : 'message__right_unactive'}`}>
          <button
            className='button__cross'
            onClick={(e) => this.confirmDelete(this.props.message.id)}
          >
            <div className='button__cross_segment'></div>
          </button>
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
    })
  }
}

export default Message;