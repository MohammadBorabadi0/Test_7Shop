import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Layout 
import Layout from '../Layout/Layout';

// Context 
import { useFilter } from '../Providers/context/filter_context';
import FavoriteItem from './FavoriteItem';

const FavoriteList = () => {
    const { dispatch, favorites_products } = useFilter();

    return (
        <Layout>
            <main className='flex flex-col gap-6'>
                <h2 className='text-xl font-semibold'>MY WISHLIST</h2>
                <span>{favorites_products.length} Items</span>
                {!favorites_products.length && <p>You haven't saved any items to your wishlist yet. Start shopping and add your favorite items to your wishlist.</p>}
                {!favorites_products.length && <Link to='/' className='bg-blue-600 text-white font-semibold w-fit px-4 py-1 rounded-md'>Go To Shop</Link>}
                <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6 '>
                    {favorites_products.map((item, index) => (
                        <div key={index}>
                            <FavoriteItem item={item} />
                        </div>
                    ))}
                </section>
            </main>
        </Layout>
    );
};

export default FavoriteList;