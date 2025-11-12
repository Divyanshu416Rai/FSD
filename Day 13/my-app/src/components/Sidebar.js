export default function Sidebar({ categories, selected, onSelect }) {
  return (
    <aside className="w-56 p-4 hidden md:block">
      <div className="bg-white rounded shadow p-3">
        <h4 className="font-semibold mb-2">Categories</h4>
        <ul className="space-y-2 text-sm">
          <li
            className={`cursor-pointer ${selected === "All" ? "font-bold" : ""}`}
            onClick={() => onSelect("All")}
          >
            All
          </li>
          {categories.map((c) => (
            <li
              key={c}
              className={`cursor-pointer ${selected === c ? "font-bold" : ""}`}
              onClick={() => onSelect(c)}
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
