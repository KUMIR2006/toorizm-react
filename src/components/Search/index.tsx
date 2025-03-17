import React from 'react';
import debounce from 'lodash.debounce';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { setSearchValue } from '../../redux/filter/slice';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(selectFilter)

  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null)

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    },250),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }
  return (
    <div className="search"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M18.7892 18.8594L14.6507 14.7136L18.7892 18.8594ZM16.9441 9.17288C16.9441 11.2526 16.118 13.2471 14.6474 14.7176C13.1769 16.1882 11.1824 17.0143 9.10269 17.0143C7.023 17.0143 5.0285 16.1882 3.55794 14.7176C2.08738 13.2471 1.26123 11.2526 1.26123 9.17288C1.26123 7.09319 2.08738 5.09869 3.55794 3.62813C5.0285 2.15757 7.023 1.33142 9.10269 1.33142C11.1824 1.33142 13.1769 2.15757 14.6474 3.62813C16.118 5.09869 16.9441 7.09319 16.9441 9.17288V9.17288Z" stroke="white" strokeWidth="2.21406" strokeLinecap="round"/>
      </svg>
      <input 
        ref={inputRef}
        value={value} 
        onChange={onChangeInput}
        type="text" 
        className="search--input" 
        placeholder="Введите направление, отель"
      /> 
    </div>
  )
}

export default Search
