import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({setToken}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
            
        } catch (e) {
            console.log(e);
            toast.error('error.message')
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
            <div className='mb-3 min-w-72 '>
                <p className='text-sm font-medium text-gray-700 mb-2 '>Email Address</p>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border-2 border-[#115e59] outline-none ' type="email" placeholder='Enter Your Emaill address' required />
            </div>
            <div className='mb-3 min-w-72 '>
                <p className='text-sm font-medium text-gray-700 mb-2 '>Password</p>
                <div className='relative'>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border-2 border-[#115e59] outline-none ' type={showPassword ? "text" : "password"}  placeholder='Enter Your Password' required />
                    <button type="button" onClick={togglePasswordVisibility} className='absolute inset-y-0 right-0 pr-3 flex items-center text-[#115e59] hover:scale-105 transition-all duration-300' >
                        {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    </button>
                </div>
            </div>
            <button className='mt-2 w-full px-4 py-2 rounded-md text-white bg-[#115e59] cursor-pointer' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
