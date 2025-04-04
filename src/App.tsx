import React from 'react';
import {Routes, Route} from 'react-router-dom';


import MainLayout from './layouts/MainLayout'
import FullTour from './pages/FullTour';
import Home from './pages/Home';
import Tours from './pages/Tours';
import './scss/app.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="tours" element={<Tours/>}/>
      </Route>
      <Route path="tour/:destination" element={<FullTour/>} />
    </Routes>
  );
}

export default App;
