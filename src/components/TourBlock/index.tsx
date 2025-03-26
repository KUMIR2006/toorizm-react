import React from 'react'
import { Tour } from '../../redux/tour/types'

const TourBlock: React.FC<Tour> = ({  imageUrl, destination, days, info, features, price, rating, category, adultsCount, childrenCount}) => {
  return (
    <div className="tour">

            <img className="tour__img" src={imageUrl} alt="" />

            <div className="tour__title">
              <div className="tour__title--destination">
                <h2>{destination}</h2>
                <div className="rating">
                  <img src="/img/star.svg" alt="star" />
                  <div>{rating}</div>
                </div>
              </div>
              <p className="tour__title--duration">{days} Дней {days-1} Ночей</p>
            </div>
    
            <ul className="tour__info">
              <li>
                <img src="/img/tourSvg/flight.svg" alt="" />
                <div className="p">{info[0]} Перелёта</div>
              </li>
              <li>
                <img src="/img/tourSvg/hotel.svg" alt="" />
                <div className="p">{info[1]} Отель</div>
              </li>
              <li>
                <img src="/img/tourSvg/car.svg" alt="" />
                <div className="p">{info[2]} Трансфера</div>
              </li>
              <li>
                <img src="/img/tourSvg/activity.svg" alt="" />
                <div className="p">{info[3]} Активности</div>
              </li>
            </ul>
            
            <ul className="tour__features">
              <li>{features[0]}</li>
              <li>{features[1]}</li>
              <li>{features[2]}</li>
            </ul>


            <div className="tour__price">
              
              <p>₽{price}</p>
              <div className="tour__price--desc">
                Per person
              </div>
            </div>


          </div>
  )
}

export default TourBlock
