import React from 'react';
import { useFilter } from '../Providers/context/filter_context';

const buttons = [
    { id: 0, name: 'All' },
    { id: 1, imageURL: 'images/nike.svg', name: 'Nike' },
    { id: 2, imageURL: 'images/reebok.svg', name: 'Reebok' },
    { id: 3, imageURL: 'images/puma.svg', name: 'Puma' },
    { id: 4, imageURL: 'images/adidas.svg', name: 'Adidas' },
    { id: 5, imageURL: 'images/vans.svg', name: 'Vans' },
]

const FilterByBrand = () => {
    const { filters, updateFilters } = useFilter();

    return (
        <section className='flex items-center gap-2 text-lg mb-5 pb-4 lg:p-0 lg:pb-4 no-scrollbar overflow-x-auto border-b'>
            {buttons.map(item => (
                <button onClick={updateFilters} value={item.name.toLowerCase()}
                    name='brand' key={item.id} className={`flex items-center flex-shrink-0 gap-2 px-4 py-2 rounded-full bg-white cursor-pointer ${item.name.toLowerCase() === filters.brand.toLowerCase() && 'bg-orange-600 text-white'}`}>
                    {item.imageURL && <img className="block w-10 h-8 pointer-events-none" src={item.imageURL} alt={`${item.name} Logo`} />}
                    <p className='pointer-events-none' name='brand' value={item.name.toLowerCase()} onClick={updateFilters}>{item.name}</p>
                </button>
            ))
            }
        </section >
    );
};

export default FilterByBrand;