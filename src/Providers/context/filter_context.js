import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { FILTER_PRODUCTS, LOAD_PRODUCTS, SORT_PRODUCTS, UPDATE_FILTERS, UPDATE_SORT } from '../../actions';
import { allFilters } from '../../utils/helpers';
import filter_reducer from '../reducers/filter_reducer';
import { useProducts } from './products_context';

const initialState = {
    filtered_products: [],
    all_products: [],
    favorites_products: [],
    appliedFilters: [],
    filters: {
        gender: '',
        brand: '',
        category: '',
        size: '',
        search: '',
    },
    sort: 'lowest'
}

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filter_reducer, initialState);
    const { products } = useProducts();

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products });
    }, [products]);

    useEffect(() => {
        dispatch({ type: FILTER_PRODUCTS });
        dispatch({ type: SORT_PRODUCTS });
    }, [products, state.filters, state.sort]);

    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        // Size 
        if (name === 'size') {
            value = e.target.dataset.size
        }

        dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
    }

    const updateSort = e => {
        let value = e.target.value;
        let name = e.target.name;

        if (!value) {
            value = e.target.textContent;
        }
        dispatch({ type: UPDATE_SORT, payload: { name, value } });
    }

    return (
        <FilterContext.Provider value={{ ...state, dispatch, updateFilters, updateSort }}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;

// Custom Hooks 
export const useFilter = () => useContext(FilterContext);