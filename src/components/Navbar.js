import React, { useState } from 'react';

// ReactRouterDom 
import { Link, useNavigate } from 'react-router-dom';

// Icons
import { FaBars } from 'react-icons/fa';
import { BiCart, BiSearch, BiUser } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { HiUserAdd, HiUserRemove } from 'react-icons/hi';

import Search from './Search';
import { useUserContext } from '../Providers/context/user_context';

const Navbar = () => {
    const { loginWithRedirect, myUser, logout } = useUserContext();
    const [activeSearchBox, setActiveSearchBox] = useState(false);
    const navigate = useNavigate();
    const currentPathname = window.location.pathname;

    if (currentPathname === '/' && !activeSearchBox) {
        console.log('True');
    }

    return (
        <>
            {/* 640px to up  */}
            <header className='hidden sm:flex items-center justify-between bg-primary sticky top-0 border-b px-3 py-1.5 mb-5 z-10'>
                {/* Logo  */}
                <Link to='/'>
                    <h2 className='text-2xl font-semibold cursor-pointer'><span className='text-orange-500 border-b-2 my-1 inline-block border-orange-500'>7</span>Shop</h2>
                </Link>
                <ul className='flex items-center gap-4'>
                    <li>
                        <Link to='/' className='hover:text-orange-500 transition-colors duration-100'>Home</Link>
                    </li>
                    <li>
                        <Link to='/favorites' className='hover:text-orange-500 transition-colors duration-100'>Favorites</Link>
                    </li>
                    <li>
                        <Link to='/aboutus' className='hover:text-orange-500 transition-colors duration-100'>About Us</Link>
                    </li>
                    {myUser ? <button className='hover:text-orange-500 transition-colors duration-100' onClick={() =>
                        logout({ returnTo: window.location.origin })}>Logout</button> :
                        <button className='hover:text-orange-500 transition-colors duration-100' onClick={loginWithRedirect}>Login</button>}
                </ul>
                <div className='flex items-center gap-4'>
                    {myUser && <button onClick={() => navigate('/profile')}>
                        <BiUser size='25px' />
                    </button>}
                    {currentPathname === '/' ? !activeSearchBox ? <BiSearch size='25px' className='cursor-pointer' onClick={() => setActiveSearchBox(!activeSearchBox)} /> :
                        <IoClose size='25px' className='cursor-pointer' onClick={() => setActiveSearchBox(!activeSearchBox)} /> : null}
                    <BiCart size='25px' />
                </div>
            </header>
            <div className='hidden sm:flex'>{activeSearchBox && <Search />}</div>
        </>
    );
};

export default Navbar;