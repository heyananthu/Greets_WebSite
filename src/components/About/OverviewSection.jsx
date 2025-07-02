import React from 'react';

function OverviewSection() {
    return (
        <div className='w-full py-12 px-4 md:px-8 lg:px-0'>
            <div className='w-full flex flex-col lg:flex-row items-center justify-between  lg:justify-end font-questrial gap-8'>

                {/* Title */}
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-center leading-tight'>
                        MEP <br /> OVERVIEW
                    </h1>
                </div>

                {/* Content Box */}
                <div className='w-full lg:w-[70%] flex justify-center lg:justify-end'>
                    <div className="bg-green-700 rounded-[40px] rounded-tr-none rounded-br-none h-auto lg:h-[38rem] w-full max-w-[54.9rem] py-10 px-6 sm:px-12">
                        <ol className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl space-y-4 md:space-y-5 lg:px-16 lg:py-20">
                            <li className='font-bold'><span className="text-black font-bold px-2">1)</span> DESIGN</li>
                            <li className='font-bold'><span className="text-black font-bold px-2">2)</span> PROJECT MANAGEMENT</li>
                            <li className='font-bold'><span className="text-black font-bold px-2">3)</span> EXECUTION</li>
                            <li className='font-bold'><span className="text-black font-bold px-2">4)</span> TRADING</li>
                            <li className='font-bold'><span className="text-black font-bold px-2">5)</span> ANNUAL MAINTENANCE</li>
                            <li className='font-bold'><span className="text-black font-bold px-2">6)</span> FUNDING</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OverviewSection;
