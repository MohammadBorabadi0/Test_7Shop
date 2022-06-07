import React, { useState } from 'react';

// Icons 
import { FiChevronDown } from 'react-icons/fi';
import { CLEAR_FILTERS } from '../actions';
import { useFilter } from '../Providers/context/filter_context';
import { getUniqueValue } from '../utils/helpers';

const Filter = () => {
    const [showGender, setShowGender] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [showSizes, setShowSizes] = useState(false);

    const { dispatch, filters, updateFilters, all_products } = useFilter();

    const genderList = getUniqueValue(all_products, 'gender');
    const categories = getUniqueValue(all_products, 'category');
    const sizeList = getUniqueValue(all_products, 'size');

    return (
        <aside className='flex-1 px-3 py-6 border rounded-md shadow-md h-fit sticky top-16'>
            <div className='hidden sm:flex flex-col gap-4'>
                {/* Gender  */}
                <section className='flex flex-col items-start gap-1.5 border-b pb-4'>
                    <div className='flex items-center justify-between w-full' onClick={() => setShowGender(!showGender)}>
                        <h4 className='font-semibold'>Gender</h4>
                        <FiChevronDown size='25px' className={showGender && 'rotate-180'} />
                    </div>
                    {showGender && genderList.map((item, index) => (
                        <div key={index} className="form-check">
                            <input onChange={updateFilters} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value={item.toLowerCase()} id={item} name='gender' checked={item.toLowerCase() === filters.gender.toLowerCase() && true} />
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
                            <input onChange={updateFilters} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value={item.toLowerCase()} id={item} name='category' checked={item.toLowerCase() === filters.category.toLowerCase() && true} />
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
                            <input onChange={updateFilters} data-size={item} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value={item.toString()} id={item.toString()} name='size' checked={item.toString() === filters.size && true} />
                            <label className="form-check-label inline-block text-gray-800" htmlFor={item}>
                                {item}
                            </label>
                        </div>
                    ))
                    }
                </section>
                <section>
                    <button className='bg-red-700 text-white font-semibold px-2 py-1 rounded-md' onClick={() => dispatch({ type: CLEAR_FILTERS })}>Clear Filters</button>
                </section>
            </div>
        </aside >
    )
};

export default Filter;

{/* {buttons.map((item, index) => (
                    <button key={index} onClick={updateFilters} name='gender' className={`${item.name.toLowerCase() === filters.gender.toLowerCase() && 'bg-blue-700 text-white font-semibold px-2 py-1'}`}>{item.name}</button>
))} */}