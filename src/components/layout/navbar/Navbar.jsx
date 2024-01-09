import React, { useState } from 'react'
import NavPC from './NavPC'
import NavMobile from './NavMobile'

const Navbar = () => {

    const [open, setOpen] = useState(false);
    console.log(open)
    const openTab = (bool) => {
        setOpen(bool)
    }

    return (
        <>
            <div className='navbar'>
                <NavPC openTab={openTab} open={open} />
                <NavMobile openTab={openTab} open={open} />
            </div>
        </>
    )
}

export default Navbar
