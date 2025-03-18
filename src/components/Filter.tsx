import React from 'react'
import CheckIn from './CheckIn'
import Search from './Search'

const Filter = () => {
  
  return (
    <div className="container">
      <div className="filter">
        <div className="filter__title">Весь мир ждёт вас.</div>
        <div className="filter__block">

          <Search/>
         
          <CheckIn check='in'/>
          <CheckIn check='out'/>
          {/* <div className="checkOut-In">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <g opacity="0.7">
              <path d="M17.0736 4.17651H6.00333C3.96535 4.17651 2.31323 5.82863 2.31323 7.86661V17.0919C2.31323 19.1298 3.96535 20.7819 6.00333 20.7819H17.0736C19.1116 20.7819 20.7637 19.1298 20.7637 17.0919V7.86661C20.7637 5.82863 19.1116 4.17651 17.0736 4.17651Z" stroke="white" strokeWidth="2.21406" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.31323 9.71161H20.7637M7.84838 2.33142V6.02152V2.33142ZM15.2286 2.33142V6.02152V2.33142Z" stroke="white" strokeWidth="2.21406" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            </svg>
            <p>Дата выезда</p>
          </div> */}

          <div className="touristsAmount">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
              <path d="M13.7826 15.827C13.7255 15.052 13.7095 14.2744 13.7346 13.4977L13.7337 13.5318C14.4279 12.8122 14.8608 11.8806 14.9634 10.886L14.9652 10.8666C15.278 10.8408 15.7715 10.5364 15.9154 9.32971C15.9589 9.12189 15.9425 8.90602 15.8682 8.70714C15.7939 8.50825 15.6647 8.33451 15.4957 8.20607L15.4929 8.20423C16.0022 6.67284 17.0594 1.93475 13.5363 1.44581C13.1737 0.809273 12.2456 0.486389 11.039 0.486389C6.21141 0.574951 5.6293 4.13128 6.68466 8.20423C6.51426 8.33384 6.38428 8.50931 6.30995 8.71009C6.23562 8.91087 6.22 9.12867 6.26491 9.33801L6.26399 9.33063C6.4116 10.5354 6.90146 10.8417 7.21419 10.8676C7.32389 11.8732 7.77063 12.8122 8.48174 13.5318C8.50513 14.3222 8.48727 15.1132 8.42823 15.9018L8.43285 15.827C7.47527 18.3954 1.02867 17.6739 0.733459 22.627H21.4515C21.1545 17.6739 14.7374 18.3954 13.7816 15.827H13.7826Z" fill="rgb(217, 213, 212)"/>
            </svg>
            <p>1 ребёнок, 2 взрослых</p>
          </div>
          <button className="search-button">Поиск</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
