import React from 'react'
import { useState,useEffect } from 'react'
import Products from './Products'
export const Home = () => {
    const [data,setData]=useState([])
    const [category,setCategory]=useState([])

    const handleData=()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((res)=>setData(res))
        return data;
    }

    const handleCategory=()=>{
      fetch(`https://fakestoreapi.com/products/categories`)
      .then((res)=>res.json())
      .then((res)=>setCategory(res))
      return category
    }

    useEffect(()=>{
        handleData()
        handleCategory()
    },[category])
    

    console.log(data,category)
  return (
    <div className='w-fit h-fit px-5 py-5 bg-slate-900'>
        <div className='flex gap-5 p-2 pb-5'>
          <label className='text-white text-md' for="category">Choose a Category</label>
            <select className='bg-gray-800 outline-none p-1 text-white text-md' id="fruits" name="fruits">
              {category.map((items)=>{
                return <option className='border-2 border-white text-white text-md' value={items}>{items}</option>
              })}
            </select>
        </div>
        <Products info={data} category={category}/>
    </div>
  )
}
