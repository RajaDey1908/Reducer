import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Registration from '../src/views/Registration'
import increment from './store/reducer/increment'
import decrement from './store/reducer/decrement'

const rootReducer = combineReducers({
    inc: increment,
    dec: decrement
});

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><Registration /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
