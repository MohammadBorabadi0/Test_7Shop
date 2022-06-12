import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { CLEAR_CART } from '../actions';
import { useCart } from '../Providers/context/cart_context';

// Context 
import { useUserContext } from '../Providers/context/user_context';

const Payment = () => {
    const { myUser } = useUserContext();
    const { dispatch } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: CLEAR_CART });
            navigate('/');
        }, 5000);
    }, []);

    if (myUser)
        return (
            <main className='absolute inset-0 flex justify-center bg-slate-700 items-center w-full min-h-screen animate-showModal' onClick={() => navigate('/')}>
                <section className='flex flex-col justify-center items-center gap-4 bg-white px-6 py-10 z-10 rounded-md shadow-lg' onClick={(e) => e.stopPropagation()}>
                    <div className='flex flex-col gap-2 text-center'>
                        <h2 className='text-xl font-semibold'>Thank You {myUser.given_name}</h2>
                        <p className='text-lg font-medium'>Your Payment Was Successful!</p>
                    </div>
                    <p>Redirecting To Home Page Shortly</p>
                    <button className='bg-orange-500 text-white px-6 py-1.5 rounded-lg'
                        onClick={() => navigate('/')}>Back to Home Now</button>
                </section>
            </main >
        );
};

export default Payment;