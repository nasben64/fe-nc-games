import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReviewsContextProvider } from "./context/ReviewsContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ReviewsContextProvider>
      <App />
    </ReviewsContextProvider>
  </BrowserRouter>
);
