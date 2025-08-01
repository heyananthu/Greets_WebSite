import React, { useState, useEffect } from 'react';
import banner1 from '../../assets/banner/banner1.webp'
import banner2 from '../../assets/banner/banner2.jpg'
import banner3 from '../../assets/banner/banner3.avif'
import banner7 from '../../assets/banner/banner7.webp'
import transform from '../../assets/transform.avif'

function TransformingSolution() {
    const [currentBanner, setCurrentBanner] = useState(0);
    const banners = [transform,banner7,banner1, banner2, banner3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % banners.length);
        }, 3000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <div className="relative h-fit md:h-screen w-full py-12  overflow-hidden">
            {/* Rotating Banner Backgrounds */}
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentBanner ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${banner})` }}
                ></div>
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full px-6 sm:px-10 md:px-20 lg:pl-36 lg:pt-20">
                <div className="text-white space-y-6 md:space-y-24 font-questrial max-w-6xl text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] mb-4 md:mb-8">
                        Building Tomorrow with Green <br className='hidden lg:block' />
                        Transforming Solutions
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg max-w-4xl sm:max-w-5xl">
                        <span className='font-bold'>Dummy : </span>
                        Dummy : Welcome to Green Transforming Solutions, where our passion lies in blending innovative architecture with sustainability. Our mission is to redefine space and functionality while considering the impact on our planet. With a hands-on approach and extensive experience in architecture, I am dedicated to crafting unique and environmentally conscious designs that meet the needs of our clients. Let's collaborate to build a future that prioritizes both beauty and functionality in every project we undertake. Welcome to Green Transforming Solutions, where our passion lies in blending innovative architecture with sustainability. Our mission is to redefine space and functionality while considering the impact on our planet. With a hands-on approach and extensive experience in architecture, I am dedicated to crafting unique and environmentally conscious designs that meet the needs of our clients. Let's collaborate to build a future that prioritizes both beauty and functionality in every project we undertake.                    </p>
                </div>
            </div>
        </div>
    );
}

export default TransformingSolution;
