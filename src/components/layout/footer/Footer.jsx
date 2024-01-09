import './Footer.css'
import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLockOpenSharp } from "react-icons/io5";
import { FaAngleDoubleRight } from "react-icons/fa";
import Logo from '../../../assets/Navbar/logo.png'
import { SlCalender } from "react-icons/sl";

const Footer = () => {
    return (
        <>
            <div className="footer">

                <div className="body">

                    <div className="top">
                        <div className="wrapper">

                            <div className="box brand">

                                <img className='w-[10rem]' src={Logo} />
                                <div className="logos">
                                    <p>
                                        <IoLocationSharp />
                                        Bhagalpur, Bihar
                                    </p>
                                    <p>
                                        <FaPhoneAlt />
                                        +91 1234567890
                                    </p>
                                    <p>
                                        <IoMdMail />
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
                                <a href=""><FaAngleDoubleRight /> Home</a>
                                <a href=""><FaAngleDoubleRight /> About Us</a>
                                <a href=""><FaAngleDoubleRight /> Addmission Form</a>
                                <a href=""><FaAngleDoubleRight /> Academic Calender</a>
                                <a href=""><FaAngleDoubleRight /> Notice Board</a>
                                <a href=""><FaAngleDoubleRight /> Career</a>
                            </div>

                        </div>
                        <div className="box wrapper">

                            <div className="box box3 links">
                            <h2>Latest News</h2>
                                <figure className='w-full flex items-center gap-3 mb-4'>
                                    <figure className='h-4 w-4 bg-[red] flex items-center justify-center rotate-45'>
                                        <p className='w-2.5 h-2.5 border-2 border-white rounded-full'></p>
                                    </figure>
                                    <figure className='h-[2px] w-14 bg-[red]'></figure>
                                </figure>
                                <div>
                                    <p> <SlCalender/> 2-4-2024</p>
                                    ADDMISSION OPEN FOR CLASS XII
                                </div>
                                <div>
                                    <p> <SlCalender/> 28-3-2024</p>
                                    ADDMISSION OPEN FOR CLASS XII
                                </div>
                            </div>

                            <div className="box address">
                                <h2>Services & Treatments</h2>
                                <figure className='w-full flex items-center gap-3 mb-4'>
                                    <figure className='h-4 w-4 bg-[red] flex items-center justify-center rotate-45'>
                                        <p className='w-2.5 h-2.5 border-2 border-white rounded-full'></p>
                                    </figure>
                                    <figure className='h-[2px] w-14 bg-[red]'></figure>
                                </figure>
                                <p>IUI I IVF I ICSI</p>
                                <p>Infertility Assessment - Female</p>
                                <p>Infertility Assessment - Male</p>
                                <p>Fertility Enhancing Surgeries</p>
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
