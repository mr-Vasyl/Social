import React from 'react'
import s from "./Preloader.module.css";
import {Spin} from 'antd';

let Preloader = (props) => {

    return (
        <div className={s.loadingSpin}>
            <Spin size="large" />
        </div>
    )


}
export default Preloader

