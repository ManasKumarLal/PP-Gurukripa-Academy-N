import './About.css'
import React from 'react'
import { TiTick } from "react-icons/ti";

const About = () => {
    return (
        <>
            <div className="about w-full flex items-center justify-between gap-16 ">

                <figure className='w-[45%] flex justify-end'>
                    <div className='w-[30rem] h-[30rem]'>
                        <img className='w-full h-full object-cover' src="https://lh3.googleusercontent.com/p/AF1QipN2A4HXDR3OeI-Cp0dOSWjCe31-Ol_z50MsROha=w1080-h608-p-no-v0" alt="image" />
                    </div>
                </figure>

                <div className='w-[55%] flex flex-col gap-10'>
                    <h1 className='text-3xl font-bold'>Welcome to Gurukripa Acedemy</h1>

                    <div className='w-full flex items-center gap-3 translate-y-[-100%]'>
                        <figure className='h-4 w-4 bg-[red] flex items-center justify-center rotate-45'>
                            <p className='w-2.5 h-2.5 border-2 border-white rounded-full'></p>
                        </figure>
                        <figure className='h-[2px] w-14 bg-[red]'></figure>
                    </div>

                    <p className='text-justify'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum autem ipsam, veritatis minima distinctio officia id esse nostrum in illum debitis accusamus consectetur voluptatum voluptate nesciunt temporibus cum maiores ex voluptatibus soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente incidunt odit officia quam laudantium atque!
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, soluta.
                    </p>

                    <div className='key_points grid grid-cols-2 gap-y-5'>
                        <h2 className='flex items-center gap-3'>
                            <TiTick className='text-[red] text-xl rounded-md border border-[red]' />
                            <span className='font-bold text-[rgba(0,0,0,.5)]'>
                                CBSE Affiliated School
                            </span>
                        </h2>
                        <h2 className='flex items-center gap-3'>
                            <TiTick className='text-[red] text-xl rounded-md border border-[red]' />
                            <span className='font-bold text-[rgba(0,0,0,.5)]'>
                                Laboratories
                            </span>
                        </h2>
                        <h2 className='flex items-center gap-3'>
                            <TiTick className='text-[red] text-xl rounded-md border border-[red]' />
                            <span className='font-bold text-[rgba(0,0,0,.5)]'>
                                Play Ground
                            </span>
                        </h2>
                        <h2 className='flex items-center gap-3'>
                            <TiTick className='text-[red] text-xl rounded-md border border-[red]' />
                            <span className='font-bold text-[rgba(0,0,0,.5)]'>
                                Transportation
                            </span>
                        </h2>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About
