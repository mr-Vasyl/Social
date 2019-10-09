import React from 'react';
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import PropTypes from 'prop-types';
import { updadeNewMessageBodyCreator, sendMessageCreator } from '../../Redux/DialogsReducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updadeNewMessageBody: () => {
      dispatch(sendMessageCreator())
    },
    sendMessage: (body) => {
      dispatch(updadeNewMessageBodyCreator(body))
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

// DialogsContainer.propTypes = {
//   dialogsPage: PropTypes.shape({
//     dialogs: PropTypes.isRequired,
//     messages: PropTypes.isRequired,
//   }).isRequired
// }