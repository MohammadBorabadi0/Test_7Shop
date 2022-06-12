import React from 'react';

const Footer = () => {
    const currentDate = new Date().getFullYear();

    return (
        <footer className='flex mb-20 sm:mb-0 mt-8 py-6 bg-slate-900'>
            <section className='px-3 xl:px-0 md:max-w-7xl md:mx-auto'>
                <div className='flex justify-center items-center text-sm sm:text-lg text-white'>
                    <h3>© {currentDate} 7Shop
                        All rights reserved</h3>
                </div>
            </section>
        </footer>
    );
};

export default Footer;