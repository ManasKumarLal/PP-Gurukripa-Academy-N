import React from 'react'

const Card = ({ title, border, bg }) => {
    return (
        <div className='w-[25rem] border border-black rounded-2xl overflow-hidden'>
            <div className='w-[100%] h-[4rem] bg-black'></div>
            <div className={`border-t-8 ${border} w-[100%] bg-[white] relative`}>
                <figure
                    className={`${bg} w-[50%] h-[3.5rem] font-bold absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-55%] flex items-center justify-center text-white`}
                    style={{ clipPath: "polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0 50%)" }}
                >
                    {title}
                </figure>
                <div className='w-[100%] h-[3rem]'></div>
                <div className='w-[100%] h-[3rem] bg-[#ececec9d]'></div>
                <div className='w-[100%] h-[3rem]'></div>
                <div className='w-[100%] h-[3rem] bg-[#ECECEC9d]'></div>
            </div>
        </div>
    )
}

export default Card
