import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components 
import AllProducts from './components/AllProducts';
import FavoritedProducts from './components/FavoritedProducts';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/favorites' element={<FavoritedProducts />} />
        <Route path='/' element={<AllProducts />} />
      </Routes>
    </>
  );
};

export default App;