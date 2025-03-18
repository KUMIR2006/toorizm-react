import React from 'react'
import parse from 'html-react-parser';

interface categoriesBlockType {
  index: number;
  activeCategory: boolean;
  ruName: string;
  engName: string;
  pattern: string;
  defs: string;
  onClickCategory: (i: number) => void;
}


const CategoriesBlock: React.FC<categoriesBlockType> = ({index, activeCategory, ruName, engName, pattern, defs, onClickCategory}) => {
  return (
    <li onClick={() => onClickCategory(index)} className={`categories__block ${activeCategory ? 'active' : ''}`}>
      {parse(`
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect opacity="${activeCategory ? '1' : '0.4'}" width="35.4249" height="35.4249" fill="url(${pattern})"/>
        ${defs}
        </svg>
      `)}
      <p>{ruName}</p>
    </li>
  )
}

export default CategoriesBlock
