import React from 'react'
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { fetchTours } from '../redux/tour/asyncActions';

import TourBlock from '../components/TourBlock'
import { selectToursData } from '../redux/tour/selectors';
import { Tour } from '../redux/tour/types';

const Tours = () => {
  const dispatch = useAppDispatch()
  const {
    categoryId, 
    searchValue,
    checkIn,
    checkOut,
    childrenCount,
    adultsCount 
  } = useSelector(selectFilter)
  const { items, status } = useSelector(selectToursData)


  const parseDate = (dateString: string): Date => {
    const [month, day, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day);
  };

  // Функция фильтрации
  const filterToursByDate = (): Tour[] => {
    return items.filter(tour => {
      const tourEntry = parseDate(tour.dateEntry);
      const tourExit = parseDate(tour.dateExit);

      // Проверяем, что период тура полностью входит в выбранный диапазон
      if (checkIn!=null && checkOut!=null){
        return tourEntry >= checkIn && tourExit <= checkOut;
      }
      else if (checkIn!=null && checkOut==null) {
        return tourEntry >= checkIn;
      }
      else if (checkIn==null && checkOut!=null) {
        return tourExit <= checkOut;
      }
      else {
        return checkOut===checkIn
      }


    });
  };

  // Получаем данные о турах
  const getTours = async () => {

    const adults = adultsCount !== 0 ? `&adultsCount=${adultsCount}` : ''
    const children = childrenCount !== 0 ? `&childrenCount=${childrenCount}` : ''
    const category =  categoryId != null ? `&category=${categoryId}` : ''
    const search =  searchValue ? `&search=${searchValue}` : ''


    dispatch(
      fetchTours({
        adults, 
        children, 
        category, 
        search
    }))
}


// Фильтруем по дате
const filteredTours = filterToursByDate();


React.useEffect(() => {
  getTours();
}, [adultsCount, childrenCount, searchValue, categoryId])

  return (
    <div className="container">
      <div className='tours'>
        <div className="tours__title">Туры</div>
        <div className="tours__inner">
          {          
            filteredTours.map((obj, i) => 
              <TourBlock
                key={i} 
                {...obj}
              />)
          }
        </div>
      </div>
    </div>
    
  )
}

export default Tours