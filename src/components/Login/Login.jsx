import React from 'react';
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import {createField, Input} from "../Common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../Redux/AuthReducer";
import s from "../Login/Login.module.css";
import Spoiler from "./Spoiler";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>

            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "")}

            {captchaUrl && <img alt="captcha" src={captchaUrl}/>}
            {captchaUrl &&
            createField("Symbols from image", "captcha", [required], Input, {})}

            {error &&
            <div className={s.formSummaryError}>{error}
            </div>
            }

            <button className={s.btnLogin + " " + s.transition}>login</button>

        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if (props.isAuth) {
        return < Redirect to={"/profile"}/>
    }

    return (
        <div className={s.login}>
            <span><h1>Log In</h1>
                <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
            </span>
            <span className={s.spoiler}><Spoiler/></span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)