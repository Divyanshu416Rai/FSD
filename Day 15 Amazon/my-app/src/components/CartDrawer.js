import React from 'react';
import './styles.css';

export default function CartDrawer({ open, onClose, items = [], onRemove, onChangeQty }) {
  const total = items.reduce((s, it) => s + it.qty * it.product.price, 0);

  return (
    <div className={`cart-drawer ${open ? 'open' : ''}`} role="dialog" aria-hidden={!open}>
      <div className="drawer">
        <header className="drawer-header">
          <h3>Your Cart</h3>
          <button onClick={onClose} className="close">✕</button>
        </header>

        <div className="drawer-body">
          {items.length === 0 && <div className="empty">Your cart is empty.</div>}
          {items.map((it) => (
            <div className="cart-item" key={it.id}>
              <img src={it.product.image} alt={it.product.title} />
              <div className="meta">
                <div className="title">{it.product.title}</div>
                <div className="controls">
                  <button onClick={() => onChangeQty(it.id, -1)}>-</button>
                  <span className="qty">{it.qty}</span>
                  <button onClick={() => onChangeQty(it.id, +1)}>+</button>
                  <button className="remove" onClick={() => onRemove(it.id)}>Remove</button>
                </div>
              </div>
              <div className="line-price">${(it.qty * it.product.price).toFixed(2)}</div>
            </div>
          ))}
        </div>

        <footer className="drawer-footer">
          <div className="total">Total: ${total.toFixed(2)}</div>
          <button className="checkout">Checkout</button>
        </footer>
      </div>
      <div className="backdrop" onClick={onClose} />
    </div>
  );
}
