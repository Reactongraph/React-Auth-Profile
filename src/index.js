import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./core/theme-provider";
import store from "./redux/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
