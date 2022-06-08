import React, { useState } from 'react';

// Icons 
import { FiChevronDown } from 'react-icons/fi';

import { MdClose } from 'react-icons/md';
import { UPDATE_SORT, UPDATE_FILTERS, CLEAR_FILTERS } from '../actions';
import { useFilter } from '../Providers/context/filter_context';
import { getUniqueValue } from '../utils/helpers';

const Modal = ({ showFilterMobile, setShowFilterMobile }) => {
    const [showSort, setShowSort] = useState(false);
    const [showGender, setShowGender] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [showSizes, setShowSizes] = useState(false);

    const { sort, filters, all_products, dispatch } = useFilter();

    // GetUniqueValues 
    const genderList = getUniqueValue(all_products, 'gender');
    const categories = getUniqueValue(all_products, 'category');
    const sizeList = getUniqueValue(all_products, 'size');

    const sortHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setShowFilterMobile(false);
        dispatch({ type: UPDATE_SORT, payload: { name, value } });
    }

    const filterHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setShowFilterMobile(false);
        dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
    }

    const clearAllFilters = () => {
        setShowFilterMobile(false);
        dispatch({ type: CLEAR_FILTERS });
    }

    return (
        <section className={`flex sm:hidden flex-col gap-8 bg-white z-20 fixed inset-0 top-0 rounded-t-2xl px-4 py-6 animate-wiggle overflow-y-auto`}>
            <div className='flex justify-between items-center'>
                <h2>Filter By</h2>
                <div className='flex items-center gap-6'>
                    <button className='text-blue-600 font-semibold hover:underline' onClick={clearAllFilters}>Clear All</button>
                    <button onClick={() => setShowFilterMobile(false)}>
                        <MdClose size='30px' />
                    </button>
                </div>
            </div>
            {/* Sort  */}
            <section className='flex flex-col gap-4 border-b pb-4'>
                <div className='flex justify-between items-center font-semibold cursor-pointer' onClick={() => setShowSort(!showSort)}>
                    <h4>Sort By</h4>
                    <FiChevronDown size='25px' className={`${showSort && 'rotate-180'}`} />
                </div>
                {showSort && <div className='flex flex-col gap-2'>
                    <button className='flex justify-between items-center w-full text-left' name='sort' value='highest' onClick={sortHandler}>High-Low
                        {sort === 'highest' && <span className='bg-blue-600 p-[.2rem] rounded-md'><img className='w-4 h-4' src='./images/tick.svg' alt='tick' /></span>}
                    </button>
                    <button className='flex justify-between items-center w-full text-left' name='sort' value='lowest' onClick={sortHandler}>Low-High
                        {sort === 'lowest' && <span className='bg-blue-600 p-[.2rem] rounded-md'><img className='w-4 h-4' src='./images/tick.svg' alt='tick' /></span>}</button>
                </div>}
            </section>

            {/* Gender */}
            <section className='flex flex-col gap-4 border-b pb-4'>
                <div className='flex justify-between items-center font-semibold cursor-pointer' onClick={() => setShowGender(!showGender)}>
                    <h4>Gender</h4>
                    <FiChevronDown size='25px' className={`${showGender && 'rotate-180'}`} />
                </div>
                {showGender && genderList.map((item, index) => (
                    <div key={index} className="form-check">
                        <input onChange={filterHandler} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value={item.toLowerCase()} id={item} name='gender' checked={item.toLowerCase() === filters.gender.toLowerCase() && true} />
                        <label className="form-check-label inline-block text-gray-800" htmlFor={item}>
                            {item}
                        </label>
                    </div>
                ))
                }
            </section>

            {/* Category  */}
            <section className='flex flex-col gap-4 border-b pb-4'>
                <div className='flex justify-between items-center font-semibold cursor-pointer' onClick={() => setShowCategories(!showCategories)}>
                    <h4>Category</h4>
                    <FiChevronDown size='25px' className={`${showCategories && 'rotate-180'}`} />
                </div>
                {showCategories && categories.map((item, index) => (
                    <div key={index} className="form-check">
                        <input onChange={filterHandler} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value={item.toLowerCase()} id={item} name='category' checked={item.toLowerCase() === filters.category.toLowerCase() && true} />
                        <label className="form-check-label inline-block text-gray-800" htmlFor={item}>
                            {item}
                        </label>
                    </div>
                ))
                }
            </section>

            {/* Sizes  */}
            <section className='flex flex-col gap-4 border-b pb-4'>
                <div className='flex justify-between items-center font-semibold cursor-pointer' onClick={() => setShowSizes(!showSizes)}>
                    <h4>Size</h4>
                    <FiChevronDown size='25px' className={`${showSizes && 'rotate-180'}`} />
                </div>
                {showSizes && sizeList.map((item, index) => (
                    <div key={index} className="form-check">
                        <input onChange={filterHandler} data-size={item} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value={item.toString()} id={item.toString()} name='size' checked={item.toString() === filters.size && true} />
                        <label className="form-check-label inline-block text-gray-800" htmlFor={item}>
                            {item}
                        </label>
                    </div>
                ))
                }
            </section>
        </section>
    );
};

export default Modal;