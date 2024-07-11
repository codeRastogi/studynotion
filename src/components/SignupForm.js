import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [FormData, setFormData] = useState({
        firstname: "", lastname: "", email: "", password: ""
        , confirmPassword: ""
    })

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData, [event.target.name]: event.target.value , accountType
        }))
    }

    function submitHandler(event) {
        event.preventDefault();
        if (FormData.password !== FormData.confirmPassword) {
            toast.error("Passwrod didnt Match")

        } else {
            const AccountData = {
                ...FormData
            }
            toast.success("Welcome to Study Notion");
            navigate("/dashboard");
            setIsLoggedIn(true)
            console.log(AccountData);
        }
    }



    return (
        <div >

            <div
            className='flex bg-sky-800 p-1 gap-x-2 my-6 rounded-full max-w-max'
            >
                <button 
                className={`${accountType === "student" ? "bg-sky-950 text-gray-50" : "bg-transparent text-gray-500"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("student")}>
                    Student
                </button>
                <button 
                className={`${accountType === "instructor" ? "bg-sky-950 text-gray-50" : "bg-transparent text-gray-500"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form className='flex flex-col gap-3'
            onSubmit={submitHandler}>
                <div className='flex gap-x-4'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]'>
                            First Name <sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            value={FormData.firstname}
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            name='firstname'
                            className='bg-sky-900 rounded-lg text-gray-50 w-full p-[12px] hover:bg-sky-800'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]'>
                            Last Name <sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            value={FormData.lastname}
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            name='lastname'
                            className='bg-sky-900 rounded-lg text-gray-50 w-full p-[12px] hover:bg-sky-800'
                        />
                    </label>
                </div>

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


                <div className='flex gap-x-4'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]'>
                            Create Password <sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type={showPassword1 ? ("text") : ("password")}
                            value={FormData.password}
                            onChange={changeHandler}
                            placeholder='Create Password'
                            name='password'
                            className='bg-sky-900 rounded-lg text-gray-50 w-full p-[12px] hover:bg-sky-800'
                        />

                        <span
                            className='absolute right-3  top-[40px] cursor-pointer'
                            onClick={() => setShowPassword1((prev) => !prev)}>
                            {showPassword1 ? (<AiOutlineEyeInvisible className='fill-gray-300 size-[1.25rem] hover:fill-gray-100' />) : (<AiOutlineEye className='fill-gray-300 size-[1.25rem] hover:fill-gray-100' />)}
                        </span>

                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]'>
                            Confirm Password <sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type={showPassword2 ? ("text") : ("password")}
                            value={FormData.confirmPassword}
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            name='confirmPassword'
                            className='bg-sky-900 rounded-lg text-gray-50 w-full p-[12px] hover:bg-sky-800'
                        />

                        <span
                            className='absolute right-3  top-[40px] cursor-pointer'
                            onClick={() => setShowPassword2((prev) => !prev)}>
                            {showPassword2 ? (<AiOutlineEyeInvisible className='fill-gray-300 size-[1.25rem] hover:fill-gray-100' />) : (<AiOutlineEye className='fill-gray-300 size-[1.25rem] hover:fill-gray-100' />)}
                        </span>

                    </label>
                </div>

                <button className='mt-6 bg-yellow-400 text-center text-lg text-gray-900 font-bold w-full rounded-lg p-[7px] hover:bg-yellow-300'>Create Account</button>
            </form>

        </div>
    )
}

export default SignupForm