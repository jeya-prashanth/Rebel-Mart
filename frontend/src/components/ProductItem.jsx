import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer '>
      <div className='border-2 border-[#115e59] p-4 hover:shadow-lg transition duration-300 '>
        <div className='overflow-hidden '>
            <img src={image[0]} className='hover:scale-110 transition duration-300 ease-in-out ' alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm '>{name}</p>
        <p className='text-sm font-medium '>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem
