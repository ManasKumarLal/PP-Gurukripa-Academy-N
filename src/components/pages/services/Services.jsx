import './Services.css'
import React from 'react'

const Services = () => {
    return (
        <div className='services flex flex-col gap-8'>

            <h1 className='text-3xl'>Services & Treatments</h1>

            <figure className='w-full flex items-center gap-3'>
                <figure className='h-4 w-4 bg-[red] flex items-center justify-center rotate-45'>
                    <p className='w-2.5 h-2.5 border-2 border-white rounded-full'></p>
                </figure>
                <figure className='h-[2px] w-14 bg-[red]'></figure>
            </figure>

            <div className='flex justify-between gap-16 w-full'>
                <div className="box1 h-fit text-nowrap bg-[#F7F7F7] rounded-lg overflow-hidden text-lg text-[rgba(0,0,0,.5)] font-medium">
                    <h1 className='px-3 py-3 bg-[#31C3A2] rounded-lg'>1. Gynecology</h1>
                    <h1 className='px-3 py-3'>2. Fertility Services</h1>
                    <h1 className='px-3 py-3'>3. In vitro fertilization (IVF)</h1>
                    <h1 className='px-3 py-3'>4. Prenatal ultrasound</h1>
                    <h1 className='px-3 py-3'>5. High Risk pregnancy care</h1>
                </div>
                <div className='box2 border-[2px] border-[rgba(0,0,0,.1)] p-4'>
                    <h1 className='text-3xl mb-8 text-[#31C3A2] font-bold'>1. Gynecology</h1>
                    <div className='flex gap-12 text-xl text-[rgba(0,0,0,.6)] text-justify'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore provident esse tempora unde expedita dolorum neque voluptate a, sed quisquam doloremque non accusamus, hic eius! Suscipit molestiae voluptatum totam nulla voluptas error a? Saepe in, obcaecati deserunt provident excepturi alias voluptatum consequatur, laudantium vitae dolore atque non incidunt. Obcaecati!</p>
                        <img className='h-[20rem]' src="https://img.freepik.com/premium-vector/doctor-with-patient-cartoon_18591-2277.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services
