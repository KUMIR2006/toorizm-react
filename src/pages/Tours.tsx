import React from 'react'
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { fetchTours } from '../redux/tour/asyncActions';

import TourBlock from '../components/TourBlock'
import { selectToursData } from '../redux/tour/selectors';

const Tours = () => {
  const dispatch = useAppDispatch()
  const {
    categoryId, 
    searchValue,
    checkIn,
    checkOut,
    childrenCount,
    adultsCount 
  } = useSelector(selectFilter)
  const { items, status } = useSelector(selectToursData)

  const getTours = async () => {

    const adults = adultsCount !== 0 ? `&adultsCount=${adultsCount}` : ''
    const children = childrenCount !== 0 ? `&childrenCount=${childrenCount}` : ''
    const category =  categoryId !== 0 ? `&category=${categoryId}` : ''
    const search =  searchValue ? `&search=${searchValue}` : ''


    dispatch(
      fetchTours({
        adults, 
        children, 
        category, 
        search
    }))
}

React.useEffect(() => {
  getTours();
}, [adultsCount, childrenCount, searchValue, categoryId])

  return (
    <div className="container">
      <div className='tours'>
        <div className="tours__title">Туры</div>
        <div className="tours__inner">
          {          
            items.map((obj, i) => 
              <TourBlock
                key={i} 
                {...obj}
              />)
          }
        </div>
      </div>
    </div>
    
  )
}

export default Tours