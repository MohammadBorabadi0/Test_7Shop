import React, { useState } from 'react';

// ReactRouterDom 
import { Link, NavLink, useNavigate } from 'react-router-dom';

// Icons
import { FaBars } from 'react-icons/fa';
import { BiCart, BiHeart, BiSearch, BiUser } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { HiUserAdd, HiUserRemove } from 'react-icons/hi';

import Search from './Search';
import { useUserContext } from '../Providers/context/user_context';
import { useCart } from '../Providers/context/cart_context';
import { useFilter } from '../Providers/context/filter_context';
import { CLEAR_SEARCH_BOX } from '../actions';

const Navbar = () => {
    const { loginWithRedirect, myUser, logout } = useUserContext();
    const { dispatch } = useFilter();
    const { numberOfAmounts } = useCart();

    const [activeSearchBox, setActiveSearchBox] = useState(false);
    const navigate = useNavigate();
    const currentPathname = window.location.pathname;

    const handleToggle = () => {
        setActiveSearchBox(!activeSearchBox);
        dispatch({ type: CLEAR_SEARCH_BOX });
    }

    return (
        <>
            {/* 640px to up  */}
            <header className='hidden md:flex items-center justify-between bg-primary sticky top-0 border-b px-5 xl:px-3 py-2 mb-5 z-10'>
                {/* Logo  */}
                <Link to='/'>
                    <h2 className='text-2xl font-semibold cursor-pointer'><span className='text-orange-500 border-b-2 my-1 inline-block border-orange-500'>7</span>Shop</h2>
                </Link>
                <ul className='flex items-center gap-4'>
                    <li>
                        <Link to='/' className='hover:text-orange-500 transition-colors duration-100'>Home</Link>
                    </li>
                    <li>
                        <Link to='/aboutus' className='hover:text-orange-500 transition-colors duration-100'>About</Link>
                    </li>
                    {myUser ? <Link to='/checkout' className='hover:text-orange-500 transition-colors duration-100'>Checkout</Link> : null}

                    {myUser ? <button className='hover:text-orange-500 transition-colors duration-100' onClick={() =>
                        logout({ returnTo: window.location.origin })}>Logout</button> :
                        <button className='hover:text-orange-500 transition-colors duration-100' onClick={loginWithRedirect}>Login</button>}
                </ul>
                <div className='flex items-center gap-4'>
                    <button onClick={() => navigate('/favorites')}>
                        <BiHeart size='25px' />
                    </button>
                    {myUser ? <button onClick={() => navigate('/profile')}>
                        <BiUser size='25px' />
                    </button> : null}
                    {currentPathname === '/' ? !activeSearchBox ? <BiSearch size='25px' className='cursor-pointer' onClick={handleToggle} /> :
                        <IoClose size='25px' className='cursor-pointer' onClick={handleToggle} /> : null}
                    <span onClick={() => navigate('/cart')} className='block cursor-pointer relative'>
                        <BiCart size='25px' />
                        <span className='absolute top-[-10px] right-[-13px] bg-red-700 text-white px-1.5 rounded-md text-sm'>{numberOfAmounts === 0 ? null : numberOfAmounts}</span>
                    </span>
                </div>
            </header>
            <div className='hidden sm:flex'>{activeSearchBox ? <Search /> : null}</div>
        </>
    );
};

export default Navbar;