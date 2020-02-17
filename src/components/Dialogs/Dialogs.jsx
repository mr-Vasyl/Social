import React from 'react';
import {Redirect} from "react-router-dom";
import {reset} from "redux-form";

import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map((d) => <Dialog key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map((m) => <Message key={m.id} message={m.message}/>);
    // let newMessageBody = state.newMessageBody;

    if (!props.isAuth) return <Redirect to="/login"/>;

    let addNewMessage = (values, dispatch) => {
        props.sendMessage(values.newMessageBody)
        dispatch(reset("dialogAddMessageForm"))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
            <div className={s.messagesElements}>{messagesElements}</div>
        </div>
    )
}

export default Dialogs;

