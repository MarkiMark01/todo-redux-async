import * as React from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom';
import App from './App';
import { store, persistor } from './components/redux/store';
import { PersistGate } from "redux-persist/integration/react";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
);
