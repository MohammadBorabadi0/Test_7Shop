import React, { createContext, useContext, useReducer } from 'react';
import products_reducer from '../reducers/products_reducer';
import data from '../../db.json';

const initialState = {
    products: data,
}

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(products_reducer, initialState);
    return (
        <ProductsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;

// Custom Hooks 
export const useProducts = () => useContext(ProductsContext);