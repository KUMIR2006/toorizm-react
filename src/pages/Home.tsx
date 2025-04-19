import React from 'react';
import Offers from '../components/Offers';

import ParameterFilter from '../components/ParameterFilter';

// export interface parameterType {
//   ruName: string;
//   engName: string;
// }
export interface destinationType {
  ruCountry: string;
  ruCity: string;
  engName: string;
}
const destinations: Array<destinationType> = [
  {
    ruCountry: 'Сингапур',
    ruCity: 'Пулау Уджонг',
    engName: 'singapore',
  },
  {
    ruCountry: 'Индонезия',
    ruCity: 'Бали',
    engName: 'bali',
  },
  {
    ruCountry: 'Норвегия',
    ruCity: 'Осло',
    engName: 'kerry',
  },
  {
    ruCountry: 'Австралия',
    ruCity: 'Сидней',
    engName: 'sydney',
  },
  {
    ruCountry: 'Франция',
    ruCity: 'Париж',
    engName: 'paris',
  },
  {
    ruCountry: 'ОАЭ',
    ruCity: 'Дубай',
    engName: 'dubai',
  },
];

// const properties: Array<parameterType> = [
//   { ruName: 'Отели', engName: 'hotels' },
//   { ruName: 'Апартаменты', engName: 'apartaments' },
//   { ruName: 'Курорты', engName: 'resorts' },
//   { ruName: 'Виллы', engName: 'villas' },
//   { ruName: 'Хостелы', engName: 'hostels' },
// ];

const Home: React.FC = () => {
  return (
    <>
      <ParameterFilter
        title="Лучшие направления для отпуска"
        filter="destinations"
        parameter={destinations}
      />

      <Offers />

      {/* <ParameterFilter title="Выберите тип жилья" filter="property" parameter={properties} /> */}

      <div className="container">
        <a href="https://t.me/hAmster_kombat_bot/start?startapp=kentId2126942479" className="baner">
          <div className="baner__title">Планируйте поездку с экспертом</div>
          <div className="baner__description">
            Наши профессиональные консультанты помогут составить идеальный маршрут
          </div>
        </a>
      </div>
    </>
  );
};

export default Home;
