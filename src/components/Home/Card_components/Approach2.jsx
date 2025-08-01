import React from 'react'

function Approach2() {
    return (
        <div>
            <div className="h-screen w-full flex items-center justify-center font-questrial px-4">
                <div className="w-[92vw] max-w-screen h-full rounded-[48px] rounded-br-none rounded-bl-none flex flex-col lg:flex-row overflow-hidden">
                    {/* Left Side */}
                    <div className="flex-1 flex flex-col items-center justify-center px-6 py-8  bg-[#f0f0f0]">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black lg:mb-4 text-center  font-questrial">AFFORDABLE</h2>
                        <p className='italic md:text-md text-sm text-center'>Smart Engineering. Cost-Conscious Delivery.</p>
                        <p className="text-green-700 text-md lg:text-lg max-w-sm lg:mt-6 mt-1 text-center">
                            We engineer solutions that balance performance with project budgets—without compromise. Through value engineering, lifecycle planning, and optimized procurement, GREETS delivers cost-effective MEP systems that never sacrifice quality or sustainability.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 mb-12 md:mt-20 bg-white">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-1 lg:mb-4 font-questrial">TIME</h2>
                        <p className='italic md:text-md text-sm'>On Schedule. Without Shortcuts.</p>
                        <p className="text-green-700 text-md lg:text-lg max-w-sm lg:mt-6 mt-2 text-center">
                        We understand the importance of time in construction. GREETS brings structured planning, disciplined execution, and digital project tracking to ensure your MEP systems are delivered and commissioned on time—seamlessly integrated within your build schedule.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Approach2
