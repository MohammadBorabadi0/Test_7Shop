import React, { useState } from 'react';

// Context 
import { useUserContext } from '../Providers/context/user_context';

// Icons 
import { FaBars } from 'react-icons/fa';
import { BiSearch, BiHeart, BiCart } from 'react-icons/bi';
import { HiUserRemove, HiUserAdd } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

// ReactRouterDom 
import { Link, NavLink, useNavigate } from 'react-router-dom';

// Components 
import Search from './Search';
import { useCart } from '../Providers/context/cart_context';
import HamburgerMenu from './HamburgerMenu';
import { useFilter } from '../Providers/context/filter_context';
import { CLEAR_SEARCH_BOX } from '../actions';


const NavList = [
    { id: 0, icon: 'fa-solid fa-house', link: '/' },
    { id: 1, icon: 'fa-solid fa-heart', link: '/favorites' },
    { id: 2, icon: 'fa-solid fa-cart-shopping', link: '/cart' },
    { id: 3, icon: 'fa-solid fa-user', link: '/profile' }
]

const MobileNavbar = () => {
    const { numberOfAmounts } = useCart();
    const { dispatch } = useFilter();
    const { loginWithRedirect, myUser, logout } = useUserContext();

    // useState 
    const [activeSearchBox, setActiveSearchBox] = useState(false);
    const [activeHamburgerMenu, setActiveHamburgerMenu] = useState(false);
    const currentPathname = window.location.pathname;
    const navigate = useNavigate();

    const handleToggle = () => {
        setActiveSearchBox(!activeSearchBox);
        dispatch({ type: CLEAR_SEARCH_BOX });
    }

    return (
        <>
            {/* 0-640px */}
            <header className='flex md:hidden sticky bg-primary top-0 py-4 px-4 mb-5 items-center justify-between text-xl font-bold'>
                <span className='cursor-pointer'>
                    <FaBars onClick={() => setActiveHamburgerMenu(true)} />
                    {activeHamburgerMenu ?
                        <HamburgerMenu
                            activeHamburgerMenu={activeHamburgerMenu}
                            setActiveHamburgerMenu={setActiveHamburgerMenu} /> : null}
                </span>
                <Link to='/'>
                    <h2 className='text-2xl font-semibold cursor-pointer'><span className='text-orange-500 border-b-2 border-orange-500'>7</span>Shop</h2>
                </Link>
                <div className='flex items-center gap-3'>
                    <section className='hidden sm:flex items-center gap-3'>
                        <button onClick={() => navigate('/favorites')}>
                            <BiHeart size='25px' />
                        </button>
                        <div className='flex md:hidden items-center'>
                            {myUser ? <button className='flex items-center gap-2'>
                                <HiUserRemove size='25px' onClick={() =>
                                    logout({ returnTo: window.location.origin })} />
                            </button> :
                                <button className='flex items-center gap-2'>
                                    < HiUserAdd size='25px' onClick={loginWithRedirect} />
                                </button>
                            }
                        </div>
                    </section>
                    {currentPathname === '/' ? !activeSearchBox ? <BiSearch size='25px' className='cursor-pointer' onClick={handleToggle} /> :
                        <IoClose size='25px' className='cursor-pointer' onClick={handleToggle} /> : null}
                    <span onClick={() => navigate('/cart')} className='block cursor-pointer relative'>
                        <BiCart size='25px' />
                        <span className='absolute top-[-10px] right-[-13px] bg-red-700 text-white px-1.5 rounded-md text-sm'>{numberOfAmounts === 0 ? null : numberOfAmounts}</span>
                    </span>
                </div>
            </header>
            <div className='sm:hidden'>{activeSearchBox ? <Search /> : null}</div>
            <nav className='sm:hidden fixed bottom-0 left-0 right-0 w-full z-10 bg-white shadow-xl rounded-t-3xl px-3'>
                <ul className='flex items-center justify-around px-12 py-3 text-lg'>
                    {NavList.map((item, index) => (
                        <li key={item.id}>
                            <NavLink className={(navData) => navData.isActive ? 'bg-slate-900 text-white rounded-md' : null} to={item.link}>
                                <i className={`${item.icon} p-1 text-base`}></i>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default MobileNavbar;
