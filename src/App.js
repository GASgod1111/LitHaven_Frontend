import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Browse from './components/Browse';
import Premium from './components/Premium';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import Book from './components/Book';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
