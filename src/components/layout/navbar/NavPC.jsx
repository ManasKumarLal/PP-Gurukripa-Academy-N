import './Navbar.css'
import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import OverflowLinks from './OverflowLinks';
import { CgMenuHotdog } from "react-icons/cg";
import Logo from '../../../assets/Navbar/logo.png'

const contactLinks = [
    { route: "alpha", name: "Alpha" },
    { route: "beta", name: "Beta" },
    { route: "gamma", name: "Gamma" },
    { route: "xeta", name: "Xeta" }
]

const Navbar = ({ openTab }) => {

    const pcRef = useRef();
    const imgRef = useRef();
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > prevScrollPos) {
                pcRef.current.style.transform = "translateY(-3rem)"
                imgRef.current.style.transform = "translateY(-3rem)"
            } else {
                pcRef.current.style.transform = "translateY(0)"
                imgRef.current.style.transform = "translateY(0)"
            }
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <>

            <img
                ref={imgRef}
                className='main_logo z-50 fixed top-[3rem] bg-white transition-all duration-500'
                src={Logo}
                alt="logo"
            />

            <div ref={pcRef} className='nav_pc z-40 bg-[rgba(225,225,225,.7)] font-semibold fixed top-[3rem] flex items-center justify-end w-full  transition-all duration-500'>

                <div className='flex h-full items-center'>
                    <a className='link' href="">
                        HOME
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                    <a className='link' href="">
                        ABOUT US
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                    <a className='link' href="">
                        ADMISSION
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                    <a className='link' href="">
                        ACADEMIC
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                    <a className='link' href="">
                        CODE OF CONDUCT
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                    <a className='link' href="">
                        GALLERY
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                    <a className='link' href="">
                        CBSE RULES
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                    <a className='link' href="">
                        CONTACT US
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                </div>

                <CgMenuHotdog className='menu' onClick={() => openTab(true)} />

            </div>
        </>
    )
}

export default Navbar
