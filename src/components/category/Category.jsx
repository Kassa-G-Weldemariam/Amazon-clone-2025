import React from 'react'
import CategoryCard from './CategoryCard'
import { categoryInfos } from './categoryFullInfos'
import classes from './category.module.css'
function Category() {
  return (
    <div className={classes.category_container}>
    {
        categoryInfos.map((Infos, index) => (
            <CategoryCard key={index} data={Infos}/>
        ))
    }
    </div>
  )
}

export default Category