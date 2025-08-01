import React from 'react';
import greetsicon from '../../../assets/Greets_icon.png';
import { useNavigate } from 'react-router-dom';

function EcologicalTransformationCard() {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-full flex items-center justify-center font-questrial px-4 relative">

            
            <div className="w-[92vw] max-w-screen h-full bg-stone-300 rounded-[48px] rounded-br-none rounded-bl-none flex flex-col md:flex-row overflow-hidden">
                {/* Left Side - Content */} 
                <div className="md:flex-1 flex flex-col justify-center py-2 md:py-5 px-6 md:mb-12 lg:mb-0 text-center">
                    <h1 className="text-green-700 text-4xl md:text-5xl font-bold leading-snug lg:mb-6">
                        Driving Ecological Transformation
                    </h1>
                    <p className="text-green-700 text-sm md:text-xl font-semibold italic mb-2">
                        "Sustainable solutions for a better future"
                    </p>
                    <p className='lg:text-xl text-sm lg:mt-12'>
                        We are committed to delivering sustainable, cost-effective, and impactful MEP systems that support LEED and other green building certifications—ensuring every project contributes positively to the environment and community.
                    </p>
                    <p className='lg:text-xl text-sm lg:mt-6 mt-1'>
                        Our approach integrates cutting-edge green technologies with proven engineering principles, creating buildings that not only meet today's needs but also preserve resources for future generations. We prioritize energy efficiency, water conservation, and renewable energy integration in every project.
                    </p>
                    <div className="mt-8">
                        <button onClick={() => navigate('/services')} className="px-6 py-3 cursor-pointer border border-green-700 rounded-bl-none rounded-[2rem] text-sm bg-green-700 text-white hover:bg-white hover:text-green-700 transition-all duration-200 hover:scale-105">
                        Check Our Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EcologicalTransformationCard; 