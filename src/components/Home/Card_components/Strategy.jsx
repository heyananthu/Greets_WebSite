import React from 'react';

function Strategy() {
    return (
        <div className="h-screen w-full flex items-center justify-center font-questrial px-4">
            <div className="w-[92vw] max-w-screen h-full rounded-[48px] rounded-br-none rounded-bl-none flex flex-col lg:flex-row overflow-hidden">
                {/* Left Side */}
                <div className="flex-1 flex flex-col items-center justify-center px-6 py-8  bg-[#f0f0f0]">
                    <h2 className="text-3xl  font-bold text-black mb-1 lg:mb-4 text-center  font-questrial">TECHNOLOGY</h2>
                    <p className='italic md:text-md text-sm text-center'>Engineered for impact. Delivered with purpose.</p>
                    <p className="text-green-700 text-md md:text-lg max-w-sm lg:mt-6 mt-2 text-center">
                    At GREETS, we integrate cutting-edge MEP technologies—smart sensors, automation, energy management, and BMS—to create intelligent infrastructure. Our solutions go beyond installation, delivering real-time efficiency, performance visibility, and operational control tailored to every environment.</p>
                </div>

                {/* Right Side */}
                <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 mb-12 md:mb-16 bg-white h-full lg:-mt-5">
                    <h2 className="text-3xl  font-bold text-black mb-1 lg:mb-4 font-questrial">QUALITY</h2>
                    <p className='italic md:text-md text-sm'>Built to precision. Delivered with purpose.</p>
                    <p className="text-green-700 text-md md:text-lg max-w-sm lg:mt-6 mt-2 text-center">
                    Our commitment to quality is built into every step—from concept to commissioning. Backed by certified professionals and rigorous QA/QC protocols, GREETS ensures that every system we deliver meets global benchmarks for reliability, safety, and performance.</p>
                </div>
            </div>
        </div>
    );
}

export default Strategy;
