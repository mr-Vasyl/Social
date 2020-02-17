import React from 'react'
import {Spin} from 'antd';

import s from "./Preloader.module.css";

let Preloader = () => {

    return <div className={s.loadingSpin}>
        <Spin size="large"/>
    </div>
}

export default Preloader

