import React, { createContext, useContext, useReducer } from 'react';

// Reducer 
import cart_reducer from '../reducers/cart_reducer';

// InitialState 
const initialState = {
    cart: [],
}

// CartContext 
const CartContext = createContext();

// CartProvider 
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cart_reducer, initialState);

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

// Custom Hook  
export const useCart = () => useContext(CartContext);