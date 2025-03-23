import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { selectFilter } from '../redux/filter/selectors'
import { useNavigate } from 'react-router-dom' 

import Categories from '../components/Categories'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Header from '../components/Header'


const MainLayout:React.FC = () => {
    const navigate = useNavigate()
    const { searchValue, categoryId, adultsCount, childrenCount, checkIn, checkOut } = useSelector(selectFilter)
    const isMounted = React.useRef(false)
    
    React.useEffect(() => {
      if (isMounted.current){
        navigate('/tours');
      }
      isMounted.current = true;
    }, [categoryId, searchValue, adultsCount, childrenCount, checkIn, checkOut]);

  return (
      <div className="wrapper">
        <Header/>
        <Filter/>
        <Categories/>
        <Outlet/>
        <Footer/>
      </div>)
}

export default MainLayout
