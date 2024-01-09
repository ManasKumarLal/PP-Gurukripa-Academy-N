import React, { useState } from 'react'
import { AiOutlineRotateRight } from "react-icons/ai";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import OverflowLinks from './OverflowLinks';
import Logo from '../../../assets/Navbar/logo.png'

const contactLinks = [
    { route: "alpha", name: "Alpha" },
    { route: "beta", name: "Beta" },
    { route: "gamma", name: "Gamma" },
    { route: "xeta", name: "Xeta" }
]

const mobileMenu = [
    { name: "HOME", overFlowLinks: contactLinks },
    { name: "ABOUT US", overFlowLinks: contactLinks },
    { name: "ADMISSION", overFlowLinks: contactLinks },
    { name: "ACADEMIC", overFlowLinks: contactLinks },
    { name: "CODE OF CONDUCT", overFlowLinks: contactLinks },
    { name: "GALLERY", overFlowLinks: contactLinks },
    { name: "CBSE RULES", overFlowLinks: contactLinks },
    { name: "CONTACT US", overFlowLinks: contactLinks },
]

const NavMobile = ({ open, openTab }) => {

    const [selectedMenu, setSelectedMenu] = useState("");

    const setMenu = (menu) => {
        if (selectedMenu === menu) {
            setSelectedMenu("");
        } else {
            setSelectedMenu(menu);
        }
    }

    return (
        <div className={`z-50 nav_mobile ${!open && "close"}`}>

            <img
                className='main_logo z-50 fixed top-2 left-2 transition-all duration-500'
                src={Logo}
                alt="logo"
            />
            <AiOutlineRotateRight onClick={() => openTab(false)} />

            <div className='links flex flex-col mt-[8rem] select-none'>
                {
                    mobileMenu.map((menu) => {
                        return (
                            <>
                                <a
                                    className='link'
                                    onClick={() => setMenu(menu.name)}
                                >
                                    <HiOutlineChevronDoubleDown className={`${menu.name === selectedMenu ? "rotate" : ""}`} />
                                    {menu.name}
                                </a>
                                <OverflowLinks menuName={menu.name} selectedMenu={selectedMenu} links={menu.overFlowLinks} />

                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NavMobile
