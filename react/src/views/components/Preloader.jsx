import React, { useEffect } from 'react'
import { preLoaderAnim } from '../../js/animation';

export default function Preloader() {

    useEffect(() => {
        preLoaderAnim();
    }, []);


    return (
        <div className='preloader z-50 w-full h-screen bg-white flex fixed bottom-0 top-0 right-0 left-0 justify-center items-center overflow-hidden'>
            <div className='texts-container text-[30px] space-x-10 flex items-center justify-between h-[40px] w-[280px] font-extrabold '>
                <span>Track</span>
                <span>Repair</span>
                <span>System</span>
            </div>
        </div>
    )
}
