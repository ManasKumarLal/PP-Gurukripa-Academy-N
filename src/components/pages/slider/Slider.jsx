import './slider.css';
import React, { useRef, useState } from 'react';
import Slide from './Slide'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { EffectCreative } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <div className="slider relative w-full h-[45rem] text-white">

                <p className='absolute z-0 top-0 left-0 w-full h-full bg-[rgba(0,0,0,.87)]'></p>

                <div className='absolute z-10 top-0 left-0 w-full h-full'>
                    <h1 className='text-3xl'>Services & Treatments</h1>

                    <figure className='w-full flex items-center gap-3 mt-5 mb-20'>
                        <figure className='h-4 w-4 bg-[red] flex items-center justify-center rotate-45'>
                            <p className='w-2.5 h-2.5 border-2 border-white rounded-full'></p>
                        </figure>
                        <figure className='h-[2px] w-14 bg-[red]'></figure>
                    </figure>

                    <Swiper
                        grabCursor={true}
                        effect={'creative'}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                opacity: 0,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            },
                        }}
                        loop={true}
                        modules={[EffectCreative]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Slide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div >
        </>
    );
}
