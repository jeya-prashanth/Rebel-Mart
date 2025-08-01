import React from 'react'

const NewsletterBox = () => {

    const onSubmithandler = (event) =>{
        event.preventDefault();
    }
    
  return (
    <div className='text-center '>
      <p className='text-2xl font-medium text-[#115e59] '>Subscribe now & get 25% off</p>
      <p className='text-gray-400 mt-3 '>✨ Subscribe today and enjoy an exclusive 25% off your next fashion purchase!</p>
      <form onSubmit={onSubmithandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-[#115e59] pl-3 rounded-[25px] '>
        <input className='w-full sm:flex-1 outline-none ' type="email" placeholder='Enter your email' required />
        <button type='submit' className='bg-[#115e59] prata-regular text-white text-xs px-10 py-5 rounded-r-[25px] '>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
