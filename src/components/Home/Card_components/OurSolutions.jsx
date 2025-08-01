import React from 'react';
import oursolution from '../../../assets/solutions.avif';
import banner from '../../../assets/our-approach3.jpg'
function OurSolutions() {
    return (
        <div className="h-screen w-full flex items-center justify-center font-questrial px-4">
            <div className="w-[92vw] max-w-screen h-full bg-[#e7e7e7] rounded-[48px] rounded-br-none rounded-bl-none flex flex-col md:flex-row overflow-hidden">
                {/* Left Side */}
                <div className="md:flex-1 flex flex-col items-center justify-center py-2 md:py-5 px-6 md:mb-12 lg:mb-0">
                    <h1 className="text-green-700 text-4xl  md:text-5xl font-bold leading-snug  lg:mb-6">
                        Our Approach
                    </h1>
                    <p className="text-black text-sm  font-semibold italic mb-2">
                        "Helping you make the right decision"
                    </p>
                    <p className='md:text-lg text:sm lg:mt-12 text-green-700'>
                        At GREETS,<br />
                        we offer a comprehensive spectrum of MEP (Mechanical, Electrical, and Plumbing) services engineered for performance, sustainability, and long-term value.

                        From HVAC and fire protection to advanced BMS, water management, and automation, our integrated solutions are tailored to meet the evolving needs of modern infrastructure—across residential, commercial, industrial, and institutional sectors.
                    </p>
                    <p className='lg:text-xl text:sm lg:mt-6 mt-1 text-green-700'>
                        With deep expertise across 20+ service verticals, we partner with clients from concept to commissioning—ensuring every project is smartly designed, precisely built, and future-ready. Our commitment: delivering engineered environments that are efficient, ecological, and built to last.                     </p>

                </div>

                {/* Right Side */}
                <div className="flex-1 h-[250px] sm:h-[400px] md:h-auto hidden md:block">
                    <img
                        src={banner}
                        alt="Our Solutions"
                        className="w-full h-full  object-cover md:rounded-r-[48px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default OurSolutions;
