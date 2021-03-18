import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <BrowserRouter>
        <PersistGate loading={<h1>Loading...</h1>} persistor={store.persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);