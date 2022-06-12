import React from 'react';

// React-Router-Dom 
import { Link, useNavigate } from 'react-router-dom';

// Icons 
import { FiChevronLeft } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { BsFillTrashFill } from 'react-icons/bs';

// Context 
import { useCart } from '../Providers/context/cart_context';
import { DECREASE, INCREASE, REMOVE_FROM_CART } from '../actions';
import { useUserContext } from '../Providers/context/user_context';


const MobileCart = () => {
    const { cart, dispatch, total } = useCart();
    const { myUser, loginWithRedirect } = useUserContext();
    const navigate = useNavigate();

    const menu = (
        <section className='flex mb-8'>
            <span className='cursor-pointer' onClick={() => navigate('/')}>
                <FiChevronLeft size='25px' />
            </span>
            <div className='text-center flex-1 text-xl text-slate-900 font-semibold'>
                <h2>My Cart</h2>
            </div>
        </section>
    )

    if (!cart.length) {
        return (
            <div className='flex flex-col sm:hidden pt-10 gap-4 px-3'>
                {menu}
                <section className='flex flex-col gap-4'>
                    <div className='flex justify-center'>
                        <img src="../images/basket.svg" alt="basket" className='w-28' />
                    </div>
                    <div className='flex justify-center'>
                        <h3 className='text-lg font-medium'>Your shopping cart is empty !</h3>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <h4>For add product to the cart, you can go to the page below</h4>
                        <Link to='/' className='px-4 py-1 bg-orange-500 text-white rounded-md text-lg'>Home</Link>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className='flex flex-col gap-10 sm:hidden py-10 px-3 bg-primary'>
            {menu}
            <section className='flex flex-col gap-3'>
                {cart.map(item => (
                    <div key={item.id} className='flex items-center justify-between bg-white px-2 py-3 rounded-md'>
                        <div className='flex items-center gap-4'>
                            <div className='bg-red-200 rounded-xl'>
                                <img src={item.imageURL} alt={item.name} className='w-14' />
                            </div>
                            <div className='flex flex-col font-medium text-sm'>
                                <h4>{item.name}</h4>
                                <span className='text-gray-500'>Size : {item.size}</span>
                                <span className='font-bold text-lg'>${item.price}</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <span className='flex justify-end pr-1.5'>
                                <IoClose size='22px' className='cursor-pointer' onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: item })} />
                            </span>
                            <div className='flex gap-3'>
                                <button className='p-2 rounded-full text-orange-500 border border-orange-500'
                                    onClick={item.quantity === 1 ? () => dispatch({ type: REMOVE_FROM_CART, payload: item }) : () => { dispatch({ type: DECREASE, payload: item }) }}>{item.quantity === 1 ? <BsFillTrashFill size='15px' className='text-orange-500' /> : <BiMinus />}</button>
                                <span className='pt-1'>{item.quantity}</span>
                                <button className='p-2 bg-orange-500 text-white rounded-full text-lg'
                                    onClick={() => dispatch({ type: INCREASE, payload: item })}>
                                    <BiPlus />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <section className='flex flex-col bg-white shadow-md rounded-lg p-3 lg:px-4 h-fit'>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h2 className='font-semibold text-lg'>Order Summary</h2>
                    </div>
                    <div className='flex items-center border rounded-md pl-2 w-full sm:w-fit lg:w-full'>
                        <input type='text' placeholder='Enter your promo code'
                            className='flex-1 focus:outline-none font-medium' />
                        <button className='bg-blue-600 border border-blue-600 text-white cursor-pointer rounded-md px-2 py-1.5'>Apply</button>
                    </div>
                    <div className='flex justify-between items-center font-medium text-lg'>
                        <p>SubTotal</p>
                        <span>${total}</span>
                    </div>
                    <div className='flex items-center justify-between text-slate-500 text-sm'>
                        <p>Discount</p>
                        <span>0</span>
                    </div>
                    <hr />
                    <div className='flex items-center justify-between text-xl font-semibold'>
                        <p>Total :</p>
                        <span>${total}</span>
                    </div>
                    <div className='flex flex-col gap-3'>
                        {myUser ? <Link className='bg-orange-500 py-1.5 rounded-md text-white font-medium text-center w-full' to='/checkout'>Proceed to checkout</Link> :
                            <button className='bg-orange-500 py-1.5 rounded-md text-white font-medium text-center w-full' onClick={loginWithRedirect}>Login</button>}
                        <Link className='bg-blue-500 py-1.5 rounded-md text-white font-medium text-center' to='/'>
                            Coninue shopping
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileCart;