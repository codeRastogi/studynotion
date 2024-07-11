import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from 'react-icons/fc'

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    
    return (
        <div className='flex justify-between w-11/12 max-w-[1160px] py-10 mx-auto gap-x-12 gap-y-0'>

            <div className='w-11/12 max-w-[450px]'>
                <h1 className='text-gray-50 font-semibold text-[1.5rem] leading-[2.375rem]'>{title}</h1>
                <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                    <span className='text-gray-400'>{desc1}</span>
                    <br/>
                    <span className='text-blue-100 italic'>{desc2}</span>
                </p>
                {formtype === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }

                <div className='flex w-full item-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-gray-700 mt-3'></div>
                    <p className='text-gray-700 font-medium leading-[1.375rem]'>OR</p>
                    <div className='w-full h-[1px] bg-gray-700 mt-3'></div>
                </div>

                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-gray-200 border border-gray-700 px-[12px] py-[8px] gap-x-2 mt-6
                hover:bg-slate-500'>
                    <FcGoogle size={"1.8rem"}/>
                    <p>{formtype === "login"?("Sign In with Google"):("Sign Up with Google")}</p>
                </button>
            </div>


            <div className='relative w-11/12 max-w-[450px]'>
                <img src={frameImage}
                    alt='pattern'
                    width={558}
                    height={504}
                    loading='lazy' />

                <img src={image}
                    alt='Students'
                    width={558}
                    height={490}
                    loading='lazy' 
                    className='absolute -top-4 right-4'
                    />

            </div>
        </div>
    )
}

export default Template