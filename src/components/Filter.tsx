import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from '../redux/filter/selectors';
import CheckIn from './CheckIn';
import Search from './Search';
import TouristsPicker from './TouristsPicker';

const Filter = () => {
  return (
    <div className="container">
      <div className="filter">
        <div className="filter__title">Весь мир ждёт вас.</div>
        <div className="filter__block">
          <Search />

          <CheckIn check="in" />
          <CheckIn check="out" />

          <TouristsPicker />
          <button className="search-button">Поиск</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
