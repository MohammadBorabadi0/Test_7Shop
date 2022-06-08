import React, { useState } from 'react';

// Icons 
import { FiChevronLeft } from 'react-icons/fi';
import { BiCart, BiHeart } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import data from '../db.json';
import { useParams, useNavigate } from 'react-router-dom';
import LayoutDetail from '../Layout/LayoutDetail';
import { useFilter } from '../Providers/context/filter_context';
import { toast } from 'react-toastify';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions';

const DetailProduct = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { dispatch, favorites_products } = useFilter();
    const [active, setActive] = useState(0);
    const [show, setShow] = useState(false);
    let navigate = useNavigate();
    const params = useParams();
    const id = Number(params.id);
    const product = data.find(i => i.id === id);
    const size = product.size;

    const isExist = favorites_products.find(i => i.id === product.id);

    const favoriteHandler = () => {
        if (!isFavorite) {
            toast.success("Added to favorites");
            setIsFavorite(!isFavorite);
            dispatch({ type: ADD_TO_FAVORITES, payload: product });
        }
        if (isFavorite) {
            toast.error("Remove from favorites");
            setIsFavorite(!isFavorite);
            dispatch({ type: REMOVE_FROM_FAVORITES, payload: product });
        }
    }

    if (product)
        return (
            <LayoutDetail>
                <section className='flex flex-col lg:flex-row bg-gray-300 md:bg-white md:rounded-xl md:overflow-hidden md:max-w-7xl md:mx-auto'>
                    <div className='flex flex-col sm:flex-1 border-r'>
                        <div className='flex sm:hidden justify-between items-center text-3xl text-slate-700 px-4 py-6'>
                            <span className='cursor-pointer' onClick={() => navigate('/')}>
                                <FiChevronLeft />
                            </span>
                            <span className='cursor-pointer' onClick={() => navigate('/cart')}>
                                <BiCart />
                            </span>
                        </div>
                        <div className='flex justify-center'>
                            <img src={`../${product.imageURL}`} alt={product.name} />
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-1 gap-6 bg-white rounded-t-[2.5rem] sm:rounded-none px-6 py-8'>
                        <div className='flex justify-between items-center font-bold'>
                            <h4 className='text-lg'>{product.name}</h4>
                            <span className='text-xl'>${product.price}</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex justify-between items-center'>
                                <h4 className='font-semibold text-lg'>Size</h4>
                                <span className='text-gray-400 font-medium'>Size Guide</span>
                            </div>
                            <div className='flex gap-2'>
                                {size.map((item, index) => (
                                    <button
                                        key={index}
                                        className={`px-2 py-1 bg-gray-100 shadow-lg rounded-md font-semibold text-lg ${active === index && 'bg-orange-500 text-white'}`}
                                        onClick={() => setActive(index)}>{item}</button>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex justify-between items-center text-xl font-semibold cursor-pointer'
                                onClick={() => setShow(!show)}>
                                <h4>Description</h4>
                                <FiChevronDown size='25px' className={show && 'rotate-180'} />
                            </div>
                            <p className={`mt-4 max-h-0 overflow-hidden transition-all duration-1000 ease-out ${show && 'transition-all duration-1000 max-h-fit'}`}>{product.description}</p>
                        </div>
                        <section className='flex flex-col sm:flex-row items-center gap-4'>
                            <div className='flex items-center justify-center bg-orange-500 hover:bg-white hover:text-orange-500 border-2 border-orange-500 text-white transition-colors duration-200 gap-2 text-base md:text-lg px-3 py-1.5 font-bold cursor-pointer rounded-xl w-full sm:w-fit sm:px-6'>
                                <BiCart size='22px' />
                                <button className='font-medium'>Add To Cart</button>
                            </div>
                            <div className={`flex items-center justify-center text-white transition-colors duration-200 gap-2 text-base md:text-lg px-3 py-1.5 font-bold cursor-pointer rounded-xl w-full sm:w-fit ${isExist && isFavorite ? 'bg-red-600 hover:bg-white hover:text-red-600 border-2 border-red-600' : 'bg-yellow-500 hover:bg-white hover:text-yellow-500 border-2 border-yellow-500'}`}
                                onClick={favoriteHandler}>
                                {!isExist && !isFavorite && <button className='flex items-center gap-2 font-medium'>
                                    <BiHeart size='25px' />
                                    Add To Favorites
                                </button>}
                                {isExist && <button className='flex items-center gap-2 font-medium'>
                                    <FaHeart size='25px' className='text-red-800' />
                                    Remove From Favorites
                                </button>}
                            </div>
                        </section>
                    </div>
                </section>
            </LayoutDetail>
        );
};

export default DetailProduct;