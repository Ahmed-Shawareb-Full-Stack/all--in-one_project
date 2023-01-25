import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, useLocation } from "react-router-dom";
import App from "./App";
import "./index.scss";
import { store } from "./store";
import { carsStore } from "./store/CP_CarsStore";
import { mediaPlaylistStore } from "./store/CP_MediaPlaylistStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
