import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Placeorder = () => {

  const [method,setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] mt-[-30px] '>

      {/* Place-Order => Left-Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px] '>
        <div className='text-xl sm:text-2xl my-3 '>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3 '>
          <input className='border-[1.5px] rounded py-1.5 px-3.5 w-full focus:outline-none' type="text" placeholder='First Name' required
            style={{borderColor: '#115e592a',}}
            onFocus={(e) => e.target.style.borderColor = '#115e595a'}
            onBlur={(e) => e.target.style.borderColor = '#115e59'}
          />
          <input className='border-[1.5px] rounded py-1.5 px-3.5 w-full focus:outline-none' type="text" placeholder='Last Name' required
            style={{borderColor: '#115e592a',}}
            onFocus={(e) => e.target.style.borderColor = '#115e595a'}
            onBlur={(e) => e.target.style.borderColor = '#115e59'}
          />
        </div>
        <input className='border-[1.5px] rounded py-1.5 px-3.5 w-full focus:outline-none' type="email" placeholder='Email Address' required
          style={{borderColor: '#115e592a',}}
          onFocus={(e) => e.target.style.borderColor = '#115e595a'}
          onBlur={(e) => e.target.style.borderColor = '#115e59'}
        />
        <input className='border-[1.5px] rounded py-1.5 px-3.5 w-full focus:outline-none' type="text" placeholder='Phone Number' required
            style={{borderColor: '#115e592a',}}
            onFocus={(e) => e.target.style.borderColor = '#115e595a'}
            onBlur={(e) => e.target.style.borderColor = '#115e59'}
        />
        <input className='border-[1.5px] rounded py-1.5 px-3.5 w-full focus:outline-none' type="text" placeholder='Street' required
          style={{borderColor: '#115e592a',}}
          onFocus={(e) => e.target.style.borderColor = '#115e595a'}
          onBlur={(e) => e.target.style.borderColor = '#115e59'}
        />
        <div className='flex gap-3 '>
          <input className='border-[1.5px] rounded py-1.5 px-3.5 w-full focus:outline-none' type="text" placeholder='City' required
            style={{borderColor: '#115e592a',}}
            onFocus={(e) => e.target.style.borderColor = '#115e595a'}
            onBlur={(e) => e.target.style.borderColor = '#115e59'}
          />
          <input className='border-[1.5px] rounded py-1.5 px-3.5 w-full focus:outline-none' type="text" placeholder='State' required
            style={{borderColor: '#115e592a',}}
            onFocus={(e) => e.target.style.borderColor = '#115e595a'}
            onBlur={(e) => e.target.style.borderColor = '#115e59'}
          />
        </div>
        <div className='flex gap-3 '>
          <input className='border-[1.5px] rounded py-1.5 px-3.5 w-full focus:outline-none' type="number" placeholder='ZIP Code' required
            style={{borderColor: '#115e592a',}}
            onFocus={(e) => e.target.style.borderColor = '#115e595a'}
            onBlur={(e) => e.target.style.borderColor = '#115e59'}
          />
          <input className='border-[1.5px] rounded py-1.5 px-3.5 w-full focus:outline-none' type="text" placeholder='Country' required
            style={{borderColor: '#115e592a',}}
            onFocus={(e) => e.target.style.borderColor = '#115e595a'}
            onBlur={(e) => e.target.style.borderColor = '#115e59'}
          />
        </div>
      </div>

      {/* Place-Order => Left-Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12 '>
          <Title text1={'PAYMENT'} text2={'METHOD'} />

          {/* Payment Method Selection */}
          <div className='flex gap-3 flex-col lg:flex-row '>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 rounded-md cursor-pointer '>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-[#00bba7]' : ''}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 rounded-md cursor-pointer '>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-[#00bba7]' : ''}`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 rounded-md cursor-pointer '>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-[#00bba7]' : ''}`}></p>
              <p className='text-gray-500 tex-sm font-medium mx-2 '>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8 '>
            <button onClick={()=>{navigate('/orders'); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className='bg-[#115e59] text-sm text-white px-16 py-3 rounded-lg '>PLACE ORDER</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Placeorder
