import React from 'react';
import oursolution from '../../../assets/solutions.avif';

function OurSolutions() {
    return (
        <div className="h-screen w-full flex items-center justify-center font-questrial px-4">
            <div className="w-[92vw] max-w-screen h-full bg-[#e7e7e7] rounded-[48px] rounded-br-none rounded-bl-none flex flex-col md:flex-row overflow-hidden">
                {/* Left Side */}
                <div className="flex-1 flex flex-col items-center  py-5 px-6">
                    <h1 className="text-green-700 text-4xl sm:text-5xl md:text-5xl font-bold leading-snug mb-6">
                        Our Approach
                    </h1>
                    <p className="text-black text-xl font-semibold italic">
                        "Helping you make the right decision."
                    </p>
                    <p className='text-xl mt-12 e'>
                        At GREETS,<br />
                        we offer a full spectrum of MEP (Mechanical, Electrical, and Plumbing) services designed to power sustainable, smart, and efficient infrastructure.<br />
                        From HVAC systems to advanced BMS, fire safety, water management & automation<br />
                        Our integrated solutions support everything from large-scale developments to high-performance buildings.
                    </p>
                    <p className='text-xl mt-6'>
                        With our expertise across 20+ service verticals, we help you design, build, and maintain spaces that are future-ready, eco-friendly, and fully optimized.
                    </p>
                    {/* <ul className="space-y-4 w-full max-w-xs mx-auto">
                        {['TECHNOLOGY', 'QUALITY', 'AFFORDABLE', 'TIME', 'SUSTAINABILITY'].map((point) => (
                            <li key={point} className="flex items-center text-lg font-semibold text-black">
                                <span className="text-green-700 mr-3 text-xl">•</span> {point}
                            </li>
                        ))}
                    </ul> */}
                </div>

                {/* Right Side */}
                <div className="flex-1 h-[250px] sm:h-[400px] md:h-auto">
                    <img
                        src={oursolution}
                        alt="Our Solutions"
                        className="w-full h-full object-cover md:rounded-r-[48px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default OurSolutions;
