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

const Navbar = ({ open, openTab }) => {

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
                style={{ boxShadow: "0 0 15px black" }}
                src={Logo}
                alt="logo"
            />

            <div ref={pcRef} className='nav_pc z-40 bg-white font-semibold fixed top-[3rem] flex items-center justify-end w-full  transition-all duration-500'>

                <div className='flex h-full items-center'>
                    <a className='link'>
                        HOME
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                    <a className='link'>
                        ABOUT US
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                    <a className='link'>
                        ADMISSION
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                    <a className='link'>
                        ACADEMIC
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                    <a className='link'>
                        CODE OF CONDUCT
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                    <a className='link'>
                        GALLERY
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                    <a className='link'>
                        CBSE RULES
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                    <a className='link'>
                        CONTACT US
                        <HiOutlineChevronDoubleDown />
                        <OverflowLinks links={contactLinks} />
                    </a>
                </div>

                <CgMenuHotdog className='menu' onClick={() => openTab(!open)} />

            </div>
        </>
    )
}

export default Navbar
