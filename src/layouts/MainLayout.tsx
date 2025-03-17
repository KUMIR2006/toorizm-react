import React from 'react'
import { Outlet } from 'react-router'
import Categories from '../components/Categories'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Header from '../components/Header'

const MainLayout:React.FC = () => {
  return (
      <div className="wrapper">
        <Header/>
        <Filter/>
        <Categories/>
        <Footer/>
      </div>)
}

export default MainLayout
