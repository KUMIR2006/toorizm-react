import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { setAdultsCount, setChildrenCount  } from '../../redux/filter/slice';

function getChildrenWord(amount: number){
  // Правила для склонения слова "ребёнок"
  if (amount === 1) {
    return " ребёнок";
  } else if (amount >= 2 && amount <= 4) {
    return " ребёнка";
  } else {
    return " детей";
  }
}

const TouristsPicker: React.FC = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const touristsRef = React.useRef<HTMLDivElement>(null);
  const { adultsCount, childrenCount } = useSelector(selectFilter)

  React.useEffect(() => {
    const handleClickOutside =( (event: MouseEvent) => {
      const path = (event.composedPath());
      if (touristsRef.current && !path.includes(touristsRef.current)) {
        setOpen(false);
      }
    })
    document.body.addEventListener('click', handleClickOutside )

    return () => {
      document.body.removeEventListener('click', handleClickOutside )
    }
  }, []);


  const onClickChild = (i: number) =>{
    dispatch(setChildrenCount(i))
  }
  const onClickAdult = (i: number) =>{
    dispatch(setAdultsCount(i))
  }


  return (
    <div className="touristsAmount" ref={touristsRef}>
      <div className='touristsAmount--title' onClick={() => setOpen(!open)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
          <path d="M13.7826 15.827C13.7255 15.052 13.7095 14.2744 13.7346 13.4977L13.7337 13.5318C14.4279 12.8122 14.8608 11.8806 14.9634 10.886L14.9652 10.8666C15.278 10.8408 15.7715 10.5364 15.9154 9.32971C15.9589 9.12189 15.9425 8.90602 15.8682 8.70714C15.7939 8.50825 15.6647 8.33451 15.4957 8.20607L15.4929 8.20423C16.0022 6.67284 17.0594 1.93475 13.5363 1.44581C13.1737 0.809273 12.2456 0.486389 11.039 0.486389C6.21141 0.574951 5.6293 4.13128 6.68466 8.20423C6.51426 8.33384 6.38428 8.50931 6.30995 8.71009C6.23562 8.91087 6.22 9.12867 6.26491 9.33801L6.26399 9.33063C6.4116 10.5354 6.90146 10.8417 7.21419 10.8676C7.32389 11.8732 7.77063 12.8122 8.48174 13.5318C8.50513 14.3222 8.48727 15.1132 8.42823 15.9018L8.43285 15.827C7.47527 18.3954 1.02867 17.6739 0.733459 22.627H21.4515C21.1545 17.6739 14.7374 18.3954 13.7816 15.827H13.7826Z" fill="rgb(217, 213, 212)"/>
        </svg>
        <p>
          {childrenCount === 0 ? "0 детей" : childrenCount + getChildrenWord(childrenCount)} <br/>
          {adultsCount === 1 ? " 1 взрослый" : ` ${adultsCount} взрослых`}
        </p>
      </div>

      {
        open && (
          <div className='touristsPicker'>
            <div className="children">
              <div className="touristsPicker__title">
                Детей
              </div>
              <ul>
                {          
                  [...Array(6)].map((obj, i) => 
                    <li 
                      key={i}
                      onClick={() => onClickChild(i)} 
                      className={
                        i === childrenCount ? "activeTouristsPicker" : ""
                      }>
                        {i} 
                    </li>)
                }
              </ul>
            </div>
            <div className="adults">
              <div className="touristsPicker__title">
                Взрослых
              </div>
              <ul>
                {          
                  [...Array(6)].map((obj,i) => 
                    <li 
                      key={i}
                      onClick={() => onClickAdult(i)} 
                      className={
                        i === adultsCount ? "activeTouristsPicker" : ""
                      }>
                        {i}
                    </li>)
                }
              </ul>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default TouristsPicker
