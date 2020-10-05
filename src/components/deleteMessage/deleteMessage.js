import React, {Component} from 'react';

class DeleteMessage extends Component {
  render() {
    return (
        <section className='delete__confirm'>
          <h2 className='delete__confirm_subtitle'>
            Вы действительно хотите удалить ваше сообщение: '{this.props.message}'?
          </h2>
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
        </section>
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