import React from 'react';

import s from "./Spoiler.module.css";

const Spoiler = () => {

    return (
        <details open className={s.spoiler}>
            <summary>login details</summary>
            <b>Email: </b>motivi.shop@gmail.com
            <b> Password: </b>135790
        </details>
    )
}

export default Spoiler