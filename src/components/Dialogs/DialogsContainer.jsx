import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../Redux/DialogsReducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;

