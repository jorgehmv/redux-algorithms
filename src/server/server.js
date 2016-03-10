import Express from 'express';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import createStore from '../common/redux/create';
import App from '../common/components/App';
import Html from '../common/helpers/Html';

import array from '../common/data/array';

const app = new Express();
const port = 3000;

// Use this middleware to set up hot module reloading via webpack
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// This is fired every time the server side receives a request
app.use(function handleRender(req, res) {
    
    // Compile an initial state
    const initialState = { array };
    // Create a new Redux store instance
    const store = createStore(initialState);
    
    // Render the component to a string
    const component = (
            <Provider store={store}>
                <App />
            </Provider>
        );
    
    //Send the rendered page back to the client
    res.send('<!doctype html>\n' +
        renderToString(<Html component={component} store={store} />));
});

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});