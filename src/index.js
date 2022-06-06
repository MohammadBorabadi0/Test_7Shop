import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tw-elements';
import { BrowserRouter } from 'react-router-dom';

import { Auth0Provider } from "@auth0/auth0-react";
import ProductsProvider from './Providers/context/products_context';
import FilterProvider from './Providers/context/filter_context';
import UserProvider from './Providers/context/user_context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-b5mz3as7.us.auth0.com"
    clientId="c0N25XxHzKn9pvNXohKdeejppnuSXSm4"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);