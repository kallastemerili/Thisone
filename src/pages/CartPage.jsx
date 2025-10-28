import React from 'react';

export default function CartPage({ cart, onIncrease, onDecrease, onRemove, navigate }) {
  const items = Object.values(cart);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (!items.length)
    return (
      <div className="p-8 text-center">
        <p>Your cart is empty.</p>
        <button onClick={() => navigate('products')} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
          Continue Shopping
        </button>
      </div>
    );

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {items.map((it) => (
        <div key={it.id} className="flex items-center justify-between border-b py-3">
          <div className="flex items-center gap-4">
            <img src={it.img} alt={it.name} className="w-16 h-16 object-cover rounded" />
            <div>
              <div className="font-semibold">{it.name}</div>
              <div className="text-sm text-gray-500">${it.price.toFixed(2)}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => onDecrease(it.id)} className="border px-2">-</button>
            <span>{it.quantity}</span>
            <button onClick={() => onIncrease(it.id)} className="border px-2">+</button>
          </div>
          <div>${(it.price * it.quantity).toFixed(2)}</div>
          <button onClick={() => onRemove(it.id)} className="text-red-600 text-sm">Delete</button>
        </div>
      ))}
      <div className="text-right mt-6 text-xl font-bold">Total: ${total.toFixed(2)}</div>
    </main>
  );
}
