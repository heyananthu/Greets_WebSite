import React from 'react'
import heroBanner from '../../assets/about-banner.avif';

function Hero() {
    return (
        <div className='font-questrial bg-[#eaeaea] pt-36 pb-12'>
            <div className='max-w-6xl px-14'>
                <h1 className='text-8xl font-bold leading-none mb-4'>Our Story</h1>
                <p className='text-lg mb-1 font-normal' >
                    GREETS is into MEP Design , Build , Supervise and Manage with expertise in sustainable design and exposure to Green building certifications . Head Quartered at India and with Operational presence in Tropical countries like Maldives , Gambia , Seychelles, Mauritius and Few countries in African continent . With extensive experience in managing complex projects across various sectors—such as Residential, Commercial, Industrial, Educational, Hospitals , Hospitality, Retails, Govt. projects, Airports, R & D Labs, Data centers etc. GREETS excels in Design management,  Cost estimation, planning, Procurement & Construction management. We serve both domestic and international clients with high-quality, comprehensive MEP construction services tailored to meet their needs. Our skilled team possesses the expertise and resources necessary to navigate today’s fast-paced and complex projects. At GREETS, we are driven by value and are committed to deliver customized solutions that align with customer project goals.                     </p>
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

