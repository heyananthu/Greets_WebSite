import React from 'react'
import heroBanner from '../../assets/about-banner.avif';

function Hero() {
    return (
        <div className='font-questrial bg-[#eaeaea] pt-36 pb-12'>
            <div className='max-w-6xl px-14'>
                <h1 className='text-8xl font-bold leading-none mb-4'>Our Story</h1>
                <p className='text-lg mb-1 font-normal' > Founded in 2015, GREETS is a leading MEP design and project management firm headquartered in India, <br />with a strong presence across tropical regions like the Maldives, Seychelles, and parts of Africa.<br />We specialize in sustainable MEP solutions for complex projects across sectors including airports, <br />resorts, high-rises, industries and data centers. <br />Driven by value and guided by a passion for ecological transformation, we deliver effective,<br /> affordable and remarkable design solutions that meet global standards.</p>
                <p className='italic text-lg  font-normal'> "To lead an ecological transformation toward a built environment that is socially just, culturally rich, and ecologically restorative."</p>

            </div>
            <div className='flex justify-end lg:pr-20 pr-8'>
                <div>
                    <img src={heroBanner} alt="Tree" className="lg:w-[240px] lg:h-[240px] md:w-[150px] md:h-[150px] w-[60px] h-[60px] object-cover rounded-full" />
                </div>
            </div>

        </div>
    )
}

export default Hero

