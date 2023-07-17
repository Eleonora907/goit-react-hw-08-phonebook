import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'modern-normalize';
import { Global } from 'styles/global.styles';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <Global />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
