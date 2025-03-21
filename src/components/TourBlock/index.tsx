import React from 'react'

const TourBlock = () => {
  return (
    <div className="tour">

            <img className="tour__img" src="/img/destinations/kerry.png" alt="" />

            <div className="tour__title">
              <div className="tour__title--destination">
                <h2>Swiss Apls</h2>
                <div className="rating">
                  <img src="/img/star.svg" alt="star" />
                  <div>4.7</div>
                </div>
              </div>
              <p className="tour__title--duration">3 Days 4 Nights</p>
            </div>
    
            <ul className="tour__info">
              <li>
                <img src="/img/tourSvg/flight.svg" alt="" />
                <div className="p">2 Flights</div>
              </li>
              <li>
                <img src="/img/tourSvg/hotel.svg" alt="" />
                <div className="p">1 Hotel</div>
              </li>
              <li>
                <img src="/img/tourSvg/car.svg" alt="" />
                <div className="p">2 Transfers</div>
              </li>
              <li>
                <img src="/img/tourSvg/activity.svg" alt="" />
                <div className="p">4 Activities</div>
              </li>
            </ul>
            
            <ul className="tour__features">
              <li>Tour combo with return airport transfer</li>
              <li>City Tour</li>
              <li>Curious Corner</li>
            </ul>


            <div className="tour__price">
              
              <p>₹88,952</p>
              <div className="tour__price--desc">
                Per person
              </div>
            </div>


          </div>
  )
}

export default TourBlock
