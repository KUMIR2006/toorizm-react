import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
        <div className="header__logo">
          <p>toorizm.</p>
        </div>
      </Link>
      <div className="header__navigation">
        <ul>
          <li className="active">Главная</li>
          <li>Проживание</li>
          <li>Авиабилеты</li>
          <li>Пакеты</li>
        </ul>        
        <a className="header__navigation--signup">
          <p>Регистрация</p>
        </a>
      </div>
    </div>
  )
}

export default Header
