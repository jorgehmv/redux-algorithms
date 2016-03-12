import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './redux/create';
import App from './containers/App/App';

const initialState = window.__INITIAL_STATE__;
const store = createStore(initialState);
const rootElement = document.getElementById('app');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
