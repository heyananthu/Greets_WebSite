import React from 'react'
import banner from '../../assets/hero-banner.jpg'

function Hero() {
    return (
        <div className="px-4 sm:px-8 lg:px-16 mb-16 ">
            <div
                className="w-full h-[15rem] bg-cover bg-center md:h-[18rem] md:w-full  sm:h-[24rem] lg:h-[32rem] mt-24"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className="p-4">
                    <h1 className="text-3xl mt-6 sm:text-5xl lg:text-[5rem] text-white lg:leading-[6rem] font-questrial [text-shadow:_0_4px_12px_rgba(0,0,0,1)]">
                        Transforming the Built  <br className="hidden md:block" />
                        Environment with Expert MEP <br className="hidden md:block" />
                        Design & Sustainable Solutions
                    </h1>

                </div>
            </div>
        </div>
    )
}

export default Hero
