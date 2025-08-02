import React, { useState, useEffect } from 'react'
import banner1 from '../../assets/banner/banner1.webp'
import banner2 from '../../assets/banner/banner2.jpg'
import banner3 from '../../assets/banner/banner3.avif'
import banner4 from '../../assets/banner/banner4.jpeg'
import banner6 from '../../assets/banner/banner6.webp'

function Hero() {
    const [currentBanner, setCurrentBanner] = useState(0);
    const banners = [banner3, banner4, banner2, banner6];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % banners.length);
        }, 4000); // Change banner every 5 seconds

        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <div className="mb-16 relative">
            <div className="w-full h-[19rem] md:h-[18rem] sm:h-[24rem] lg:h-[35rem] relative overflow-hidden">
                {/* Banner Images with Fade Effect */}
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentBanner ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={banner}
                            alt={`Banner ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* Gray Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-5"></div>

                {/* Bottom White Gradient Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-48 z-10 pointer-events-none bg-gradient-to-t from-black/90 to-transparent"></div>

                {/* Overlay Content */}
                <div className="p-4 relative z-20 lg:px-16 flex md:items-center items-start">
                    {/* <h1 className="text-3xl mt-4 sm:text-5xl lg:text-[5.5rem] text-white lg:leading-[6rem] font-questrial [text-shadow:_0_4px_12px_rgba(0,0,0,1)]">
                        Transforming the Built  <br className="hidden md:block" />
                        Environment with Expert <br className="hidden md:block" /> MEP
                        Design & Sustainable <br className="hidden md:block" /> Solutions
                    </h1> */}
                </div>
            </div>
        </div>
    )
}

export default Hero
