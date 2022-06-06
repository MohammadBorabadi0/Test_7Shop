import React, { useState } from 'react';

// Icons 
import { BiHeart, BiPlus } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ADD_TO_FAVORITES } from '../actions';
import { useFilter } from '../Providers/context/filter_context';
import { toast } from 'react-toastify';

const Product = ({ item, index }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { dispatch } = useFilter();

    const addToFavoritesHandler = () => {
        dispatch({ type: ADD_TO_FAVORITES, payload: item });
        if (isFavorite) {
            toast.error('Removed from favorites');
        }
        else {
            toast.success("Added to favorites");
        }
        setIsFavorite(!isFavorite);
    }

    return (
        // <Link to={`/product/${item.id}`}>
        <div className='shadow-md hover:shadow-xl cursor-pointer rounded-3xl py-8 bg-white'>
            <div className='flex justify-between items-center px-4'>
                <span>
                    {!isFavorite && <BiHeart size='28px' onClick={addToFavoritesHandler} />}
                    {isFavorite && <FaHeart className='text-red-600' size='24px' onClick={addToFavoritesHandler} />}
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
                {item.id}
                <h4 className='text-lg text-slate-800 font-medium'>{item.name}</h4>
                <span className='text-orange-600'>${item.price}</span>
                <Link to={`/product/${item.id}`}>Detail</Link>
            </div>
        </div>
        // </Link>
    );
};

export default Product;