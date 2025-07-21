import React from 'react'
import MepExpertise from '../MepExpertise';
import Footer from '../../sharedcomponents/Footer';

const services = [
    ["HVAC", "IOT", "IOT"],
    ["ELECTRICAL", "NETWORKING", "SWIMMING POOL"],
    ["PLUMBING", "COMPRESSED AIR", "HEAT PUMP"],
    ["FIRE FIGHTING", "PARKING MANAGEMENT", "VESDA"],
    ["BMS", "STP", "WATER LEAK DETECTION"],
    ["SECURITY SYSTEM", "ETP", "ETP"],
    ["AUDIO VIDEO", "RAIN WATER TREATMENT", "RODENT REPELLENT SYSTEM"],
    ["HOME AUTOMATION", "DESALINATION PLANT", "GAS SUPRESSION SYSTEM"]
];

function Mep4() {
    return (
        <div>
            <div className="min-h-screen w-full bg-black flex flex-col items-center py-8 font-questrial ">
                <div className="w-full bg-[#232323] py-4 mb-8">
                    <h1 className="text-white text-center text-6xl md:text-7xl font-bold tracking-tight">MEP Services</h1>
                </div>
                <div className="w-full max-w-7xl flex flex-col items-center px-4">
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6 px-4 md:px-0">
                        {services.map((row, rowIdx) => (
                            row.map((service, colIdx) => (
                                <div key={service + rowIdx + colIdx} className="flex items-center mb-4">
                                    <span className="inline-block w-10 h-10 rounded-full bg-white mr-6"></span>
                                    <span className="text-white text-lg md:text-sm tracking-wide">{service}</span>
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            </div>
            {/* <div>
                <MepExpertise />
                <Footer />
            </div> */}
        </div>

    )
}

export default Mep4
