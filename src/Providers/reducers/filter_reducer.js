import React from 'react';
import { CLEAR_FILTERS, FILTER_PRODUCTS, LOAD_PRODUCTS, ADD_TO_FAVORITES, SORT_PRODUCTS, UPDATE_FILTERS, UPDATE_SORT } from '../../actions';

const filter_reducer = (state, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS: {
            return { ...state, all_products: [...action.payload], filtered_products: [...action.payload] }
        }
        case UPDATE_FILTERS: {
            const { name, value } = action.payload;
            return { ...state, filters: { ...state.filters, [name]: value } };
        }
        case FILTER_PRODUCTS: {
            const { all_products, filters } = state;
            const { gender, brand, category, size } = filters;
            let tempProducts = [...all_products];

            // Gender 
            if (gender) {
                tempProducts = tempProducts.filter(i => i.gender.toLowerCase()
                    .startsWith(gender.toLowerCase()));
            }

            // Brand 
            if (brand) {
                tempProducts = tempProducts.filter(i => i.brand.toLowerCase()
                    .includes(brand.toLowerCase()));
            }

            // Category 
            if (category) {
                tempProducts = tempProducts.filter(i => i.category.toLowerCase()
                    .includes(category.toLowerCase()));
            }

            // Size 
            if (size) {
                tempProducts = tempProducts.filter((product) => {
                    return product.size.find(c => c.toString() === size);
                })
            }

            return { ...state, filtered_products: tempProducts };
        }
        case UPDATE_SORT: {
            const { name, value } = action.payload;
            return { ...state, [name]: value }
        }
        case SORT_PRODUCTS: {
            const { filtered_products, sort } = state;
            let tempProducts = [...filtered_products];

            if (sort === 'lowest') {
                tempProducts = tempProducts.sort((a, b) => a.price - b.price);
            }

            if (sort === 'highest') {
                tempProducts = tempProducts.sort((a, b) => b.price - a.price);
            }

            return { ...state, filtered_products: tempProducts }
        }
        case CLEAR_FILTERS: {
            return {
                ...state,
                filters: {
                    gender: '',
                    brand: ''
                },
                sort: 'lowest'
            }
        }
        case ADD_TO_FAVORITES: {
            const updatedFavoritesProducts = [...state.favorites_products];
            const findItem = updatedFavoritesProducts.find(i => i.id === action.payload.id);

            if (findItem === undefined) {
                updatedFavoritesProducts.push({ ...action.payload });
                return { ...state, favorites_products: updatedFavoritesProducts };
            }
            else {
                const filtered_favorites_products = updatedFavoritesProducts.filter(i => i.id !== action.payload.id);
                return { ...state, favorites_products: filtered_favorites_products };
            }
        }
        default: {
            return state;
        }
    }
};

export default filter_reducer;