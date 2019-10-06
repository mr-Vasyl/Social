import React from 'react';
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import PropTypes from 'prop-types';
import { updadeNewMessageBodyCreator, sendMessageCreator } from '../../Redux/DialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChenge = (body) => {
    props.store.dispatch(updadeNewMessageBodyCreator(body))
  }

  return  <Dialogs updadeNewMessageBody={onNewMessageChenge} sendMessage={onSendMessageClick} dialogsPage={state}/>
 
}

export default DialogsContainer;

DialogsContainer.propTypes = {
  dialogsPage: PropTypes.shape({
    dialogs: PropTypes.isRequired,
    messages: PropTypes.isRequired,
  }).isRequired
}