import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider} from 'notistack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
