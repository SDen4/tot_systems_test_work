import React, {Component} from 'react';


class Message extends Component {
  state = {
    deleteMessageState: false,
    deleteIdMessage: null
  }
  render() {
    return (
      <li className='message'>
        <div className="message__left">
          <span className="message__author">{this.props.message.author}:</span>
          <span className="message__message">{this.props.message.message}</span>
          <span className="message__time">{this.props.message.time}</span>
        </div>
        <div className={`${this.props.message.removable ? 'message__right' : 'message__right_unactive'}`}>
          <button
            className="message__delete"
            onClick={(e) => this.confirmDelete(this.props.message.id)}
          >
            <div className='message__delete_cross'></div>
          </button>
        </div>
        <div className={`${this.state.deleteMessageState ? "message__confirm_del": 'message__confirm_del_unactive'}`}  >
          <div className='message__confirm_text'>
            Вы действительно хотите удалить ваше сообщение: "{this.props.message.message}"?
          </div>
          <div className='message__confirm_buttons'>
            <button
                className="button message__confirm_del_button"
                onClick={this.deleteMyMessage}
              >Удалить</button>
            <button
              className="button button__cansel message__confirm_del_button"
              onClick={this.canselDelete}
            >Отмена</button>
          </div>
        </div>
      </li>
    )
  }
  confirmDelete = (id) => {
    this.setState({
      deleteMessageState: true,
      deleteIdMessage: id
    })
  }
  canselDelete = () => {
    this.setState({
      deleteMessageState: false,
      deleteIdMessage: null
    })
  }
  deleteMyMessage = () => {
    this.props.deleteMessage(this.state.deleteIdMessage);
    this.canselDelete();
  }
}

export default Message;