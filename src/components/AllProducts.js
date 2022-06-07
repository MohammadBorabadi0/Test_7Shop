import React, { useState } from 'react';

// Icons 
import { BiSliderAlt } from 'react-icons/bi';

// Data 
import Layout from '../Layout/Layout';
import { useFilter } from '../Providers/context/filter_context';
import Filter from './Filter';
import FilterByBrand from './FilterByBrand';
import Product from './Product';
import Sort from './Sort';
import Modal from './Modal';

const AllProducts = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [showFilterMobile, setShowFilterMobile] = useState(false);
    const { filtered_products, updateSort, sort } = useFilter();

    return (
        <Layout>
            <div className='flex justify-between items-center mb-4 px-3 xl:p-0'>
                <h4 className='text-sm lg:text-xl text-slate-400'>{filtered_products.length} Products Found</h4>
                <div className='hidden lg:flex items-center gap-8'>
                    <button className='flex items-center gap-2' onClick={() => setShowFilters(!showFilters)}>{showFilters ? 'Hide Filters' : 'Show Filters'} <BiSliderAlt /></button>
                    <Sort sort={sort} updateSort={updateSort} />
                </div>
                <div className='flex lg:hidden items-center gap-2 border border-slate-400 rounded-full px-4 py-1 cursor-pointer' onClick={() => setShowFilterMobile(true)}>
                    Filter
                    <BiSliderAlt />
                </div>
            </div>
            {showFilterMobile && <Modal showFilterMobile={showFilterMobile} setShowFilterMobile={setShowFilterMobile} />}
            <FilterByBrand />
            <main className='flex gap-8'>
                {showFilters && <Filter />}
                <section className='flex-[5_5_0%]'>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${!showFilters && 'lg:grid-cols-4'} gap-x-2 gap-y-8 px-3 xl:p-0`}>
                        {filtered_products.map((item, index) => (
                            <Product key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default AllProducts;