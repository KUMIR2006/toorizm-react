import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { selectNavigation } from '../redux/navigation/selectors';
import { setNavId } from '../redux/navigation/slice';
import { resetState, setChanged } from '../redux/filter/slice';
import { selectFilter } from '../redux/filter/selectors';
export const pages = [
  { name: 'Главная', path: '/' },
  { name: 'Туры', path: '/tours' },
  { name: 'Избранное', path: '/cart' },
  { name: 'О нас', path: '/about' },
];
const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { navigationId } = useSelector(selectNavigation);
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
    dispatch(setNavId(i));
    if (i === 0) {
      onClickReset();
    }
  };

  return (
    <div className="header">
      <div onClick={() => onClickReset()} className="header__logo">
        <p>Via Appia.</p>
      </div>

      <div className="header__navigation">
        <ul>
          {pages.map((page, i) => (
            <Link to={page.path}>
              <li
                key={i}
                onClick={() => onClickCategory(i)}
                className={navigationId === i ? 'active' : ''}>
                {page.name}
              </li>
            </Link>
          ))}
        </ul>
        <a className="header__navigation--signup">
          <p>Регистрация</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
