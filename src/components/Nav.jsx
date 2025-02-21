import { headerLogo } from '../assets/images';
import { hamburger, shoppingCart, X } from '../assets/icons';
import { navLinks } from '../constants';
import { useState, useEffect } from 'react';
import SignIn from './SignIn';
import { googleLogout } from '@react-oauth/google';
import Button from './Button';
import Profile from './Profile';
import { Link } from 'react-router-dom'


const Nav = ({ cartCount, resetCart }) => {
    const [isMobileNavVisible, setMobileNavVisible] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isLogoutVisible, setLogoutVisible] = useState(false);
    const [profile, setProfile] = useState(null);

    const toggleLogoutVisibility = () => {
        setLogoutVisible(!isLogoutVisible);
    };
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    const toggleMobileNav = () => {
        setMobileNavVisible(!isMobileNavVisible);
    };

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <header className='padding-x py-8 fixed z-20 w-full bg-white border-b border-coral-red shadow-md font-montserrat'>
            <nav className='flex justify-between items-center max-container'>
                <div className='flex-1'>
                    <Link to="/" className='inline-block'>
                        <img src={headerLogo} alt="Logo" width={130} height={29} />
                    </Link>
                </div>

                <Link to='/cart' className={`${!profile ? "block" : "hidden"} flex items-center relative mx-5 rounded-full border border-transparent hover:border-coral-red px-5 py-1`}>
                    <p className={`w-5 h-5 p-3 font-sans text-white bg-coral-red rounded-full flex justify-center items-center text-center text-md mb-[4px] mr-[-3px] ${cartCount === 0 ? 'hidden' : ''}`}>
                        {cartCount}
                    </p>
                    <img src={shoppingCart} alt="shopping cart" className='h-[40px]' />
                </Link>
                <ul className='flex justify-around items-stretch bg-transparent w-200 flex-1 h-12 border border-coral-red rounded-full max-lg:hidden '>
                    {navLinks.map((item, index) => (
                        <li key={item.label} className="flex-1 ">
                            <Link to={item.href} className={`font-montserrat leading-normal text-lg text-slate-gray cursor-pointer flex justify-center items-center hover:text-white px-10 hover:bg-coral-red transition h-full whitespace-nowrap ${index === 0 ? 'rounded-l-full' : ''} ${profile && index === navLinks.length - 1 ? 'rounded-r-full' : ''}`}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    {!profile && (
                        <li className="">
                            <a
                                className="font-montserrat leading-normal text-lg cursor-pointer flex justify-center items-center h-full px-10 rounded-r-full bg-blue-500 font-bold text-white hover:bg-white hover:text-blue-800  hover:border-blue-800 whitespace-nowrap"
                                onClick={handleOpenModal}
                            >
                                Sign In / Up
                            </a>
                        </li>
                    )}
                </ul>
                <Link to='/cart' className={`${profile ? "block" : "hidden"}  flex items-center relative mx-5 rounded-full border border-transparent hover:border-coral-red px-5 py-1`}>
                    <p className={`w-5 h-5 p-3 font-sans text-white bg-coral-red rounded-full flex justify-center items-center text-center text-md mb-[4px] mr-[-3px] ${cartCount === 0 ? 'hidden' : ''}`}>
                        {cartCount}
                    </p>
                    <img src={shoppingCart} alt="shopping cart" className='h-[40px]' />
                </Link>
                {profile ? (
                    <div className='flex-1 flex justify-end max-lg:hidden'>
                        <Profile profile={profile} isLogoutVisible={isLogoutVisible} toggleLogoutVisibility={toggleLogoutVisibility} logOutAction={logOut} />
                        <div className={`absolute inset-0 bg-black w-full h-[100vh] opacity-30 z-[25] ${isLogoutVisible ? 'block' : 'hidden'}`} onClick={toggleLogoutVisibility}></div>
                    </div>
                ) : (
                    <div className='hidden'>
                    </div>
                )}
                <div className='hidden max-lg:block max-lg:cursor-pointer' onClick={toggleMobileNav}>
                    <img src={hamburger} alt="Hamburger" width={25} height={25} />
                </div>
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 z-10 duration-300 ${isMobileNavVisible ? 'bg-black' : 'bg-transparent pointer-events-none'
                        }`}
                    onClick={toggleMobileNav}
                >
                    <div
                        className={`bg-white w-1/2 h-full transition-transform duration-300 transform ${isMobileNavVisible ? 'translate-x-0' : 'translate-x-full'
                            } right-0 absolute`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='flex justify-end'>
                            <img src={X} alt="" onClick={toggleMobileNav} className='w-14 pr-3 pt-3 cursor-pointer' />
                        </div>
                        <ul className='flex flex-col pt-2 mb-4'>
                            {navLinks.map((item) => (
                                <li key={item.label} className="border-b border-coral-red first:border-t">
                                    <Link to={item.href}
                                        onClick={toggleMobileNav}
                                        className='font-montserrat leading-normal text-lg text-black cursor-pointer block p-4 hover:text-white hover:bg-coral-red transition'>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            {!profile && (
                                <li className="">
                                    <a
                                        className="font-montserrat leading-normal text-lg cursor-pointer flex justify-start items-center h-14 px-4 bg-blue-500 font-bold text-white hover:bg-white hover:text-blue-800  hover:border-blue-800 whitespace-nowrap"
                                        onClick={handleOpenModal}
                                    >
                                        Sign In / Up
                                    </a>
                                </li>
                            )}
                        </ul>
                        {profile ? (
                            <div className='flex-1 flex justify-end'>
                                <div className='relative font-montserrat z-[35] w-full'>
                                    <div className='flex max-lg:flex-col max-lg:items-start gap-5 -mt-4 items-center bg-white border-b justify-between border-coral-red px-5 py-2' onClick={toggleLogoutVisibility}>
                                    <img src={profile.picture} alt="user image" className='max-lg:inline-block hidden h-10 w-10 rounded-full ' />
                                        <div className='flex flex-col justify-around'>
                                            <p className='text-lg font-semibold '>{profile.name}</p>
                                            <p className='text-sm '>{profile.email}</p>
                                        </div>
                                        <img src={profile.picture} alt="user image" className='max-lg:hidden inline-block h-10 w-10 rounded-full ' />
                                    </div>
                                    <button onClick={logOut} className='cursor-pointer mt-4 justify-self-center flex justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none rounded-xl w-[90%] whitespace-nowrap font-semibold text-lg bg-coral-red hover:bg-white border-coral-red text-white hover:text-coral-red hover:border-coral-red'> Log Out</button>
                                </div>
                                
                            </div>
                        ) : (
                            <div className='hidden'>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <SignIn isOpen={isModalOpen} onClose={handleCloseModal} setUserProfile={setProfile} />
        </header>
    );
}

export default Nav;