import React from 'react';
import {createField, Input, Textarea} from "../../Common/FormsControls/FormControls";
import {reduxForm} from "redux-form";
import style from "./ProfileInfo.module.css"
import s from "./../../Common/FormsControls/FormControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {error &&
            <div className={s.formSummaryError}>{error}
            </div>
            }
            <div>
                <b>Full Name</b>:
                {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>:
                {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>My skills:</b>:
                {createField("My skills", "lookingForAJobDescription", [], Textarea)}
            </div>

            <div><b>About me:</b></div>
            {createField("About me", "aboutMe", [], Textarea)}
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={style.contacs}>
                    <b>{key}:{createField("Full name", "contacts." + key, [], Input)}</b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataFormRedux = reduxForm({form: "edit-profile"})(ProfileDataForm)
export default ProfileDataFormRedux


