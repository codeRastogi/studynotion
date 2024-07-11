import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import toast from 'react-hot-toast';

const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex ml-[12vw] justify-between items-center w-11/12 max-w-[1160px] py-4 max-auto'>
      <Link to={"/"}>
        <img  src={logo} alt='logo' width={160} height={32} loading='lazy' />
      </Link>
      <nav>
        <ul className=' text-white flex gap-x-6'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className='flex item-center gap-x-4'>
        {
          !isLoggedIn &&
          <Link to={"/login"}>
            <button className='bg-sky-700 text-white py-[8px] px-[12px] 
            rounded-[8px] border border-sky-500'>
              Login
            </button>
          </Link>
        }

        {
          !isLoggedIn &&
          <Link to={"/signup"}>
            <button className='bg-sky-700 text-white py-[8px] px-[12px] 
            rounded-[8px] border border-sky-500'>
              Sign Up
            </button>
          </Link>
        }

        {
          isLoggedIn &&
          <Link to={"/"}>
            <button className='bg-sky-700 text-white py-[8px] px-[12px] 
            rounded-[8px] border border-sky-500' onClick={() => {
              setIsLoggedIn(false);
              toast.success("Logged Out")
            }}>
              Log out
            </button>
          </Link>
        }

        {
          isLoggedIn &&
          <Link to={"/dashboard"}>
            <button className='bg-sky-700 text-white py-[8px] px-[12px] 
            rounded-[8px] border border-sky-500'>
              Dashboard
            </button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar