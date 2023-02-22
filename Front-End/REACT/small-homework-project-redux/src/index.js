import React                                                    from 'react';
import App                                                      from './components/App';
import { legacy_createStore as createStore, applyMiddleware }   from 'redux';
import { Provider }                                             from 'react-redux';
import thunk                                                    from 'redux-thunk';
import { createRoot }                                           from 'react-dom/client';
import rootReducer                                              from './store/reducers/rootReducer';

const container   = document.getElementById('root'),
      root        = createRoot(container),
      store       = createStore(rootReducer, applyMiddleware(thunk));


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);