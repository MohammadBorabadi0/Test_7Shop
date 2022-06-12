import React from 'react';
import Navbar from '../components/Navbar';

const LayoutDetail = ({ children }) => {
    return (
        <main className='min-h-screen w-full bg-primary'>
            <section className='px-0 sm:px-3 xl:px-0 md:mx-auto md:max-w-7xl'>
                <Navbar />
                {children}
            </section>
        </main>
    );
};

export default LayoutDetail;