import React from 'react'

const expertise = [
    ["RESIDENTIAL", "COMMERCIAL", "EDUCATIONAL"],
    ["HOSPITALITY", "HOSPITALS", "RETAIL"],
    ["SPORTS COMPLEXES", "GOVT PROJECTS", "AIRPORTS"],
    ["", "INDUSTRIES", ""]
];

function MepExpertise() {
    return (
        <div className="bg-[#222] flex flex-col items-center py-8 font-questrial">
            <h1 className="text-white text-center text-5xl  md:text-6xl lg:text-8xl font-bold tracking-tight mb-8 sm:mb-12 pt-6 sm:pt-8">
                MEP Expertise
            </h1>
            <div className="w-full max-w-6xl flex flex-col items-center px-2 sm:px-4">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 sm:gap-y-10 gap-x-4 sm:gap-x-8 py-6 sm:py-8">
                    {expertise.flat().map((item, idx) => (
                        item ? (
                            <div
                                key={item + idx}
                                className="flex items-center justify-center md:justify-start mb-2 md:pl-12"
                            >
                                <span className="text-white text-sm sm:text-base md:text-md font-bold text-center md:text-left w-full">
                                    {item}
                                </span>
                            </div>
                        ) : <div key={idx}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MepExpertise
