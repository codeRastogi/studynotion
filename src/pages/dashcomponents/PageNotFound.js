import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';

const PageNotFound = () => {
    const [typingStatus, setTypingStatus] = useState('Initializing');
    return (
        
        <div className='bg-gray-900 w-full h-screen flex flex-col items-center justify-evenly'>
            <img className='w-[600px] mt-[0px]' src="https://i.imgur.com/qIufhof.png" />
            <div id="info">
               

                <TypeAnimation
                className='text-yellow-100 font-sans text-6xl mt-0'
                    sequence={[
                        1500,
                        () => {
                            setTypingStatus('Typing...');
                        },
                        'Wait... Page is Loading...',
                        () => {
                            setTypingStatus('Done Typing');
                        },
                        1000,
                        () => {
                            setTypingStatus('Deleting...');
                        },
                        '',
                        () => {
                            setTypingStatus('Done Deleting');
                        },
                    ]}
                    repeat={Infinity}
                />;
            </div>
        </div >
    )
}

export default PageNotFound