import React from 'react'

const expertise = [
    ["RESIDENTIAL", "COMMERCIAL", "EDUCATIONAL"],
    ["HOSPITALITY", "HOSPITALS", "RETAIL"],
    ["SPORTS COMPLEXES", "GOVT PROJECTS", "AIRPORTS"],
    ["", "INDUSTRIES", ""]
];

function MepExpertise() {
    return (
        <div className="min-h-full bg-[#222] flex flex-col items-center py-8 font-questrial md:mt-36 mt-[90rem]">
            <h1 className="text-white text-center text-6xl md:text-7xl font-bold tracking-tight mt-24 mb-28">MEP Expertise</h1>
            <div className="w-full max-w-6xl flex flex-col items-center">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 px-4 md:px-0">
                    {expertise.flat().map((item, idx) => (
                        item ? (
                            <div key={item + idx} className="flex items-center lg:pl-12 mb-2">
                                <span className="text-white text-md font-bold text-center lg:text-left">{item}</span>
                            </div>
                        ) : <div key={idx}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MepExpertise
