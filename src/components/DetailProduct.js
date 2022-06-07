import React, { useState } from 'react';

// Icons 
import { FiChevronLeft } from 'react-icons/fi';
import { BiCart } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';

import data from '../db.json';
import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';

const DetailProduct = () => {
    const [active, setActive] = useState(0);
    const [show, setShow] = useState(false);

    const params = useParams();
    const id = Number(params.id);
    const product = data.find(i => i.id === id);
    const size = product.size;


    if (product)
        return (
            <Layout>
                <section className='flex flex-col md:flex-row bg-gray-300 md:bg-white md:rounded-xl md:overflow-hidden md:max-w-7xl md:mx-auto'>
                    <div className='flex flex-col sm:flex-1 border-r'>
                        <div className='flex sm:hidden justify-between items-center text-3xl text-slate-700 px-4 py-6'>
                            <span className='cursor-pointer'>
                                <FiChevronLeft />
                            </span>
                            <span className='cursor-pointer'>
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
                        <div className='flex items-center justify-center bg-orange-500 text-white gap-2 text-lg font-bold cursor-pointer py-1.5 rounded-xl sm:w-fit sm:px-6'>
                            <BiCart size='22px' />
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </section>
            </Layout>
        );
};

export default DetailProduct;