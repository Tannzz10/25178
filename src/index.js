import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import loggingMiddleware from "./utils/loggingMiddleware";
const reducer = (state = {}, action) => state;
const store = createStore(reducer, applyMiddleware(loggingMiddleware));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
