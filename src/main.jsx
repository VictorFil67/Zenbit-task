// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter basename="/medicine-delivery">
    {/* <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}> */}
    <App />
    {/* <ToastContainer autoClose={1000} /> */}
    {/* </Provider>
    </PersistGate> */}
  </BrowserRouter>
  // {/* </React.StrictMode>, */}
);
