import React, { useState } from 'react';

// Icons 
import { BiHeart } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions';
import { useFilter } from '../Providers/context/filter_context';
import { toast } from 'react-toastify';

const Product = ({ item, index }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { dispatch, favorites_products } = useFilter();
    let navigate = useNavigate();


    const isExist = favorites_products.find(i => i.id === item.id);

    const addToFavoritesHandler = (e) => {
        e.stopPropagation();
        toast.success("Added to favorites");
        setIsFavorite(!isFavorite);
        dispatch({ type: ADD_TO_FAVORITES, payload: item });
    }

    const removeFavoritesHandler = (e) => {
        e.stopPropagation();
        toast.error("Remove from favorites");
        setIsFavorite(!isFavorite);
        dispatch({ type: REMOVE_FROM_FAVORITES, payload: item });
    }

    return (
        <section
            onClick={() => navigate(`/product/${item.id}`)}
            className='shadow-md hover:shadow-xl cursor-pointer rounded-md py-8 bg-white'>
            <div className='flex justify-end items-center px-6'>
                    {!isExist && !isFavorite && <button onClick={(e) => addToFavoritesHandler(e)}>
                        <BiHeart size='28px' />
                    </button>}
                    {isExist && <button onClick={(e) => removeFavoritesHandler(e)}><FaHeart size='24px' className='text-red-600' /></button>}
            </div>
            <div>
                <img src={item.imageURL} alt={item.name} className='h-[300px] w-full object-contain' />
            </div>
            <div className='flex flex-col gap-2 text-center font-semibold px-4'>
                <h3>{item.brand}</h3>
                <h4 className='text-lg text-slate-800 font-medium'>{item.name}</h4>
                <span className='text-orange-600'>${item.price}</span>
            </div>
        </section>
    );
};

export default Product;