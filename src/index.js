import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import store from './Redux/reduxStore';
import * as serviceWorker from './serviceWorker'
import {Provider} from "react-redux";

import './index.module.css';
import App from './App';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();


