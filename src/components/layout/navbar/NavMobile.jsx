import React from 'react'
import { AiOutlineRotateRight } from "react-icons/ai";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import OverflowLinks from './OverflowLinks';

const contactLinks = [
    { route: "alpha", name: "Alpha" },
    { route: "beta", name: "Beta" },
    { route: "gamma", name: "Gamma" },
    { route: "xeta", name: "Xeta" }
]

const NavMobile = ({ open, openTab }) => {
    return (
        <div className={`z-50 nav_mobile ${!open && "close"}`}>
            <AiOutlineRotateRight onClick={() => openTab(false)} />

            <div className='flex flex-col'>
                <a className='link ' href="">
                    <HiOutlineChevronDoubleDown />
                    HOME
                    <OverflowLinks links={contactLinks} />
                </a>
                <a className='link' href="">
                    <HiOutlineChevronDoubleDown />
                    ABOUT US
                    <OverflowLinks links={contactLinks} />
                </a>
                <a className='link' href="">
                    <HiOutlineChevronDoubleDown />
                    ADMISSION
                    <OverflowLinks links={contactLinks} />
                </a>
                <a className='link' href="">
                    <HiOutlineChevronDoubleDown />
                    ACADEMIC
                    <OverflowLinks links={contactLinks} />
                </a>
                <a className='link' href="">
                    <HiOutlineChevronDoubleDown />
                    CODE OF CONDUCT
                    <OverflowLinks links={contactLinks} />
                </a>
                <a className='link' href="">
                    <HiOutlineChevronDoubleDown />
                    GALLERY
                    <OverflowLinks links={contactLinks} />
                </a>
                <a className='link' href="">
                    <HiOutlineChevronDoubleDown />
                    CBSE RULES
                    <OverflowLinks links={contactLinks} />
                </a>
                <a className='link' href="">
                    <HiOutlineChevronDoubleDown />
                    CONTACT US
                    <OverflowLinks links={contactLinks} />
                </a>
            </div>
        </div>
    )
}

export default NavMobile
