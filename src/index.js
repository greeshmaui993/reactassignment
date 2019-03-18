import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js//store/index";
import App from "./js/components/container/FormContainer.jsx";

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("create-article-form")
);