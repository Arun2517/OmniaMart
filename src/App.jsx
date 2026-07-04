import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="*" element={<NotFound />} />
        
        <Route
  path="/admin"
  element={
    <ProtectedRoute adminOnly>
      <Admin />
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;