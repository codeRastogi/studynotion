import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const [FormData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData, [event.target.name]: event.target.value
            }
        ))

    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(FormData);
        toast.success("Login Succesfully");
        navigate("/dashboard");
        setIsLoggedIn(true)
    }

    return (
        <form onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]'>
                    Email Address <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={FormData.email}
                    onChange={changeHandler}
                    placeholder='Enter Email Address'
                    name='email'
                    className='bg-sky-900 rounded-lg text-gray-50 w-full p-[12px] hover:bg-sky-800' 
                />
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]'>
                    Password <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={FormData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name='password'
                    className='bg-sky-900 rounded-lg text-gray-50 w-full p-[12px] hover:bg-sky-800'
                />

                <span 
                className='absolute right-3  top-[38px] cursor-pointer'
                onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible className='fill-gray-300 size-[1.25rem] hover:fill-gray-100'/>) : (<AiOutlineEye className='fill-gray-300 size-[1.25rem] hover:fill-gray-100'/>)}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button className='mt-6 bg-yellow-400 text-center text-lg text-gray-900 font-bold w-full rounded-lg p-[7px] hover:bg-yellow-300'>
                Sign In
            </button>
        </form>
    )
}

export default LoginForm