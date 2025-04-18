import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectFilter } from '../redux/filter/selectors';
import { resetState, setChanged } from '../redux/filter/slice';
import { selectNavigation } from '../redux/navigation/selectors';
import { setNavId } from '../redux/navigation/slice';
import { pages } from './Header';

const Footer: React.FC = () => {
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
    <div className="footer">
      <div className="container">
        {/* <div className="footer__logo" onClick={() => onClickReset()}>
          Via Appia.
        </div> */}
        <img
          onClick={() => onClickReset()}
          className="footer__logo"
          src="/img/logo.png"
          width={100}
          height={100}
          alt=""
        />
        <div className="footer__dev">
          <div className="footer__dev--button">GitHub</div>
          <div className="footer__dev--text">© 1997-2021 Netflix, Inc. i-062d573a0ee099242</div>
        </div>
        <ul className="footer__links">
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
        <ul className="footer__social">
          <li>
            <img src="/img/socials/facebook.svg" alt="facebook" />
          </li>
          <li>
            <img src="/img/socials/twitter.svg" alt="twitter" />
          </li>
          <li>
            <img src="/img/socials/instagram.svg" alt="instagram" />
          </li>
          <li>
            <img src="/img/socials/youtube.svg" alt="youtube" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
