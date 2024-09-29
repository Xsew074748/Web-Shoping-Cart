import React, { useState } from 'react';

const ShoppingCart = ({ cart, removeFromCart, updateQuantity }) => {
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState('');
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleApplyCoupon = () => {
    if (coupon === 'ลดราคา10%') {
      setDiscount(10);
    } else {
      alert('รหัสคูปองไม่ถูกต้อง');
      setDiscount(0);
    }
  };

  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-end mb-2">
          <div>
            <p>{item.name}</p>
            <p>{item.price}฿</p>
          </div>
          <div className="flex items-center">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2">-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2">+</button>
          </div>
          <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500">Remove</button>
        </div>
      ))}
      <div className="my-4">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon"
          className="border px-2 py-1"
        />
        <button onClick={handleApplyCoupon} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
          Apply Coupon
        </button>
      </div>
      <p className="font-bold">
        Total: {(totalPrice - (totalPrice * discount) / 100) + 100}฿ (Shipping +100฿)
      </p>
    </div>
  );
};

export default ShoppingCart;