import React, { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'hydrate':
      return action.payload || {};
    case 'add': {
      const { id } = action.payload;
      const prev = state[id] || { ...action.payload, quantity: 0 };
      return { ...state, [id]: { ...prev, quantity: prev.quantity + 1 } };
    }
    case 'increase':
      return { ...state, [action.payload]: { ...state[action.payload], quantity: state[action.payload].quantity + 1 } };
    case 'decrease': {
      const id = action.payload;
      const q = state[id].quantity - 1;
      if (q <= 0) {
        const copy = { ...state };
        delete copy[id];
        return copy;
      }
      return { ...state, [id]: { ...state[id], quantity: q } };
    }
    case 'remove': {
      const copy = { ...state };
      delete copy[action.payload];
      return copy;
    }
    case 'clear':
      return {};
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, {});

  useEffect(() => {
    const saved = localStorage.getItem('paradise_nursery_cart');
    if (saved) dispatch({ type: 'hydrate', payload: JSON.parse(saved) });
  }, []);

  useEffect(() => {
    localStorage.setItem('paradise_nursery_cart', JSON.stringify(cart));
  }, [cart]);

  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
}

export default CartContext;
