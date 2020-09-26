import React, {Component} from 'react';

class DeleteMessage extends Component {
  render() {
    return (
        <div className='delete__confirm'>
          <div className='delete__confirm_text'>
            Вы действительно хотите удалить ваше сообщение: '{this.props.message}'?
          </div>
          <div className='delete__confirm_buttons'>
            <button
                className='button'
                onClick={this.deleteMyMessage}
              >Удалить</button>
            <button
              className='button button__cansel'
              onClick={this.canselDelete}
            >Отмена</button>
          </div>
        </div>
    )
  }
  deleteMyMessage = () => {
    this.props.deleteMessage();
  }
  canselDelete = () => {
    this.props.canselDelete();
  }
}

export default DeleteMessage;