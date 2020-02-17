import {Field, reduxForm} from "redux-form";
import React from 'react';

import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {textarea} from "../../Common/FormsControls/FormControls";
import s from "../AddMessageForm/AddMessageForm.module.css";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={textarea}
                       validate={[required, maxLength50]}
                       name="newMessageBody"
                       placeholder="enter your message"/>
            </div>
            <div>
                <button className={s.sendMessage + " " + s.transition}>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
