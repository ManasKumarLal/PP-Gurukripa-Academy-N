import React from 'react'
import { useNavigate } from 'react-router-dom'

const OverflowLinks = ({ menuName, selectedMenu, links }) => {

    const navigate = useNavigate();

    return (
        <div className={`${menuName === selectedMenu ? "openOverFlowLinks" : ""}`}>
            <div className='bg-[#2D308D] text-white w-[90%] rounded-xl'>
                {
                    links.map((link) => {
                        return (
                            <p
                                className='hover:bg-[rgba(225,225,225,.2)] active:bg-[rgba(225,225,225,.6)] transition-colors ease-in-out duration-200 line px-5 py-2 rounded-md'
                                key={link.route}
                                onClick={() => navigate(link.route)}
                            >
                                {link.name}
                            </p>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default OverflowLinks
