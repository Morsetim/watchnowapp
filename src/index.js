import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AuthContextProvider } from "./authContext/AuthContext";

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
   </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
