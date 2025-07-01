import React from 'react';

function Strategy() {
    return (
        <div className="h-screen w-full flex items-center justify-center font-questrial px-4">
            <div className="w-[92vw] max-w-screen h-full rounded-[48px] rounded-br-none rounded-bl-none flex flex-col md:flex-row overflow-hidden">
                {/* Left Side */}
                <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center bg-[#f0f0f0]">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-questrial">Strategy</h2>
                    <p className="text-[#0a9d3a] text-base md:text-sm max-w-md">
                        Describe the service and how customers or clients can benefit from it. It's an opportunity to add a short description with relevant details, like pricing, duration, and how to book.
                    </p>
                </div>

                {/* Right Side */}
                <div className="flex-1 flex flex-col items-center justify-center  py-8 text-center bg-white">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-questrial">Execution</h2>
                    <p className="text-[#0a9d3a] text-base md:text-sm max-w-md">
                        Describe the service and how customers or clients can benefit from it. It's an opportunity to add a short description with relevant details, like pricing, duration, and how to book.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Strategy;
