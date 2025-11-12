export default function CartDrawer({ open, onClose, cart, onChangeQty, onRemove }) {
  const total = cart.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-40 transform transition-transform ${
        open ? "translate-x-0" : "translate-x-full"
      } shadow-lg`}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Your Cart</h3>
          <button onClick={onClose} className="text-sm">
            Close
          </button>
        </div>
        <div className="mt-4 flex-1 overflow-auto">
          {cart.length === 0 && <div className="text-sm text-gray-500">Cart is empty.</div>}
          <ul className="space-y-3">
            {cart.map((it) => (
              <li key={it.id} className="flex items-center gap-3">
                <img src={it.img} alt={it.title} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <div className="text-sm font-semibold">{it.title}</div>
                  <div className="text-xs text-gray-600">₹{it.price}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => onChangeQty(it.id, it.qty - 1)} className="px-2 border">-</button>
                    <div>{it.qty}</div>
                    <button onClick={() => onChangeQty(it.id, it.qty + 1)} className="px-2 border">+</button>
                    <button onClick={() => onRemove(it.id)} className="ml-2 text-red-500 text-sm">Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t pt-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">Subtotal</div>
            <div className="font-bold">₹{total}</div>
          </div>
          <button className="w-full py-2 bg-yellow-500 rounded font-semibold">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
