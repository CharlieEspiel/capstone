import React from 'react'

export default function LoaderScreen() {
    return (
        <div className='bg-white h-screen w-full flex justify-center items-center relative'>
            <div className='bg w-full h-screen absolute bg-black'>

                
            </div>
            <div className='absolute z-10 font-semibold text-white text-[5em] '>Loading...</div>
        </div>
    )
}
