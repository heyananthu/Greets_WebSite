import React from 'react';
import { useNavigate } from 'react-router-dom';
import greetsicon from '../../../assets/Greets_icon.png';

function InnovationCard() {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-full flex items-center justify-center font-questrial px-4 relative">

            <div className="w-[92vw] max-w-screen h-full bg-green-700 text-white rounded-[48px] rounded-br-none rounded-bl-none flex flex-col md:flex-row overflow-hidden">
                {/* Left Side - Content */}
                <div className="md:flex-1 flex flex-col justify-center py-2 md:py-5 px-6 md:mb-12 lg:mb-0 text-center">
                    <h1 className=" text-3xl font-bold leading-snug lg:mb-6">
                        Passion-Driven MEP Innovation
                    </h1>
                    <p className=" text-sm  font-semibold italic mb-2">
                        "Innovation meets precision"
                    </p>
                    <p className='md:text-lg text-sm lg:mt-12'>
                        Our team thrives on delivering results that balance ecology, economy, and efficiency. Headquartered in India, with a presence in the Maldives, Mauritius, Seychelles, Gambia, and other tropical regions, we manage complex international projects with precision and care.
                    </p>
                    <p className='md:text-lg text-sm lg:mt-6 mt-1'>
                        With deep expertise across 20+ service verticals, we partner with clients from concept to commissioning—ensuring every project is smartly designed, precisely built, and future-ready. Our commitment: delivering engineered environments that are efficient, ecological, and built to last.
                    </p>
                    <div className="mt-28">
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

export default InnovationCard; 