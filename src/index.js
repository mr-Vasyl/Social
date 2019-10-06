import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from './Redux/reduxStore';
import * as serviceWorker from './serviceWorker'
import StoreContext from './StoreContext';

let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state)
});


serviceWorker.unregister();


