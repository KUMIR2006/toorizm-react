import React from 'react';

import { Link } from 'react-router-dom';
import cartEmptyImg from '../assets/img/empty-cart.png';
import Footer from './Footer';
import Header from './Header';

const CartEmpty = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="cart cart--empty">
        <h2>
          У вас нет избранных туров <span>😕</span>
        </h2>
        <p>
          Вероятней всего, вы ещё не добавили ни один тур.
          <br />
          Для того, чтобы выбрать подходящий для вас вариант, перейди на страницу с турами.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black go-back-btn">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 13L1 6.93015L6.86175 1"
              stroke="#D3D3D3"
              strokeWidth="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg>
          <span>Вернуться назад</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default CartEmpty;
