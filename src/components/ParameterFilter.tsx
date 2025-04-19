import React from 'react';
import { useDispatch } from 'react-redux';
import { destinationType } from '../pages/Home';
import { setSearchValue } from '../redux/filter/slice';
import { setNavId } from '../redux/navigation/slice';

export interface parameterFilterType {
  title: string;
  filter: string;
  parameter: Array<destinationType>;
}

const ParameterFilter: React.FC<parameterFilterType> = ({ title, filter, parameter }) => {
  const dispatch = useDispatch();
  const parameterRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const scrollContainer = parameterRef.current;

    if (scrollContainer) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY * 5;
      };

      scrollContainer.addEventListener('wheel', handleWheel);

      return () => {
        scrollContainer.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  const onClickDestination = (obj: destinationType) => {
    dispatch(setSearchValue(obj.ruCity));
    dispatch(setNavId(1));
  };

  return (
    <div className={`destinations ${filter === 'property' ? 'property' : ''}`}>
      <div className="destinations__title">{title}</div>
      <ul ref={parameterRef} className="destinations__inner">
        {parameter.map((obj, i) => (
          <li onClick={() => onClickDestination(obj)} key={i} className="destinations__block">
            <img src={`/img/${filter}/${obj.engName}.png`} alt="" />
            <p>{obj.ruCountry + ', ' + obj.ruCity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParameterFilter;
