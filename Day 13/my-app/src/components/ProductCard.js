export default function ProductCard({ p, onAdd }) {
  return (
    <div className="bg-white rounded shadow overflow-hidden flex flex-col">
      <img src={p.img} alt={p.title} className="h-40 w-full object-cover" />
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
        <div className="text-xs text-gray-600 mb-2">{p.category}</div>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <div className="font-bold">₹{p.price}</div>
            <div className="text-xs">⭐ {p.rating}</div>
          </div>
          <button
            onClick={() => onAdd(p)}
            className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded text-sm"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
