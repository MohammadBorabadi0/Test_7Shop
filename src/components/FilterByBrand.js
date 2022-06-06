import React from 'react';
import { useFilter } from '../Providers/context/filter_context';

const buttons = [
    { id: 0, imageURL: 'images/nike.svg', name: 'Nike' },
    { id: 1, imageURL: 'images/reebok.svg', name: 'Reebok' },
    { id: 2, imageURL: 'images/puma.svg', name: 'Puma' },
    { id: 3, imageURL: 'images/adidas.svg', name: 'Adidas' },
    { id: 4, imageURL: 'images/vans.svg', name: 'Vans' },
]

const FilterByBrand = () => {
    const { filters, updateFilters, all_products } = useFilter();

    return (
        <section className='flex items-center gap-2 text-lg mb-4 px-3 xl:p-0 overflow-x-auto ::-webkit-scrollbar'>
            {buttons.map(item => (
                <div onClick={updateFilters}
                    name='brand' key={item.id} className={`flex items-center flex-shrink-0 gap-2 px-4 py-2 rounded-full bg-white cursor-pointer ${item.name.toLowerCase() === filters.brand.toLowerCase() && 'bg-orange-500 text-white'}`}>
                    <img name='brand' className="block w-10 h-8" src={item.imageURL} alt={`${item.name} Logo`} />
                    <button name='brand'>{item.name}</button>
                </div>
            ))
            }
        </section >
    );
};

export default FilterByBrand;