import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppLayout from "./layout/main";
import { Provider } from 'react-redux';
import store, { history } from './store/configureStore';
import {  BrowserRouter as Router} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

// Get the application-wide store instance, prepopulating with state from the server where available.
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  <Provider store={store}>   
    <React.StrictMode>
      <Router history={history}>
        <QueryClientProvider client={queryClient} >
          <AppLayout />
        </QueryClientProvider>
      </Router>        
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
