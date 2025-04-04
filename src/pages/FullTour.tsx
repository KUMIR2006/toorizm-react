import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { Tour } from '../redux/tour/types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { categoriesList } from '../components/Categories'
import parse from 'html-react-parser';

const FullPizza: React.FC = () => {
  const {destination} = useParams()
  const [tourData, setTourData] = React.useState<Tour>(); 

  React.useEffect(() => {
    async function fetchTourData(){
      try {
        const {data} = await axios.get(`https://67ddc7a0471aaaa742828494.mockapi.io/items?destination=${destination}`)
        setTourData(data[0])
      } catch (error) {
        alert('Ошибка при получении тура')
      }
    }
    fetchTourData()
  }, []);


  if(!tourData ){
    return  (
    <div className="wrapper">
      <Header/>
        <h2 className="container fullTour">Загрузка...</h2>
      <Footer/>
    </div>
    )
  } 
  
  return (
    <div className="wrapper">
      <Header/>
        <div className="fullTour">
          <div className="fullTour__top">
            <img className="tour--img" src={tourData.imageUrl} alt="Тур" />
            <div className="fullTour__top--description">
              
              <h2 className="destination">{destination}</h2>
              
              <div className="main__info">
                <div className="city__date">
                  <div className="city">Город, Страна: {tourData.city}</div>
                  <div className="date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 23 23" fill="none">
                      <g>
                      <path d="M17.0736 4.17651H6.00333C3.96535 4.17651 2.31323 5.82863 2.31323 7.86661V17.0919C2.31323 19.1298 3.96535 20.7819 6.00333 20.7819H17.0736C19.1116 20.7819 20.7637 19.1298 20.7637 17.0919V7.86661C20.7637 5.82863 19.1116 4.17651 17.0736 4.17651Z" stroke="black" strokeWidth="2.21406" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.31323 9.71161H20.7637M7.84838 2.33142V6.02152V2.33142ZM15.2286 2.33142V6.02152V2.33142Z" stroke="black" strokeWidth="2.21406" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>
                    <p>{tourData.dateEntry} - {tourData.dateExit}</p>
                  </div>
                </div>
                <div className="rating">
                  <img width={35} height={35} src="/img/star.svg" alt="star" />
                  <div>{tourData.rating}</div>
                </div>
              </div>
              

              <div className="days">     
                <div className="days__inner">
                  <img width={40} height={40} style={{filter: "drop-shadow(0px 0px 7px #f8ea22)"}} src="/img/tourSvg/sun.png" alt="Дни" />
                  <p>Дней: {tourData.days}</p>
                </div>
                <div className="days__inner">
                  <img width={40} height={40} style={{filter: "drop-shadow(-2px 2px 7px #213775)"}} src="/img/tourSvg/moon.png" alt="Ночи" />
                  <p>Ночей: {tourData.days-1}</p>
                </div>
                
              </div>
              
              <div className="tourists">     
                <div className="tourists__inner">
                  <img width={40} height={40} src="/img/tourSvg/adult.png" alt="Взрослых" />
                  <p>Взрослых: {tourData.adultsCount}</p>
                </div>
                <div className="tourists__inner">
                  <img width={40} height={40} src="/img/tourSvg/child.png" alt="Ночи" />
                  <p>Детей: {tourData.childrenCount}</p>
                </div>
                
              </div>
            </div>
          </div>
          
          <div className="tour__info">
          <div className="tour__info--title"> Описание тура</div>
          <ul className="tour__info--inner">
                <li>
                  <img src="/img/tourSvg/flight.svg" alt="" />
                  <p>Перелёт</p>
                </li>
                <li>
                  <img src="/img/tourSvg/hotel.svg" alt="" />
                  <p>Отель</p>
                </li>
                <li>
                  <img src="/img/tourSvg/car.svg" alt="" />
                  <p>Трансфер</p>
                </li>
                <li>
                  <img src="/img/tourSvg/activity.svg" alt="" />
                  <p>Активности</p>
                </li>
                {
                  tourData.category.map((obj,i) => 
                  <li>
                    {parse(`
                      <svg  width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <rect opacity="1" width="35.4249" height="35.4249" fill="url(${categoriesList[obj].pattern})"/>
                        ${categoriesList[obj].defs}
                      </svg>
                    `)}
                    <p>{categoriesList[obj].ruName}</p>
                  </li>)
                }
              </ul>
          </div>
          
          <div className="fullTour__bottom">
            <ul className="features">
              <li>{tourData.features[0]}</li>
              <li>{tourData.features[1]}</li>
              <li>{tourData.features[2]}</li>
            </ul>

            <div className="book">
              <div className="book__button">
                Забронировать тур
              </div>
              <div className="price">
                <p>₽{tourData.price}</p>
                <div className="price__desc">
                  За человека
                </div>
              </div>
            </div>    
            
          </div>
          
        </div>
      <Footer/>
    </div>

  )
}

export default FullPizza


