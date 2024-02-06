export default function Item({ name, quantity, category }) {
  return (
    <div className="ml-2 mb-4 pt-2 pb-2">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm">
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
