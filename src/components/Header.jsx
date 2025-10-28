import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

export default function Header({ page, navigate }) {
  const { cart } = useContext(CartContext);
  const totalCount = Object.values(cart).reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">Paradise Nursery</h1>
        <nav className="flex gap-4 text-sm text-gray-600">
          {page !== 'landing' && <button onClick={() => navigate('landing')}>Home</button>}
          {page !== 'products' && <button onClick={() => navigate('products')}>Products</button>}
          {page !== 'cart' && <button onClick={() => navigate('cart')}>Cart</button>}
        </nav>
        <button onClick={() => navigate('cart')} className="relative p-2">
          🛒
          {totalCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full text-xs px-2">
              {totalCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
