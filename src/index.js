import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import AppLayout from "./layout/main";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import configureStore from './store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import history from "./store/history";

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
        <Router>
          <AppLayout />
        </Router>        
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
