import React from 'react';

// icons 
import { BiSearch } from 'react-icons/bi';

const Search = () => {
    return (
        <div className='flex items-center justify-between mb-7 sm:w-2/4 lg:w-1/4 mx-3 bg-gray-200 p-4 xl:mx-0 text-xl rounded-2xl'>
            <input type='text' placeholder='Search' className='bg-transparent w-full outline-none font-medium' />
            <BiSearch size='25px' />
        </div>
    );
};

export default Search;