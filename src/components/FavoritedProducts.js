import React from 'react';
import Layout from '../Layout/Layout';
import { useFilter } from '../Providers/context/filter_context';

const FavoritedProducts = () => {
    const { favorites_products } = useFilter();

    return (
        <Layout>
            {favorites_products.map(item => (
                <div key={item.id}>
                    <div>
                        <img src={item.imageURL} alt={item.name} />
                    </div>
                    <div>
                        <h4>{item.name}</h4>
                        <span>${item.price}</span>
                    </div>
                </div>
            ))}
        </Layout>
    );
};

export default FavoritedProducts;