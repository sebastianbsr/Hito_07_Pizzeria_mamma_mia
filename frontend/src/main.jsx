import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { UserProvider } from "./context/UserContext";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>
  </BrowserRouter>
);
