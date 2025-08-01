import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {

  const {products , currency } = useContext(ShopContext);

  return (
    <div className='pt-16 mt-[-30px] '>

      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {
          products.slice(1,4).map((item,index)=>(
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 '>
              <div className='flex items-start gap-6 text-sm '>
                <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                <div>
                  <p className='text-base font-medium text-[#115e59] '>{item.name} </p>
                  <div className='flex items-center gap-3 mt-2 text-base text-[#115e59] '>
                    <p className='text-lg '>{currency}{item.price} </p>
                    <p>Quantity : 1</p>
                    <p>Size : M</p>
                  </div>
                  <p className='mt-2 text-[#115e59] '>Date : <span className='text-[#115e59] '>17th May 2025</span></p>
                </div>
              </div>

              <div className='flex justify-between md:w-1/2 '>
                <div className='flex items-center gap-2 '>
                  <p className='min-w-2 h-2 rounded-full bg-[#00bba7] '></p>
                  <p className='text-sm md:text-base '>Ready to ship</p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm '>Track Order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
