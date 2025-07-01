import React from 'react';
import gridimg from '../../assets/gird-img.jpg';
import icon from '../../assets/gridsection-icon.svg'

function GridSection() {
    return (
        <div className='p-4 md:p-0 font-questrial'>
            <div className='font-[var(--font-questrial)]'>
                {/* Top Row */}
                <div className="flex flex-col md:flex-row md:justify-between md:gap-4 lg:gap-4 mb-6 w-full mx-auto">
                    {/* Left Block */}
                    <div className="w-full md:flex-1 min-w-0 lg:ml-16">
                        <div className="bg-green-700 text-white p-6 md:p-8 rounded-tr-[2.5rem] shadow h-[15rem] md:h-[19rem] flex flex-col justify-between">
                            <div className='lg:px-6 lg:py-6'>
                                <h2 className="text-2xl lg:text-4xl font-bold mb-4">React</h2>
                                <p className="text-sm md:text-base">
                                    Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.
                                </p>
                            </div>
                            <div className='lg:px-6'>
                                <button className="mt-6 px-6 py-3 cursor-pointer border border-black rounded-bl-none rounded-[2rem] text-sm bg-green-700 text-black hover:bg-black hover:text-green-400 transition-all duration-200">
                                    Schedule a Free Consultation
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Block */}
                    <div className="w-full md:flex-1 min-w-0">
                        <div className="bg-stone-300 p-6 md:p-8 rounded-tl-[2.5rem] shadow h-[15rem] md:h-[19rem] flex flex-col justify-between">
                            <div className='lg:px-6 lg:py-8'>
                                <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-2">Revitalize</h2>
                                <p className="text-green-700 text-sm md:text-base  md:w-3/4">
                                    Use this space to promote the business, its products or its services.
                                </p>
                            </div>
                            <div className='lg:px-6'>
                                <button className="px-6 py-3 cursor-pointer border border-white rounded-bl-none rounded-[2rem] text-sm bg-green-700 text-white hover:bg-white hover:text-black transition-all duration-200 w-full md:w-[15rem]">
                                    Read Our Latest Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row md:justify-start gap-6 w-full">
                    {/* Image */}
                    <div className="relative w-full md:w-[27.5rem] h-[12rem] md:h-[14rem] rounded-r-[2.5rem] overflow-hidden">
                        <img
                            src={gridimg}
                            alt="Designer"
                            className="w-full h-full object-cover rounded-r-[2.5rem]"
                        />
                        <div className="absolute inset-0 bg-black opacity-60 rounded-r-[2.5rem]"></div>
                    </div>

                    {/* Relaunch Block */}
                    <div className="bg-stone-200 p-6 md:p-10 rounded-[2.5rem] shadow h-auto  md:h-[20rem] lg:h-[20rem] w-full md:w-[32rem] lg:w-[46rem] flex flex-col ">
                        <div className='lg:px-6'>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Relaunch</h2>
                            <p className="text-green-700 text-sm md:text-base mb-4 lg:w-[78%]">
                                Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.
                            </p>
                        </div>
                        <div className='lg:px-6'>
                            <button className="px-6 py-3 cursor-pointer border border-white rounded-bl-none rounded-[2rem] text-sm bg-black text-white hover:bg-green-400 hover:text-black transition-all duration-200 w-full md:w-[15rem]">
                                Check Our Solutions
                            </button>
                        </div>
                    </div>

                    {/* Icon Block */}
                    <div className="bg-green-700 flex items-center justify-center rounded-[2.5rem] p-6 md:pr-8 h-[14rem] md:h-[14rem] w-full md:w-[17rem] ">
                        <img src={icon} alt="icon" className='size-56' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridSection;
