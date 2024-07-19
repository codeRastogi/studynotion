import React from 'react'
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-8'>
        <div className='spinner'></div>
            <p className='text-zinc-900 text-lg font-semibold'>Loading....</p>

    </div>
  )
}

export default Spinner