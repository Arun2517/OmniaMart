import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Cart Items
  const [cart, setCart] = useState([]);

  // Cart Drawer State
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Open Cart
  function openCart() {
    setIsCartOpen(true);
  }

  // Close Cart
  function closeCart() {
    setIsCartOpen(false);
  }

  // Add Product to Cart
  function addToCart(product) {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }

  // Remove Product
  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  // Increase Quantity
  function increaseQty(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  // Decrease Quantity
  function decreaseQty(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Total Price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        isCartOpen,

        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,

        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook
export function useCart() {
  return useContext(CartContext);
}