import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFilter } from '../redux/filter/selectors';
import { setNavId } from '../redux/navigation/slice';
import CheckIn from './CheckIn';
import Search from './Search';
import TouristsPicker from './TouristsPicker';

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="filter">
        <div className="filter__title">Весь мир ждёт вас.</div>
        <div className="filter__block">
          <Search />

          <CheckIn check="in" />
          <CheckIn check="out" />

          <TouristsPicker />
          <Link to="/tours" onClick={() => dispatch(setNavId(1))}>
            <button className="search-button">Поиск</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Filter;
