import React from 'react'

const Card = ({ imgSrc }) => {
    return (
        <div
            className='min-w-[15rem] w-[18rem] relative mb-8'
            style={{ boxShadow: '0 0 1px rgba(0,0,0,.5)' }}
        >
            <img src={imgSrc} alt="" />
            <div
                className='w-[13rem] h-[8rem] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] bg-white rounded-md flex flex-col items-center justify-center gap-2'
                style={{ boxShadow: '0 0 1px rgba(0,0,0,.5)' }}
            >
                <h2 className='font-semibold'>DOCTOR NAME</h2>
                <p className='text-[rgba(0,0,0,.4)] text-sm'>DESIGNATION</p>
            </div>
        </div>
    )
}

export default Card
