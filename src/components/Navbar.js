import React, { useState } from 'react';

// ReactRouterDom 
import { Link } from 'react-router-dom';

// Icons
import { FaBars } from 'react-icons/fa';
import { BiCart, BiSearch } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

import Search from './Search';
import { useUserContext } from '../Providers/context/user_context';


const NavList = [
    { id: 0, icon: 'fa-solid fa-house', link: '/' },
    { id: 1, icon: 'fa-solid fa-heart', link: '/favorites' },
    { id: 2, icon: 'fa-solid fa-cart-shopping', link: '/cart' },
    { id: 3, icon: 'fa-solid fa-user', link: '/login' }
]

const Navbar = () => {
    const { loginWithRedirect, myUser, logout } = useUserContext();
    const [activeSearchBox, setActiveSearchBox] = useState(false);
    const [activeNavList, setActiveNavList] = useState(NavList[0].id);


    return (
        <>
            {/* 0-640px */}
            <header className='sm:hidden sticky bg-primary top-0 py-3 px-5 mb-5 flex items-center justify-between text-xl font-bold'>
                <span className='cursor-pointer'>
                    <FaBars />
                </span>
                <h2 className='text-2xl font-semibold cursor-pointer'><span className='text-purple-900 border-b-2 border-purple-900'>7</span>Shop</h2>
                <div className='flex items-center gap-2'>
                    {activeSearchBox ? <IoClose size='25px' className='cursor-pointer' onClick={() => setActiveSearchBox(!activeSearchBox)} />
                        : <BiSearch size='25px' className='cursor-pointer' onClick={() => setActiveSearchBox(!activeSearchBox)} />}
                    <BiCart size='25px' className='cursor-pointer' />
                </div>
            </header>
            {activeSearchBox && <Search />}
            <nav className='sm:hidden fixed bottom-0 left-0 right-0 w-full z-10 bg-white shadow-xl rounded-t-3xl px-3'>
                <ul className='flex items-center justify-between px-12 py-4 text-lg'>
                    {NavList.map((item, index) => (
                        <li key={item.id}>
                            <Link to={item.link} onClick={() => setActiveNavList(item.id)}>
                                <i className={`${item.icon} ${index !== activeNavList ? 'text-slate-400' : 'bg-slate-900 text-white p-2 rounded-md'}`}></i>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* 640px to up  */}
            <header className='hidden sm:flex items-center justify-between bg-primary sticky top-0 border-b px-3 py-1.5 mb-5'>
                {/* Logo  */}
                <h2 className='text-2xl font-semibold cursor-pointer'><span className='text-purple-900 border-b-2 my-1 inline-block border-purple-900'>7</span>Shop</h2>
                <ul className='flex items-center gap-4'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                    <li>
                        <Link to='/aboutus'>About Us</Link>
                    </li>
                    {myUser ? <button onClick={() =>
                        logout({ returnTo: window.location.origin })}>Logout</button> :
                        <button onClick={loginWithRedirect}>Login</button>}
                </ul>
                <div>
                    <BiCart size='25px' />
                </div>
            </header>
        </>
    );
};

export default Navbar;