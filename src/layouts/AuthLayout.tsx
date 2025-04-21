import React from 'react';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

import Footer from '../components/Footer';
import Header from '../components/Header';

const AuthLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};

export default AuthLayout;
