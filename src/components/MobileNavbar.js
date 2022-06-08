import React, { useState } from 'react';

// Context 
import { useUserContext } from '../Providers/context/user_context';

// Icons 
import { FaBars } from 'react-icons/fa';
import { BiSearch, BiCart } from 'react-icons/bi';
import { HiUserRemove, HiUserAdd } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

// ReactRouterDom 
import { Link, NavLink } from 'react-router-dom';
import Search from './Search';

const NavList = [
    { id: 0, icon: 'fa-solid fa-house', link: '/' },
    { id: 1, icon: 'fa-solid fa-heart', link: '/favorites' },
    { id: 2, icon: 'fa-solid fa-cart-shopping', link: '/cart' },
    { id: 3, icon: 'fa-solid fa-user', link: '/profile' }
]

const MobileNavbar = () => {
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
                <Link to='/'>
                    <h2 className='text-2xl font-semibold cursor-pointer'><span className='text-orange-500 border-b-2 border-orange-500'>7</span>Shop</h2>
                </Link>
                <div className='flex items-center gap-2'>
                    <div className='flex sm:hidden items-center'>
                        {myUser ? <button className='flex items-center gap-2'>
                            <HiUserRemove size='25px' onClick={() =>
                                logout({ returnTo: window.location.origin })} />
                        </button> :
                            <button className='flex items-center gap-2'>
                                < HiUserAdd size='25px' onClick={loginWithRedirect} />
                            </button>
                        }
                    </div>
                    {activeSearchBox ? <IoClose size='25px' className='cursor-pointer' onClick={() => setActiveSearchBox(!activeSearchBox)} />
                        : <BiSearch size='25px' className='cursor-pointer' onClick={() => setActiveSearchBox(!activeSearchBox)} />}
                    <BiCart size='25px' className='cursor-pointer' />
                </div>
            </header>
            <div className='sm:hidden'>{activeSearchBox && <Search />}</div>
            <nav className='sm:hidden fixed bottom-0 left-0 right-0 w-full z-10 bg-white shadow-xl rounded-t-3xl px-3'>
                <ul className='flex items-center justify-between px-12 py-4 text-lg'>
                    {NavList.map((item, index) => (
                        <li key={item.id}>
                            <NavLink to={item.link} onClick={() => setActiveNavList(item.id)}>
                                <i className={`${item.icon} ${index !== activeNavList ? 'text-slate-400' : 'bg-slate-900 text-white p-2 rounded-md'}`}></i>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default MobileNavbar;