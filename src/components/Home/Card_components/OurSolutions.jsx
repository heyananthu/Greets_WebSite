import React from 'react';
import oursolution from '../../../assets/solutions.avif';

function OurSolutions() {
    return (
        <div className="h-screen w-full flex items-center justify-center font-questrial px-4">
            <div className="w-[92vw] max-w-screen h-full bg-[#e7e7e7] rounded-[48px] rounded-br-none rounded-bl-none flex flex-col md:flex-row overflow-hidden">
                {/* Left Side */}
                <div className="flex-1 flex items-center justify-center py-10 px-6">
                    <h1 className="text-[#0a9d3a] text-4xl sm:text-5xl md:text-4xl font-bold text-center leading-snug">
                        Our<br />Solutions
                    </h1>
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
