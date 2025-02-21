import React from 'react'
import Button from './Button'

const Profile = ({ profile, isLogoutVisible, toggleLogoutVisibility, logOutAction }) => {
    
    return (
        <div className='relative font-montserrat cursor-pointer z-[35] w-max'>
            <div className='flex gap-5 rounded-full cursor-pointer items-center bg-white border border-coral-red pl-6 pr-1 py-1' onClick={toggleLogoutVisibility}>
                <div className='flex flex-col justify-around'>
                    <p className='text-lg font-semibold cursor-pointer'>{profile.name}</p>
                    <p className='text-sm cursor-pointer'>{profile.email}</p>
                </div>
                <img src={profile.picture} alt="user image" className='h-10 w-10 rounded-full cursor-pointer' />
            </div>
            <ul className={` bg-white flex flex-col absolute right-0 top-8 border border-coral-red w-full pr-4 justify-end items-end transition-all duration-300 rounded-b-[20px] pb-5 ${isLogoutVisible ? 'opacity-100 pt-10' : 'opacity-0 pointer-events-none pt-0 duration-100'} cursor-default z-[-10]`}>
                <li className='cursor-pointer' onClick={logOutAction}>
                    <Button label="Log out" btnCustom={"bg-white text-slate-gray border-slate-gray hover:bg-slate-gray hover:text-white hover:border-white z-[-10]"}  />
                </li>
            </ul>
        </div>
    )
}

export default Profile