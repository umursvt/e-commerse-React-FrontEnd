import React from 'react';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/register';
import CartPage from './pages/CartPage';
import LikesPage from './pages/LikesPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/likes" element={<LikesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
