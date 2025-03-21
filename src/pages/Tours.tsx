import React from 'react'
import TourBlock from '../components/TourBlock'

const Tours = () => {
  return (
    <div className="container">
      <div className='tours'>
        <div className="tours__title">Туры</div>
        <div className="tours__inner">
          {          
            [...Array(6)].map((obj, i) => 
              <TourBlock/>)
          }
        </div>
      </div>
    </div>
    
  )
}

export default Tours
