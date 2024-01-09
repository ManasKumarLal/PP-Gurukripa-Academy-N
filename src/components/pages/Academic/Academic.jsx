import './Academic.css'
import React from 'react'
import Card from './Card'

const Academic = () => {
    return (
        <>
            <div className="academic w-full bg-[#31C3A2] text-white  flex justify-between gap-16 ">

                <div className='w-[45%] flex flex-col gap-7'>

                    <button className='px-4 py-3 text-xl rounded-md font-semibold text-[lightseagreen] bg-[#D9F1E6] w-fit'>Why Choose Us</button>

                    <h1 className='text-4xl font-bold'>At GuruKripa Acedemy, we have been creating miracles of birth for the past 10 years.</h1>

                    <div className='w-full flex items-center gap-3 translate-y-[-100%]'>
                        <figure className='h-4 w-4 bg-[red] flex items-center justify-center rotate-45'>
                            <p className='w-2.5 h-2.5 border-2 border-white rounded-full'></p>
                        </figure>
                        <figure className='h-[2px] w-14 bg-[red]'></figure>
                    </div>

                    <div className='cards grid grid-cols-2 gap-y-5 gap-x-5'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </div>

                <figure className='w-[55%] h-full flex flex-col  justify-between'>
                    <p className='text-xl pr-[15vmax]'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum autem ipsam, veritatis minima distinctio officia id esse nostrum in illum debitis
                    </p>
                    <div className='w-[100%] h-full rounded-l-xl overflow-hidden translate-y-[10%]'>
                        <img className='w-full h-full object-cover' src="https://i0.wp.com/dpswarangal.in/wp-content/uploads/2022/09/DSC08309-copy.webp" alt="image" />
                    </div>
                </figure>

            </div>
        </>
    )
}

export default Academic
