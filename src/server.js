import Express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import config from './config';
import createStore from './redux/create';

import App from './containers/App/App';
import Html from './helpers/Html';
import array from './data/array';

const app = new Express();

// This is fired every time the server side receives a request
app.use((req, res) => {
  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }
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

  // Send the rendered page back to the client
  res.send(`<!doctype html>\n
    ${renderToString(
      <Html assets={webpackIsomorphicTools.assets()} component={component} store={store} />)}`);
});

if (config.port) {
  app.listen(config.port, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.info(`----\n==> ✅  ${config.app.title} is running`);
      console.info(`==> 🌎  Open http://${config.host}:${config.port}/ in your browser.`);
    }
  });
} else {
  console.error('==> ERROR: No PORT environment variable has been specified');
}
