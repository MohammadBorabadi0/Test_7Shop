import React, { useState } from 'react';

// Icons 
import { BiHeart, BiPlus } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions';
import { useFilter } from '../Providers/context/filter_context';
import { toast } from 'react-toastify';

const Product = ({ item, index }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { dispatch, favorites_products } = useFilter();

    const isExist = favorites_products.find(i => i.id === item.id);

    const addToFavoritesHandler = () => {
        toast.success("Added to favorites");
        setIsFavorite(!isFavorite);
        dispatch({ type: ADD_TO_FAVORITES, payload: item });
    }

    const removeFavoritesHandler = () => {
        toast.error("Remove from favorites");
        setIsFavorite(!isFavorite);
        dispatch({ type: REMOVE_FROM_FAVORITES, payload: item });
    }

    return (
        <Link to={`/product/${item.id}`}>
            <div className='shadow-md hover:shadow-xl cursor-pointer rounded-3xl py-8 bg-white'>
                <div className='flex justify-between items-center px-4'>
                    <span>
                        {!isExist && !isFavorite && <BiHeart size='28px' onClick={addToFavoritesHandler} />}
                        {isExist && <FaHeart className='text-red-600' size='24px' onClick={removeFavoritesHandler} />}
                    </span>
                    <span className='text-orange-600'>
                        <BiPlus size='28px' />
                    </span>
                </div>
                <div>
                    <img src={item.imageURL} alt={item.name} className='h-[300px] w-full object-contain' />
                </div>
                <div className='flex flex-col gap-2 text-center font-semibold px-4'>
                    <h3>{item.brand}</h3>
                    <h4 className='text-lg text-slate-800 font-medium'>{item.name}</h4>
                    <span className='text-orange-600'>${item.price}</span>
                </div>
            </div>
        </Link>
    );
};

export default Product;