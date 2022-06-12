import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// Toastify 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aboutus from './components/Aboutus';

// Components 
import AllProducts from './components/AllProducts';
import Checkout from './components/Checkout';
import DetailProduct from './components/DetailProduct';
import FavoriteList from './components/FavoriteList';
import Payment from './components/Payment';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import CartPage from './Pages/CartPage';

const App = () => {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/' element={<AllProducts />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='profile' element={<Profile />} />
        <Route path='favorites' element={<FavoriteList />} />
        <Route path='product/:id' element={<DetailProduct />} />
        <Route path='checkout' element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>} />
        <Route path='payment' element={
          <PrivateRoute>
            <Payment />
          </PrivateRoute>} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
};

export default App;