import React from 'react'
import { parameterType } from '../pages/Home'

export interface parameterFilterType {
  title: string;
  filter: string;
  parameter: Array<parameterType>;
}

const ParameterFilter:React.FC<parameterFilterType> = ({title, filter, parameter}) => {
  
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
      }
    };
    
  }, []);

  return (
    <div className={`destinations ${filter === 'property' ? 'property' :''}`}>
      <div className="destinations__title">{title}</div>
      <ul ref={parameterRef} className="destinations__inner">
        {
          parameter.map((obj, i) => 
          <li key={i} className="destinations__block">         
            <img src={`/img/${filter}/${obj.engName}.png`} alt=""/>
            <p>{obj.ruName}</p>
          </li>)
        }
      </ul>
    </div>
  )
}

export default ParameterFilter
