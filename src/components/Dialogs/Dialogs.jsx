import React from 'react';
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import PropTypes from 'prop-types';


const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.
    map((d) => < Dialog key={d.id} name={d.name}  id={d.id} />
    )

  let messagesElements = state.messages.
    map((m) => <Message key={m.id} message={m.message} />)

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }
  let onNewMessageChenge = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body)
    
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea value={newMessageBody}
            onChange={onNewMessageChenge}
            placeholder='enter your message'></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div >

  )
}

export default Dialogs;

Dialogs.propTypes = {
  dialogsPage: PropTypes.shape({
    dialogs: PropTypes.isRequired,
    messages: PropTypes.isRequired,
  }).isRequired
}