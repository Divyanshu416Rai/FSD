import React from 'react';
import './styles.css';

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <div className="price">${product.price.toFixed(2)}</div>
        <button onClick={() => onAdd(product)} className="add-btn">Add to cart</button>
      </div>
    </div>
  );
}
