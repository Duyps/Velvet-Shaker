import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      // Kiểm tra nếu sản phẩm đã có trong giỏ hàng
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      // Thêm sản phẩm mới vào giỏ hàng
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId))
  }
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total+item.price*item.quantity, 0)
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
