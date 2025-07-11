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
            <h1 className="text-white text-center text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight  mb-12 pt-8">
                MEP Expertise
            </h1>
            <div className="w-full max-w-6xl flex flex-col items-center">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8 px-4 md:px-0 py-8">
                    {expertise.flat().map((item, idx) => (
                        item ? (
                            <div key={item + idx} className="flex items-center justify-center mb-2">
                                <span className="text-white text-base md:text-lg lg:text-xl font-bold text-center">{item}</span>
                            </div>
                        ) : <div key={idx}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MepExpertise
