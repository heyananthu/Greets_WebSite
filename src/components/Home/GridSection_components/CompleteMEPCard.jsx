import React from 'react';
import { useNavigate } from 'react-router-dom';
import greetsicon from '../../../assets/Greets_icon.png';

function CompleteMEPCard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen h-auto sm:h-screen w-full flex items-center justify-center font-questrial px-2 sm:px-4 py-4 sm:py-0 relative">
            <div className="w-[96vw] sm:w-[92vw] max-w-screen min-h-[90vh] sm:h-full bg-green-700 rounded-[24px] sm:rounded-[48px] rounded-br-none rounded-bl-none flex flex-col overflow-hidden">
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 text-center">
                    {/* Main Heading */}
                    <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight sm:leading-snug mb-3 sm:mb-4 md:mb-6 max-w-4xl">
                        Complete MEP Solutions, Tailored for Every Sector
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-white text-xs sm:text-sm md:text-base font-semibold italic mb-4 sm:mb-6 opacity-90">
                        "End-to-end services for every sector"
                    </p>
                    
                    {/* Description Paragraphs */}
                    <div className="space-y-3 sm:space-y-4 md:space-y-6 max-w-4xl">
                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed'>
                            GREETS provides end-to-end MEP services—spanning design, planning, estimation, procurement, and execution—crafted to meet the unique needs of Residential, Commercial, Industrial, Healthcare, Hospitality, Educational, and Government projects.
                        </p>
                        {/* <p className='text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed'>
                            From HVAC and fire protection to advanced BMS, water management, and automation, our integrated solutions are tailored to meet the evolving needs of modern infrastructure—across residential, commercial, industrial, and institutional sectors.
                        </p> */}
                    </div>
                    
                    {/* Button */}
                    <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                        <button
                            onClick={() => navigate('/services')}
                            className="px-4 sm:px-6 py-2 sm:py-3 cursor-pointer border border-white rounded-bl-none rounded-[1.5rem] sm:rounded-[2rem] text-xs sm:text-sm bg-green-700 text-white hover:bg-white hover:text-green-700 transition-all duration-200 hover:scale-105 font-medium"
                        >
                            Check Our Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompleteMEPCard; 