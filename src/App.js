import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Toastify 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components 
import AllProducts from './components/AllProducts';
import DetailProduct from './components/DetailProduct';
import FavoriteList from './components/FavoriteList';
import Profile from './components/Profile';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/favorites' element={<FavoriteList />} />
        <Route path='/product/:id' element={<DetailProduct />} />
        <Route path='/' element={<AllProducts />} />
      </Routes>
    </>
  );
};

export default App;