export default function Header({ cartCount, onToggleCart }) {
  return (
    <header className="bg-[#131921] p-4 text-white shadow-md sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <div className="text-2xl font-extrabold">
          amazon<span className="text-yellow-300">.in</span>
        </div>
        <div className="flex-1">
          <input
            placeholder="Search for products, brands and more"
            className="w-full rounded px-3 py-2 outline-none text-black"
            disabled
          />
        </div>
        <button
          onClick={onToggleCart}
          className="relative bg-white/10 hover:bg-white/20 px-3 py-2 rounded"
        >
          🛒 Cart
          <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
}
