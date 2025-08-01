import React from 'react';
import { useNavigate } from 'react-router-dom';
import greetsicon from '../../../assets/Greets_icon.png';

function CompleteMEPCard() {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-full flex items-center justify-center font-questrial px-4 relative">


            <div className="w-[92vw] max-w-screen h-full bg-green-700 rounded-[48px] rounded-br-none rounded-bl-none flex flex-col md:flex-row overflow-hidden">
                {/* Left Side - Content */}
                <div className="md:flex-1 flex flex-col justify-center py-2 md:py-5 px-6 md:mb-12 lg:mb-0 text-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug lg:mb-6">
                        Complete MEP Solutions, Tailored for Every Sector
                    </h1>
                    <p className="text-white text-sm md:text-xl font-semibold italic mb-2">
                        "End-to-end services for every sector"
                    </p>
                    <p className='lg:text-lg text-sm lg:mt-12'>
                        GREETS provides end-to-end MEP services—spanning design, planning, estimation, procurement, and execution—crafted to meet the unique needs of Residential, Commercial, Industrial, Healthcare, Hospitality, Educational, and Government projects.
                    </p>
                    <p className='lg:text-lg text-sm lg:mt-6 mt-1'>
                        From HVAC and fire protection to advanced BMS, water management, and automation, our integrated solutions are tailored to meet the evolving needs of modern infrastructure—across residential, commercial, industrial, and institutional sectors.
                    </p>
                    <div className="mt-8">
                        <button
                            onClick={() => navigate('/services')}
                            className="px-6 py-3 cursor-pointer border border-white rounded-bl-none rounded-[2rem] text-sm bg-green-700 text-white hover:bg-white hover:text-green-700 transition-all duration-200 hover:scale-105"
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