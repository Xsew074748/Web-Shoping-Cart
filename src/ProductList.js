import React, { useState } from 'react';

const products = [
  { id: 1, name: 'ตุ๊กตา Bare Bears แพนด้า', price: 399, image: 'https://www.lovelinkflower.com/wp-content/uploads/2022/05/D-59-1.jpg' },
  { id: 2, name: 'ตุ๊กตา Bare Bears หมี', price: 399, image: 'https://www.lovelinkflower.com/wp-content/uploads/2022/05/D-55-1.jpg' },
  { id: 3, name: 'Fox', price: 199, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wES5HZocE4_YJxR7OfeSP7SNHzNeUfozug&s' },
  { id: 4, name: 'หมี', price: 199, image: 'https://www.lovelinkflower.com/wp-content/uploads/2022/05/D-3-1-400x400.jpg' },
  { id: 5, name: 'ตัวเงิน ตัวทอง', price: 999, image: 'https://www.bringmehug.com/wp-content/uploads/2023/07/%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%97%E0%B8%AD%E0%B8%87.jpg' },
  { id: 6, name: 'น้องหมาฮักกี้', price: 899, image: 'https://www.lovelinkflower.com/wp-content/uploads/2022/08/D-42-400x400.jpg' },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4">
          <div className="w-full h-150 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-150 object-cover"
            />
          </div>
          <h2 className="text-lg font-bold mt-2">{product.name}</h2>
          <p className="text-gray-700">Price: {product.price}฿</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;