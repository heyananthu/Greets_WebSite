import React from 'react';

function OverviewSection() {
    return (
        <div className='w-full py-2 px-4 md:px-8 lg:px-0'>
            <div className='w-full md:h-[31rem] bg-green-700 flex flex-col lg:flex-row items-center justify-between  lg:justify-end font-questrial gap-8 rounded-[1rem]'>

                {/* Title */}
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                    <h1 className='text-3xl md:text-5xl  font-bold text-center leading-tight py-5'>
                        MEP <br /> OVERVIEW
                    </h1>
                </div>

                {/* Content Box */}
                <div className='w-full lg:w-[70%] flex justify-center lg:justify-end'>
                    <div className="w-full max-w-[54.9rem] py-10 px-6 sm:px-12">
                        <div className="grid gap-4 md:gap-1 lg:px-16 lg:py-20">
                            {[
                                'DESIGN',
                                'PROJECT MANAGEMENT',
                                'EXECUTION',
                                'TRADING',
                                'ANNUAL MAINTENANCE',
                                'FUNDING'
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-4 p-4  duration-300"
                                >
                                    <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                                    <span className="text-white text-lg font-bold">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OverviewSection;
