import Card from './Card'
import './Specialists.css'
import React from 'react'

const Specialists = () => {
    return (
        <div className='specialists w-full'>

            <div className='w-full flex justify-between'>

                <div>
                    <h1 className='text-4xl mb-8 font-bold'>Meet Our Specialists</h1>
                    <figure className='w-full flex items-center gap-3'>
                        <figure className='h-4 w-4 bg-[red] flex items-center justify-center rotate-45'>
                            <p className='w-2.5 h-2.5 border-2 border-white rounded-full'></p>
                        </figure>
                        <figure className='h-[2px] w-14 bg-[red]'></figure>
                    </figure>
                </div>

                <button
                    className='px-4 py-3 h-fit text-xl rounded-sm font-semibold text-white bg-[#2EC8A6] w-fit'
                    style={{ boxShadow: "2px 4px 2px lightseagreen" }}
                >
                    Why Choose Us
                </button>

            </div>

            <div className="cards w-full flex justify-between mt-20 flex-wrap gap-[4rem]">
                <Card imgSrc="https://pngimg.com/d/doctor_PNG16034.png" />
                <Card imgSrc="https://pngimg.com/d/doctor_PNG15959.png" />
                <Card imgSrc="https://pngimg.com/d/doctor_PNG15959.png" />
                <Card imgSrc="https://pngimg.com/d/doctor_PNG16034.png" />
            </div>

        </div>
    )
}

export default Specialists
