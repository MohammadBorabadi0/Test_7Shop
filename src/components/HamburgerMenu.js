import React from 'react';

// React-Router-Dom 
import { Link, useNavigate } from 'react-router-dom';

// Icons 
import { MdClose } from 'react-icons/md';
import { useUserContext } from '../Providers/context/user_context';

const HamburgerMenu = ({ activeHamburgerMenu, setActiveHamburgerMenu }) => {
    const { myUser, loginWithRedirect, logout } = useUserContext();

    return (
        <nav className='fixed inset-0 animate-navbar bg-primary z-10 p-4'>
            <div className='flex items-center justify-between pb-4 mb-4 border-b'>
                <Link to='/'>
                    <h2 className='text-2xl font-semibold cursor-pointer'><span className='text-orange-500 border-b-2 border-orange-500'>7</span>Shop</h2>
                </Link>
                <button onClick={() => setActiveHamburgerMenu(false)}>
                    <MdClose size='30px' />
                </button>
            </div>
            <ul className='flex flex-col gap-2 text-lg font-medium'>
                <li className='w-full'>
                    <Link to='/' className='hover:text-orange-500 transition-colors duration-100 block'>Home</Link>
                </li>
                <li className='w-full'>
                    <Link to='/favorites' className='hover:text-orange-500 transition-colors duration-100 block'>Favorites</Link>
                </li>
                <li className='w-full'>
                    <Link to='/aboutus' className='hover:text-orange-500 transition-colors duration-100 block'>About Us</Link>
                </li>
                {
                    myUser ? <button className='w-full block text-left text-lg font-medium hover:text-orange-500 transition-colors duration-100' onClick={() =>
                        logout({ returnTo: window.location.origin })}>Logout</button> :
                        <button className='w-full block text-lg font-medium hover:text-orange-500 transition-colors duration-100' onClick={loginWithRedirect}>Login</button>
                }
                {
                    myUser &&
                    <li className='w-full'>
                        <Link to='/checkout' className='block hover:text-orange-500 transition-colors duration-100'>Checkout</Link>
                    </li>
                }
            </ul>
        </nav>
    );
};

export default HamburgerMenu;