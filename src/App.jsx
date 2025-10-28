import React, { useState, useContext } from 'react';
import { PRODUCTS } from './data/products';
import { CartProvider } from './context/CartContext';
import CartContext from './context/CartContext';
import Header from './components/Header';
import Landing from './pages/Landing';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function AppContent() {
  const [page, setPage] = useState('landing');
  const { cart, dispatch } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header page={page} navigate={setPage} />
      {page === 'landing' && <Landing navigate={setPage} />}
      {page === 'products' && <ProductsPage products={PRODUCTS} onAdd={(p) => dispatch({ type: 'add', payload: p })} />}
      {page === 'cart' && (
        <CartPage
          cart={cart}
          onIncrease={(id) => dispatch({ type: 'increase', payload: id })}
          onDecrease={(id) => dispatch({ type: 'decrease', payload: id })}
          onRemove={(id) => dispatch({ type: 'remove', payload: id })}
          navigate={setPage}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
