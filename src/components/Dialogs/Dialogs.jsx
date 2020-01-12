import React from 'react';
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map((d) => < Dialog key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map((m) => <Message key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody;

    if (!props.isAuth) return <Redirect to="/login"/>;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>

    )
}


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody"
                       placeholder="enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;

// Dialogs.propTypes = {
//     dialogsPage: PropTypes.shape({
//         dialogs: PropTypes.isRequired,
//         messages: PropTypes.isRequired,
//     }).isRequired
// }