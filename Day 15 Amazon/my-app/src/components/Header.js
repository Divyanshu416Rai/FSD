import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Header({ cartCount = 0, onCartClick = () => {}, searchTerm = '', onSearchChange = () => {} }) {
  return (
    <header className="site-header">
      <div className="brand">
        <Link to="/" className="brand-link">Amazon Clone</Link>
      </div>

      <nav
        className="nav-links"
        style={{ display: 'flex', justifyContent: 'space-evenly', gap: '12px', alignItems: 'center' }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/wallet">Wallet</Link>
      </nav>

      <div className="search">
        <input value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} placeholder="Search products" />
      </div>

      <div className="actions">
        <button className="cart-btn" onClick={onCartClick} aria-label="Open cart">
          🛒 <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </header>
  );
}
