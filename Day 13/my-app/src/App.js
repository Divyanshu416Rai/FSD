import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";
import { PRODUCTS } from "./components/data";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("relevance");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const categories = useMemo(() => [...new Set(PRODUCTS.map((p) => p.category))], []);

  function handleAdd(p) {
    setCart((c) => {
      const found = c.find((x) => x.id === p.id);
      if (found) return c.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x));
      return [...c, { ...p, qty: 1 }];
    });
  }

  function changeQty(id, qty) {
    if (qty <= 0) {
      setCart((c) => c.filter((i) => i.id !== id));
      return;
    }
    setCart((c) => c.map((i) => (i.id === id ? { ...i, qty } : i)));
  }

  function removeItem(id) {
    setCart((c) => c.filter((i) => i.id !== id));
  }

  const filtered = PRODUCTS.filter((p) =>
    selectedCategory === "All" ? true : p.category === selectedCategory
  ).filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));

  const sorted = filtered.sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return a.id - b.id;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        onToggleCart={() => setCartOpen(true)}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <Sidebar
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <main className="md:col-span-3">
          <div className="flex items-center gap-3 mb-4">
            <input
              className="flex-1 rounded px-3 py-2"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-3 py-2 rounded"
            >
              <option value="relevance">Sort: Relevance</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {sorted.map((p) => (
              <ProductCard key={p.id} p={p} onAdd={handleAdd} />
            ))}
          </div>
        </main>
      </div>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onChangeQty={changeQty}
        onRemove={removeItem}
      />

      <footer className="bg-white mt-8 py-6">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-600">
          Amazon Basic Clone — demo UI
        </div>
      </footer>
    </div>
  );
}
