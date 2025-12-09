import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({info,id}) => {

  return (
    <>
        <Link to={`/product/${info.id}`}  className="max-w-xs bg-white/80 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
        <div className="relative">
            <img src={info.image} alt="Product" className="w-full h-62 object-center" />
            <button aria-label="Add to wishlist" className="absolute right-3 top-3 bg-white/70 p-2 rounded-full hover:bg-white">
            ♥
            </button>
        </div>

        <div className="p-4">
            <div className="flex items-center justify-between">
            <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{info.category}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{info.title}</h3>
            </div>
            <p className="text-lg font-bold text-blue-600">${info.price}</p>
            </div>

            <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <div className="flex items-center">
                <span className="text-sm text-gray-600">{info.rating.rate}</span>
                </div>
            </div>

            <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-700">Add to cart</button>
            </div>
        </div>
        </Link>
</>
  )
}

export default ProductCard