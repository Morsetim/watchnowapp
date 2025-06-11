import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';

// Create a client
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
     <QueryClientProvider client={queryClient}>
        <Router>
          <App />

        </Router>
     </QueryClientProvider>
   </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
