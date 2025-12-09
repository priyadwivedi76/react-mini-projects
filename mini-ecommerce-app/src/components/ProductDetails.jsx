import React, { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { useState } from 'react';
 const ProductDetails = () => {
    const navigate=useNavigate()
    const [infor,setInfo]=useState(null)
    const {id} =useParams();
    const fetchData=()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((res)=>setInfo(res))
        return infor;
    }

    useEffect(()=>{
        fetchData()
    },[id])
  return (

    <>
    {infor && 
        <div className="max-w-6xl mx-auto p-6">
        <p className="text-sm text-gray-500 mb-4">
        <button className="text-gray-400 px-3 text-xl font-semibold" onClick={()=>navigate(-1)}>Back</button>
        <span className="text-gray-800 font-semibold">{infor.category} </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-md">
            <div>
                <img 
                className="w-fit h-112 rounded-xl shadow-sm"
                src={infor.image}
                alt="Product Image"
                />
            </div>

            <div className="flex flex-col justify-between">
                <h1 className="text-3xl font-bold text-gray-900">
                {infor.title}
                </h1>

                <div className="flex items-center gap-2 mt-2">
                <span className="text-yellow-400 text-xl">★ ★ ★ ★ ☆</span>
                <span className="text-gray-500">({infor.rating.rate}/5 from {infor.rating.count} reviews)</span>
                </div>

                <div className="mt-4">
                <p className="text-4xl font-bold text-blue-600">${infor.price}</p>
                <p className="text-sm text-gray-500">Inclusive of all taxes</p>
                </div>

                <p className="text-gray-700 mt-6">
                {infor.description}
                </p>

                <div className="flex gap-4 mt-8">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
                    Add to Cart
                </button>
                <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
                    Buy Now
                </button>
                </div>
            </div>
        </div>
    </div> 
    }
    
    </>
  )
}

export default ProductDetails;