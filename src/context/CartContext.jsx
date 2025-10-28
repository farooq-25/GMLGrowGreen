import React, { createContext, useReducer, useContext, useEffect } from 'react';

// 1. Define the initial state
// Try to load cart from localStorage, otherwise start with empty array
const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

// 2. Create the Context
const CartContext = createContext({
  state: initialState,
  dispatch: () => null, // Placeholder dispatch function
});

// 3. Define the Reducer function
// This function handles how the state changes based on actions
const cartReducer = (state, action) => {
  let updatedItems;

  switch (action.type) {
    case 'ADD_ITEM':
      // Find if item already exists in cart
      const existingCartItemIndex = state.items.findIndex(
        item => item.id === action.payload.id // Check by ID (add size/variant check later if needed)
      );
      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        // If item exists, update its quantity
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.payload.quantity, // Add the specified quantity
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        // If item is new, add it to the cart
        updatedItems = state.items.concat(action.payload);
      }
      return { ...state, items: updatedItems };

    case 'REMOVE_ITEM':
      // Filter out the item with the matching ID
      updatedItems = state.items.filter(item => item.id !== action.payload.id);
      return { ...state, items: updatedItems };

    case 'UPDATE_QUANTITY':
      // Find the item and update its quantity
      updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) } // Ensure quantity >= 1
          : item
      );
      // Optional: Filter out items if quantity becomes 0 after update (if using decrease)
      // updatedItems = updatedItems.filter(item => item.quantity > 0);
      return { ...state, items: updatedItems };
      
    case 'CLEAR_CART':
        return { ...state, items: [] }; // Reset items to empty array

    default:
      return state;
  }
};

// 4. Create the Provider Component
// This component wraps your app and provides the cart state
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.items));
  }, [state.items]);


  // Value provided to consuming components
  const contextValue = {
    state,
    dispatch,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// 5. Create a custom hook for easier access (optional but recommended)
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};