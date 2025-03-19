import React from 'react'
import Offers from '../components/Offers'

import ParameterFilter from '../components/ParameterFilter'

export interface parameterType {
  ruName: string;
  engName: string;
}

const destinations:Array<parameterType> = [
  {ruName:"Сингапур, Пулау Уджонг", engName:"singapore"},
  {ruName:"Бали, Индонезия", engName:"bali"},
  {ruName:"Керри, Ирландия", engName:"kerry"},
  {ruName:"Сидней, Австралия", engName:"sydney"},
  {ruName:"Париж, Франция", engName:"paris"},
  {ruName:"Дубай, ОАЭ", engName:"dubai"},
]

const properties:Array<parameterType> = [
  {ruName:"Отели", engName:"hotels"},
  {ruName:"Апартаменты", engName:"apartaments"},
  {ruName:"Курорты", engName:"resorts"},
  {ruName:"Виллы", engName:"villas"},
  {ruName:"Хостелы", engName:"hostels"},
]

const Home:React.FC = () => {
  return (
    <>
    <ParameterFilter 
      title='Лучшие направления для отпуска'
      filter='destinations'
      parameter={destinations}/>

    <Offers/>
    
    <ParameterFilter 
      title='Выберите тип жилья'
      filter='property'
      parameter={properties}/>

    <div className="container">
      <div className="baner">
        <div className="baner__title">
          Планируйте поездку с экспертом
        </div>
        <div className="baner__description">
          Наши профессиональные консультанты помогут составить идеальный маршрут
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
