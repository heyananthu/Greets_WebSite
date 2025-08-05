import React from 'react';
import greetsicon from '../../../assets/Greets_icon.png';
import { useNavigate } from 'react-router-dom';

function EcologicalTransformationCard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen h-auto sm:h-screen w-full flex items-center justify-center font-questrial px-2 sm:px-4 py-4 sm:py-0 relative">
            <div className="w-[96vw] sm:w-[92vw] max-w-screen min-h-[90vh] sm:h-full bg-stone-300 rounded-[24px] sm:rounded-[48px] rounded-br-none rounded-bl-none flex flex-col overflow-hidden">
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 text-center">
                    {/* Main Heading */}
                    <h1 className="text-green-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight sm:leading-snug mb-3 sm:mb-4 md:mb-6 max-w-4xl">
                        Driving Ecological Transformation
                    </h1>

                    {/* Subtitle */}
                    <p className="text-green-700 text-xs sm:text-sm md:text-base font-semibold italic mb-4 sm:mb-6 opacity-90">
                        "Sustainable solutions for a better future"
                    </p>

                    {/* Description Paragraphs */}
                    <div className="space-y-3 sm:space-y-4 md:space-y-6 max-w-4xl">
                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed'>
                            We are committed to delivering sustainable, cost-effective, and impactful MEP systems that support LEED and other green building certifications—ensuring every project contributes positively to the environment and community.
                        </p>
                        {/* <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed'>
                            Our approach integrates cutting-edge green technologies with proven engineering principles, creating buildings that not only meet today's needs but also preserve resources for future generations. We prioritize energy efficiency, water conservation, and renewable energy integration in every project.
                        </p> */}
                    </div>

                    {/* Button */}
                    <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                        <button
                            onClick={() => navigate('/services')}
                            className="px-4 sm:px-6 py-2 sm:py-3 cursor-pointer border border-green-700 rounded-bl-none rounded-[1.5rem] sm:rounded-[2rem] text-xs sm:text-sm bg-green-700 text-white hover:bg-white hover:text-green-700 transition-all duration-200 hover:scale-105 font-medium"
                        >
                            Check Our Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EcologicalTransformationCard; 