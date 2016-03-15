import { createStore, applyMiddleware, compose } from 'redux';
import commandMiddleware from './middleware/commandMiddleware';
import reducer from './modules/reducer';

export default function create(initialState) {
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(commandMiddleware()),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
            window.devToolsExtension() :
            f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules/reducer', () => {
      const nextRootReducer = require('./modules/reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
