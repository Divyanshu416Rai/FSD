import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import productsData from './components/data';
import About from './pages/About';
import Wallet from './pages/Wallet';
import CartPage from './pages/CartPage';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // {id, qty, product}
  const [search, setSearch] = useState('');

  const addToCart = (product) => {
    setCartItems((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { id: product.id, qty: 1, product }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  const changeQty = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const cartCount = cartItems.reduce((s, it) => s + it.qty, 0);

  return (
    <BrowserRouter>
      <div className="App site-root">
        <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} searchTerm={search} onSearchChange={setSearch} />

        <main className="container">
            <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2>Amazon — Mini e‑commerce</h2>
                  <div className="product-grid">
                    {productsData
                      .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
                      .map((p) => (
                        <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />
                      ))}
                  </div>
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/cart" element={<CartPage items={cartItems} onChangeQty={changeQty} onRemove={removeFromCart} />} />
          </Routes>
        </main>

        <Footer />

        <CartDrawer
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          items={cartItems}
          onRemove={removeFromCart}
          onChangeQty={changeQty}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
