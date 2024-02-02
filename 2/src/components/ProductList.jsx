import React from 'react';
import './ProductList.css';

const ProductList = ({ filteredItems }) => (
  <div className="product-list">
    {filteredItems.map((item) => (
      <div className="product-card" key={item.id}>
        <img src={item.image} alt={item.name} className="product-image" />
        <div className="product-title">{item.name}</div>
        <div className="product-details">
          <div className="product-category">{item.category}</div>
          <div className="product-price">₹{item.price}</div>
        </div>
      </div>
    ))}
  </div>
);

export default ProductList;