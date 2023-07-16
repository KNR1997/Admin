import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./store/jobState";
import companyReducer from "./store/companyState";
import { Auth0Provider } from "@auth0/auth0-react";
import userReducer from "./store/userState";

const store = configureStore({
  reducer: {
    job: jobReducer,
    company: companyReducer,
    user: userReducer
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-el3ibbyj70unvguf.us.auth0.com"
      clientId="qdVB0ZnEC1XmkM4lZ3RY7wIBsm3FKecn"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>
);
