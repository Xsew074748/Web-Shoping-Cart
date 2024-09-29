import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...exists, quantity: exists.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4 flex space-x-4">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg relative transition duration-300"
          >
            Shopping Cart
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {getTotalItems()}
              </span>
            )}
          </Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<ProductList addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
