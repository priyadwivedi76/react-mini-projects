import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
const Profile = () => {
    const {user}=useContext(UserContext)
    if(!user) return <div className='text-3xl font-semibold text-gray-500'>Please Login</div>
    else{
        return <div className='text-3xl font-semibold text-gray-500'>Username:{user.username}</div>
    }
}

export default Profile