import './Footer.css'
import React from 'react'
import { IoLockOpenSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <div className="footer">

                <div className="body">

                    <div className="top">
                        <div className="wrapper">

                            <div className="box brand">
                                <img src="https://designarc.biz/demos/cleanex/assets/images/footer-logo.png" alt="" />
                                <div className="logos">
                                    <p>
                                        <IoLockOpenSharp />
                                        Location
                                    </p>
                                    <p>
                                        <IoLockOpenSharp />
                                        +91 1234567890
                                    </p>
                                    <p>
                                        <IoLockOpenSharp />
                                        Email
                                    </p>
                                </div>

                            </div>

                            <div className="box links">
                                <h2>Quick Links</h2>
                                <figure className='w-full flex items-center gap-3 mb-4'>
                                    <figure className='h-4 w-4 bg-[red] flex items-center justify-center rotate-45'>
                                        <p className='w-2.5 h-2.5 border-2 border-white rounded-full'></p>
                                    </figure>
                                    <figure className='h-[2px] w-14 bg-[red]'></figure>
                                </figure>
                                <a href="">Home</a>
                                <a href="">About Us</a>
                                <a href="">Schedule Appointment</a>
                                <a href="">Testimonial</a>
                            </div>

                        </div>
                        <div className="box wrapper">

                            <div className="box box3 links">
                                <a href="">Home Cleaning</a>
                                <a href="">Office Cleaning</a>
                                <a href="">Window Cleaning</a>
                                <a href="">Commerial Cleaning</a>
                                <a href="">Residential Cleaning</a>
                            </div>

                            <div className="box address">
                                <h2>Services & Treatments</h2>
                                <figure className='w-full flex items-center gap-3 mb-4'>
                                    <figure className='h-4 w-4 bg-[red] flex items-center justify-center rotate-45'>
                                        <p className='w-2.5 h-2.5 border-2 border-white rounded-full'></p>
                                    </figure>
                                    <figure className='h-[2px] w-14 bg-[red]'></figure>
                                </figure>
                                <p>
                                    54B, Tailstoi Town 5238 ST, <br />
                                    La city, IA 522364
                                </p>
                                <p>
                                    Email us :
                                    contact@example.com
                                </p>
                                <h2>+ 1800 456 7890</h2>
                            </div>

                        </div>
                    </div>

                    <div className="bottom">
                        <p>
                            <span className='text-[rgba(225,225,225,.6)]'>© Copyright 2023 All Rights Reserved </span>
                            <b> Gurukripa Academy</b>
                        </p>
                        <p className='flex items-center gap-2 font-bold text-[rgba(225,225,225,.6)]'>
                            <IoLockOpenSharp />
                            Login
                        </p>
                        <p className='font-bold'>
                            <span className='text-[rgba(225,225,225,.6)]'>Created By</span> MKL
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
