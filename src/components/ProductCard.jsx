export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img src={product.img} alt={product.name} className="h-40 w-full object-cover rounded mb-3" />
      <h3 className="font-semibold">{product.name}</h3>
      <div className="text-sm text-gray-500 mb-2">{product.category}</div>
      <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
      <button onClick={() => onAdd(product)} className="mt-3 w-full bg-green-600 text-white py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}
