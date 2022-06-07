import React, { useState } from 'react';

// Icons 
import { BiPlus, BiHeart } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions';
import { useFilter } from '../Providers/context/filter_context';

const FavoriteItem = ({ item }) => {
    const [isFavorite, setIsFavorite] = useState(true);
    const { dispatch } = useFilter();

    const removeFromFavoritesHandler = (item) => {
        dispatch({ type: REMOVE_FROM_FAVORITES, payload: item });
        setIsFavorite(!isFavorite);
    }

    return (
        <div className='shadow-md hover:shadow-xl hover:cursor-pointer rounded-md'>
            <div className='flex justify-between items-center px-4'>
                <span onClick={() => removeFromFavoritesHandler(item)}>
                    {/* {!isFavorite && <BiHeart size='28px' onClick={removeFromFavoritesHandler} />} */}
                    <FaHeart className='text-red-600' size='24px' onClick={removeFromFavoritesHandler} />
                </span>
                <span className='text-orange-600'>
                    <BiPlus size='28px' />
                </span>
            </div>
            <div className='flex justify-center'>
                <img src={item.imageURL} alt={item.name} className='w-1/2' />
            </div>
            <div className='px-4 py-6'>
                <h4>{item.name}</h4>
                <span>${item.price}</span>
            </div>
        </div>
    );
};

export default FavoriteItem;