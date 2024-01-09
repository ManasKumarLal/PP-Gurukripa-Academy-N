import React from 'react'

const Slide = () => {
    return (
        <div className='bg-[rgba(225,225,225,.1)]'>
            <figure
                className='bg-[#31C3A2] absolute left-0 top-0'
                style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
            ></figure>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit voluptates natus, quam architecto dolores in numquam deleniti possimus ex a nesciunt iste recusandae dignissimos eveniet ratione accusamus est? Ad.</p>
            <h2 className='flex items-center gap-6'>
                <img className='w-[5rem] rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/024/095/208/small/happy-young-man-smiling-free-png.png" alt="" />
                Manas Kumar
            </h2>
        </div>
    )
}

export default Slide
