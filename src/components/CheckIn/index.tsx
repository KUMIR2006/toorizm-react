import React from 'react'
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

import { format } from "date-fns";
import { useDispatch, useSelector } from 'react-redux';
import { setCheckIn } from '../../redux/filter/slice';

const CheckIn: React.FC = () => {
  const dispatch = useDispatch()
  const [openCheckIn, setOpenCheckIn] = React.useState(false);
  const [selected, setSelected] = React.useState<Date>();
  const checkInRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const handleClickOutside =( (event: MouseEvent) => {
      const path = (event.composedPath());
      if (checkInRef.current && !path.includes(checkInRef.current)) {
        setOpenCheckIn(false);
      }
    })
    document.body.addEventListener('click', handleClickOutside )

    return () => {
      document.body.removeEventListener('click', handleClickOutside )
    }
  }, []);


  React.useEffect(() => {
    if (selected != undefined){
      dispatch(setCheckIn (selected.toLocaleDateString('en-US')));
    }

  },[selected]);

  return (
    <div ref={checkInRef} className="checkOut-In">
      <div className="checkOut-In__title" onClick={() => setOpenCheckIn(!openCheckIn)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
          <g opacity="0.7">
          <path d="M17.0736 4.17651H6.00333C3.96535 4.17651 2.31323 5.82863 2.31323 7.86661V17.0919C2.31323 19.1298 3.96535 20.7819 6.00333 20.7819H17.0736C19.1116 20.7819 20.7637 19.1298 20.7637 17.0919V7.86661C20.7637 5.82863 19.1116 4.17651 17.0736 4.17651Z" stroke="white" strokeWidth="2.21406" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.31323 9.71161H20.7637M7.84838 2.33142V6.02152V2.33142ZM15.2286 2.33142V6.02152V2.33142Z" stroke="white" strokeWidth="2.21406" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>

        <p>{selected === undefined ? "Дата заезда" : selected.toLocaleDateString('en-US')}</p>
      </div>
      {
        openCheckIn && (
          <div className='dayPicker'>
            <DayPicker
              animate
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={
                selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
              }
            />
          </div>
        )
      }
    </div>
)
}
export default CheckIn
