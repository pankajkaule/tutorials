import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose , combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import name_r from "./reducers/Myname_r";
import cartreducer from "./reducers/cart_r";
import emailreducer from "./reducers/Email_r";
import websitereducer from './reducers/Website_r'
import usernamereducer from './reducers/MyUsername_r'
import phonereducer from './reducers/Phoner';
import Wish_r from './reducers/Wish_r.js'
const masterreducer = combineReducers({
  name1: name_r,
  email: emailreducer,
  website:websitereducer,
  username:usernamereducer,
  phone:phonereducer,
  wish:Wish_r,
  cart:cartreducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  masterreducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.register();
