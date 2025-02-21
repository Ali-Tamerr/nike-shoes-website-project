import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleIcon } from '../assets/images';
import axios from 'axios';


const SignIn = ({ isOpen, onClose, setUserProfile }) => {

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${codeResponse.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setUserProfile(res.data);
                    // console.log(res.data)
                    onClose();
                })
                .catch((err) => console.log(err));

        },
        onError: (error) => console.log('Login Failed:', error)
    });

    return (
        <div className={`fixed inset-0 z-50 transition flex ${isOpen ? 'opacity-100 ' : 'opacity-0  pointer-events-none'} items-center justify-center font-montserrat`}>
            <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
            <div className={`bg-white px-10 py-6 min-w-max w-[35%] max-w-[400px] rounded-xl outline outline-coral-red shadow-xl z-10 transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-10'}`}>
                <h2 className="text-xl font-bold mb-6 text-center ">Sign In</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full px-3 py-2 border border-black rounded" />
                    </div>
                    <div className="mb-7">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full px-3 py-2 border border-black rounded" />
                    </div>
                    <button type="submit" className="w-full bg-coral-red text-white py-2 rounded">Sign In</button>
                </form>
                <p className='text-[14px] mt-2'>Don't have an account? <a href="" className='underline text-blue-500'>Sign Up</a></p>
                <hr className='my-7' />
                <button onClick={() => login()} className='w-full flex items-center justify-center bg-slate-100 border border-black gap-2 text-black py-2 rounded'>
                    <img src={GoogleIcon} alt='Google icon' className='w-6' />
                    Sign in with Google</button>
            </div>
        </div>
    );
};

export default SignIn;