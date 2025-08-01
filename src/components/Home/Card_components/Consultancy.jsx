import React from 'react';

function Consultancy() {
    return (
        <div>
            <div className="h-screen w-full flex items-center justify-center font-questrial px-4">
                <div className="w-[92vw] max-w-screen h-full rounded-[48px] rounded-br-none rounded-bl-none flex flex-col lg:flex-row overflow-hidden">
                    
                    {/* Left Side */}
                    <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 bg-[#f0f0f0]">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black text-center lg:mb-4 font-questrial">SUSTAINABILITY</h2>
                        <p className='italic md:text-md text-sm text-center'>Greener Systems. Smarter Performance</p>
                        <p className="text-green-700 text-md lg:text-lg max-w-sm lg:mt-6 mt-1 text-center">
                            At GREETS, sustainability is not a feature—it’s a foundation. We design MEP systems that reduce energy use, conserve water, lower emissions, and support LEED and green building certifications. Our goal is to deliver systems that restore ecological balance while maximizing building efficiency.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 mb-20 md:mt-20 bg-white">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-1 lg:mb-4 font-questrial">VALUE</h2>
                        <p className='italic md:text-md text-sm text-center'>Driven by Purpose. Focused on Results</p>
                        <p className="text-green-700 text-md lg:text-lg max-w-sm lg:mt-6 mt-2 text-center">
                            We measure success by the long-term value our systems bring. GREETS delivers tailored, high-performance MEP solutions that enhance building lifecycle, reduce operating costs, and align with your project's functional and commercial goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Consultancy;
