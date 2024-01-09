import React from 'react'
import { useNavigate } from 'react-router-dom'

const OverflowLinks = ({ links }) => {

    const navigate = useNavigate();

    return (
        <div>
            {
                links.map((link) => {
                    return <p
                    key={link.route}
                    className='hover:text-white transition-colors duration-300'
                        onClick={() => navigate(link.route)}
                    >
                        {link.name}
                    </p>
                })
            }
        </div>
    )
}

export default OverflowLinks
