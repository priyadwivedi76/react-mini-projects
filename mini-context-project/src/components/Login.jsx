import React, { useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
export const Login = () => {
    const [username,setUsername]=useState(null);
    const [password,setPassword]=useState(null);

    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }

  return (
    <div className='flex flex-col gap-5 mb-10'>
        <input 
        type='text' 
        className='bg-gray-800 px-2 w-54 py-1 rounded-md outline-none text-white'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Enter Username'/>

        <input 
        type='text' 
        className='bg-gray-800 px-2 py-1 rounded-md outline-none text-white'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Enter Password'/>

        <button className='bg-blue-500 py-1 px-2 rounded-md hover:bg-blue-600' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
