import './App.css';

import React, {Suspense, lazy} from 'react';

import ProductList from './components/ProductList';
// import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const Cart = lazy(() => import('./components/Cart'));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<Default />} />
        </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
