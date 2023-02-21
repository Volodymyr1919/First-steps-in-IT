import React                                                    from 'react';
import App                                                      from './Components/App';
import { legacy_createStore as createStore, applyMiddleware }   from 'redux';
import { Provider }                                             from 'react-redux';
import thunk                                                    from 'redux-thunk';
import RootReducer                                              from './store/reducers/RootReducer';
import { createRoot }                                           from 'react-dom/client';

const container   = document.getElementById('root');
const root        = createRoot(container);
const store       = createStore(RootReducer, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);