import React from 'react'

interface categoriesBlockType {
  index: number;
  activeCategory: boolean;
  ruName: string;
  engName: string;
  onClickCategory: (i: number) => void;
}

const CategoriesBlock: React.FC<categoriesBlockType> = ({index, activeCategory, ruName, engName, onClickCategory}) => {
  return (
    <li onClick={() => onClickCategory(index)} className={`categories__block ${activeCategory ? 'active' : ''}`}>
      <img src={`/img/categories/${engName}.svg`} alt={ruName} width="36" height="36"/>
      <p>{ruName}</p>
    </li>
  )
}

export default CategoriesBlock
