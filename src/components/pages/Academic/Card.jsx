import React from 'react'
import { LuMonitorStop } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = () => {
    return (
        <div className='bg-[#35e2bd] rounded-md p-4 pr-10'>
            <figure className='mb-3 bg-white text-[#31C3A2] w-fit text-3xl p-6 rounded-lg'>
                <LuMonitorStop />
            </figure>
            <h1 className='text-3xl font-semibold'>world class laboratories</h1>
            <a className='flex items-center gap-[1rem] w-full mt-6 font-bold text-lg'>
                Read more
                <FaArrowRightLong />
            </a>
        </div>
    )
}

export default Card
