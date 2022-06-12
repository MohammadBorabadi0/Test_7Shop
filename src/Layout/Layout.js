import React from 'react';
import Footer from '../components/Footer';
import MobileNavbar from '../components/MobileNavbar';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <main className='min-h-screen w-full bg-primary'>
                <section className='px-3 xl:px-0 md:mx-auto md:max-w-7xl bg-primary'>
                    <MobileNavbar />
                    <Navbar />
                    {children}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Layout;