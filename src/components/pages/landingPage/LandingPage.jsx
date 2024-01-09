import './LandingPage.css'
import React from 'react'
import Card from './Card'
import { GoGoal } from "react-icons/go";
import { GiEyeShield } from "react-icons/gi";
import { FaMedal } from "react-icons/fa6";

const LandingPage = () => {
    return (
        <>
            <div className='landing_page w-full relative'>

                <div className='h-[90vh] w-full'>
                    <div className='z-0 h-[90vh] w-full absolute bg-[rgba(0,0,0,.5)]'></div>
                    <img className='z-0 h-full w-full object-cover' src="https://content.jdmagicbox.com/comp/sikar/w4/9999p1572.1572.180520153014.f9w4/catalogue/gurukripa-defence-and-sports-academy-sikar-ho-sikar-air-force-training-centres-vi8ww.jpg" alt="" />

                    <div className='text z-10 h-[90vh] w-full absolute top-0 text-[rgba(255,255,255,.8)] font-bold flex items-center justify-center px-[20vmax] text-center text-3xl leading-loose'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptate saepe quis soluta laboriosam, corrupti amet ullam veritatis. Aut, deleniti.
                    </div>
                </div>

                <div
                    className='cards w-full flex flex-wrap items-center justify-center translate-y-[-50%] gap-8 px-[2vmax]'
                >
                    <Card title="OUR MISSION" icon={<GoGoal />} />
                    <Card title="OUR VISION" icon={<GiEyeShield />} />
                    <Card title="AIMS AND OBJECTIVES" icon={<FaMedal />} />
                </div>
            </div>
        </>
    )
}

export default LandingPage
