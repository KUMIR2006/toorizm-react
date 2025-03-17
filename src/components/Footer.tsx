import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
    <div className="container">
      <div className="footer__logo">Toorizm.</div>
      <div className="footer__dev"> 
        <div className="footer__dev--button">GitHub</div>
        <div className="footer__dev--text">© 1997-2021 Netflix, Inc.  i-062d573a0ee099242</div>
      </div>
      <ul className="footer__links">
        <li>
          <a href="">Главная</a>
        </li>
        <li>
          <a href="">Проживание</a>
        </li>
        <li>
          <a href="">Авиабилеты</a>
        </li>
        <li>
          <a href="">Пакеты</a>
        </li>
      </ul>
      <ul className="footer__social">
        <li>
          <img src="/img/socials/facebook.svg" alt="facebook"/>
        </li>
        <li>
          <img src="/img/socials/twitter.svg" alt="twitter"/>
        </li>
        <li>
          <img src="/img/socials/instagram.svg" alt="instagram"/>
        </li>
        <li>
          <img src="/img/socials/youtube.svg" alt="youtube"/>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Footer
