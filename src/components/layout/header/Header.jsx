import './Header.css'
import React, { useEffect, useRef, useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { CgBookmark } from "react-icons/cg";
import { LiaBookSolid } from "react-icons/lia";
import { CgDialpad } from "react-icons/cg";

const Header = () => {

    const headerRef = useRef();
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > prevScrollPos) {
                headerRef.current.style.transform = "translateY(-100%)"
            } else {
                headerRef.current.style.transform = "translateY(0%)"
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
            <div ref={headerRef} className='z-40 header fixed bg-[#2D308D] left-0 right-0 text-white h-[3rem] flex items-center justify-between transition-all duration-500'>

                <div className='flex items-center justify-center gap-[2rem]'>
                    <p className='flex items-center gap-3'>
                        <LiaBookSolid className='border border-[rgba(255,255,255,.5)] p-1 text-3xl rounded-md ' />
                        <span>A Senior Secondary Co-Educational CBSE Affiliated School</span>
                    </p>
                    <p className='flex items-center gap-3'>
                        <CgBookmark className='border border-[rgba(255,255,255,.5)] p-1 text-3xl rounded-md' />
                        <span>Affiliation Number: 330654</span>
                    </p>
                    <p className='flex items-center gap-3'>
                        <CgDialpad className='border border-[rgba(255,255,255,.5)] p-1 text-3xl rounded-md' />
                        <span>School Number: 65649</span>
                    </p>
                </div>

                <div className='flex items-center justify-between gap-[.5rem]'>
                    <FaFacebookF className='border border-[rgba(255,255,255,.5)] p-2 text-3xl rounded-md' />
                    <FaTwitter className='border border-[rgba(255,255,255,.5)] p-2 text-3xl rounded-md' />
                    <TfiYoutube className='border border-[rgba(255,255,255,.5)] p-2 text-3xl rounded-md' />
                </div>

            </div>
        </>
    )
}

export default Header
