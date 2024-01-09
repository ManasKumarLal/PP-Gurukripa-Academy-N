import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ title, icon }) => {
    return (
        <div className='card relative border-[3px] border-[#2C308F] bg-white w-[25rem] px-16 py-10'>
            <div
                className='absolute top-0 left-0 w-[7rem] h-[7rem] text-white bg-[#2C308F] flex items-center justify-center'
                style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
            >
                <span className='translate-x-[-60%] translate-y-[-60%] text-4xl'>{icon}</span>
            </div>
            <h2 className='font-bold text-2xl text-center mb-10'>{title}</h2>
            <p className='text-[rgba(0,0,0,.5)] text-lg text-center font-medium'>Description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, similique ipsum typetesting.....</p>
            <a className='flex items-center justify-center gap-[1rem] w-full mt-4 font-bold text-lg'>
                Read more
                <FaArrowRightLong />
            </a>
        </div>
    )
}

export default Card
