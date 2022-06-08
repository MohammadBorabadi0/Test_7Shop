import React from 'react';
import Navbar from '../components/Navbar';

const LayoutDetail = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default LayoutDetail;