import React from 'react';
import s from "./FormControls.module.css"

import {Field} from "redux-form";
import {Input as InputLog} from 'antd';

const {TextArea} = InputLog;
const FormControls = ({input, meta: {touched, error}, children, ...props}) => {

    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : " ")}>
            <div>
                {children}
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
};

export const textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControls {...props}><TextArea rows={3} {...input} {...restProps} /></FormControls>
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControls {...props}><InputLog className={s.exampleInput}  {...input} {...restProps} /></FormControls>
};

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        />{text}
    </div>
)




