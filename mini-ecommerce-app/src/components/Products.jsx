import React from 'react'
import ProductCard from './ProductCard'
import ProductDetails from './ProductDetails'
import { Route, Routes } from 'react-router-dom'
const Products = ({info,category}) => {
  return (
    <>
    <div className='gap-10 flex flex-wrap'>
        {info.map((items)=>{
            return <ProductCard key={items.id} info={items} />
        })}
    </div>
    </>
  )
}

export default Products