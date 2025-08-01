import React, { useState } from 'react'

const Login = () => {

  const [currentState,setCurrentState] = useState('Login');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-[#115e59] '>
      <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
        <p className='prata-regular text-3xl '>{currentState} </p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800 ' />
      </div>
      {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 rounded border-[1.5px] focus:outline-none ' placeholder='Name' required
            style={{borderColor: '#115e592a',}}
            onFocus={(e) => e.target.style.borderColor = '#115e595a'}
            onBlur={(e) => e.target.style.borderColor = '#115e59'} /> } 
      <input type="email" className='w-full px-3 py-2 rounded border-[1.5px] focus:outline-none ' placeholder='Email Address' required
            style={{borderColor: '#115e592a',}}
            onFocus={(e) => e.target.style.borderColor = '#115e595a'}
            onBlur={(e) => e.target.style.borderColor = '#115e59'} />
      <input type="password" className='w-full px-3 py-2 rounded border-[1.5px] focus:outline-none ' placeholder='Password' required
            style={{borderColor: '#115e592a',}}
            onFocus={(e) => e.target.style.borderColor = '#115e595a'}
            onBlur={(e) => e.target.style.borderColor = '#115e59'} />
      <div className='w-full flex justify-between text-sm mt-[-8px] '>
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('Sign up')} className='cursor-pointer '>Create account</p> 
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer '>Already have an account?</p>
        }
        {/* <p className='cursor-pointer' onClick={()=>setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}>{currentState === 'Login' ? 'Create an account' : 'Already have an account?'}</p> */}
      </div>
      <button className='bg-[#115e59] text-xl text-white px-8 py-2 mt-4 rounded-lg font-light '>{currentState === 'Login' ? 'Sign in' : 'Sign Up'} </button>
    </form>
  )
}

export default Login
