import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./assets/css/main.css";
import "./assets/css/navbar.css";
import "./assets/css/hero.css";
import "./assets/css/products.css";
import "./assets/css/footer.css";
import "./assets/css/cart.css";
import "./assets/css/modal.css";
import "./assets/css/admin.css";
import "./assets/css/responsive.css";

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);