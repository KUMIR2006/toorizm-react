import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { selectNavigation } from '../redux/navigation/selectors';
import { setNavId } from '../redux/navigation/slice';
import { resetState, setChanged } from '../redux/filter/slice';
import { selectFilter } from '../redux/filter/selectors';
import { selectAuth } from '../redux/auth/selectors';
export const pages = [
  { name: 'Главная', path: '/' },
  { name: 'Туры', path: '/tours' },
  { name: 'Избранное', path: '/cart' },
  { name: 'О нас', path: '/about' },
  { name: 'Регистрация', path: '/auth/sign' },
];
const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { navigationId } = useSelector(selectNavigation);
  const { authStatus } = useSelector(selectAuth);
  const { changed } = useSelector(selectFilter);
  const navigate = useNavigate();

  const onClickReset = async () => {
    dispatch(setNavId(0));

    if (changed) {
      await dispatch(resetState());
    } else {
      await dispatch(resetState());
      await dispatch(setChanged());
    }

    navigate('/');
  };

  const onClickCategory = (i: number) => {
    if (i === 0) {
      onClickReset();
      return;
    }
    dispatch(setNavId(i));
  };

  return (
    <div className="header">
      <div onClick={() => onClickReset()} className="header__logo">
        {/* <img
          className="footer__logo"
          src="/img/logo.png"
          width={45}
          height={45}
          style={{}}
          alt=""
        /> */}
        <p>Toorizm.</p>
      </div>

      <div className="header__navigation">
        <ul key={`${navigationId} + ${authStatus}`}>
          {pages.map((page, i) => (
            <Link to={i !== 4 ? page.path : authStatus === true ? '/auth/profile' : page.path}>
              <li
                key={i}
                onClick={() => onClickCategory(i)}
                className={` ${navigationId === i ? 'active' : ''} ${
                  i === 4 ? 'header__navigation--signup' : ''
                } `}>
                {i !== 4 ? page.name : authStatus === true ? 'Профиль' : page.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
