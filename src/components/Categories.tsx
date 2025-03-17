import React from 'react'
import CategoriesBlock from './CategoriesBlock'
import { useSelector } from 'react-redux';
import { selectFilter } from '../redux/filter/selectors';
import { useDispatch } from "react-redux";
import { setCategoryId } from '../redux/filter/slice';

export interface categoriesListType {
  ruName: string;
  engName: string;
}

const Categories:React.FC = () => {
  const dispatch = useDispatch();
  const { categoryId } = useSelector(selectFilter)
  
  const onClickChangeActive = (id:number) =>{
    dispatch(setCategoryId(id))
  }

  const categoriesList:Array<categoriesListType> = [
    {ruName:"Пляжи", engName:"beaches"},
    {ruName:"Пустыни", engName:"desert"},
    {ruName:"Горы", engName:"mountains"},
    {ruName:"Знаковые места", engName:"iconicCities"},
    {ruName:"Плавучие дома", engName:"houseboats"},
    {ruName:"Посёлки", engName:"countryside"},
    {ruName:"Кемпинг", engName:"camping"},
    {ruName:"Замки", engName:"castles"},
]
  return (
    <div className="container">
      <div className="categories">
        <div className="categories__title">Основные категории</div>
        <ul className="categories__inner">
            {
              categoriesList.map((obj,i) => 
              <CategoriesBlock 
                key={i} 
                index={i} 
                activeCategory={i === categoryId ? true : false} 
                ruName={obj.ruName} 
                engName={obj.engName}
                onClickCategory = {onClickChangeActive}
              />)
            }
        </ul>
      </div>
    </div>
  )
}

export default Categories
