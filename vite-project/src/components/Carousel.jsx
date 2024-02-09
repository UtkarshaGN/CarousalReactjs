import React, { useState } from 'react'

const images = [
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg",
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner2-1680x900.jpg",
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg",
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner2-1680x900.jpg",
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg",
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner2-1680x900.jpg",
    "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg",
];

function Carousel() {

    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(current === images.lenght ? 0 : current + 1)

    }

    const previousSlide = () => {
        setCurrent(current === 0 ? images.lenght - 1 : current - 1)
    }
    return (
        <div>
            <div className='flex justify-evenly items-center p-5 h-screen'>
                <div className="left_arrow p-5 bg-gray-400 rounded-lg cursor-pointer" onClick={previousSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                </div>
                <div className="img">
                {images.map((item,index) =>
                current === index && (
                    <div className=' flex justify-center'><img className='w-[80%] rounded-2xl'  key={index} src={item} alt='img'/></div>
                    
                )
                )}
                </div>
                <div className="right_arrow p-5 bg-gray-400 rounded-lg cursor-pointer" onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default Carousel
