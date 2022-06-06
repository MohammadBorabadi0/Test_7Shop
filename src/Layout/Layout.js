import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    return (

        <main className='min-h-screen w-full bg-primary'>
            <section className='pb-24 xl:px-0 md:mx-auto md:max-w-7xl bg-primary'>
                <Navbar />
                {children}
            </section>
        </main>
    );
};

export default Layout;