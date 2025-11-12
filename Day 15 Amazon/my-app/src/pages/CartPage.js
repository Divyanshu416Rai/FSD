import React from 'react';

export default function CartPage({ items = [], onChangeQty = () => {}, onRemove = () => {} }){
  const total = items.reduce((s, it) => s + it.qty * it.product.price, 0);
  return (
    <div className="page cart-page">
      <h2>Your Cart</h2>
      <div className="page-content">
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="cart-list">
              {items.map(it => (
                <li key={it.id}>
                  <img src={it.product.image} alt={it.product.title} />
                  <div className="cart-item-meta">
                    <div className="title">{it.product.title}</div>
                    <div className="price">${(it.product.price).toFixed(2)}</div>
                    <div className="cart-item-controls">
                      <button onClick={() => onChangeQty(it.id, -1)}>-</button>
                      <span className="qty">{it.qty}</span>
                      <button onClick={() => onChangeQty(it.id, +1)}>+</button>
                      <button className="remove" onClick={() => onRemove(it.id)}>Remove</button>
                    </div>
                  </div>
                  <div className="line-price">${(it.qty * it.product.price).toFixed(2)}</div>
                </li>
              ))}
            </ul>

            <div className="cart-page-total">Total: ${total.toFixed(2)}</div>
            <div className="cart-page-actions">
              <button className="checkout">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
