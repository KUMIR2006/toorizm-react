import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Sign from './components/Sign';

import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Cart from './pages/Cart';
import FullTour from './pages/FullTour';
import Home from './pages/Home';
import Tours from './pages/Tours';
import './scss/app.scss';
import Profile from './components/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="tours" element={<Tours />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="sign" element={<Sign />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="tour/:destination" element={<FullTour />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
