import React from 'react'
import { FaTint, FaFire } from 'react-icons/fa'
import banner from '../../../assets/services-card2.avif'

function Mep2() {
    return (
        <div className="flex bg-white w-[92vw] max-w-screen mx-auto min-h-[750px] rounded-[48px] rounded-br-none rounded-bl-none overflow-hidden">
            {/* Left Image */}
            <div className="w-[22rem] min-h-[600px] hidden lg:block relative">
                <img
                    src={banner}
                    alt="Construction"
                    className="w-full h-full object-cover grayscale"
                />
            </div>
            {/* Right Content */}
            <div className="flex-[2] flex flex-col justify-start  py-10 bg-white lg:pl-10 pl-8">
                <div className="flex md:flex-row flex-col lg:gap-20 gap-y-3  pt-6">
                    {/* Plumbing */}
                    <div className="flex flex-col items-start min-w-[340px]">
                        <div className="mb-4">
                            <span className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-700">
                                <FaTint className="text-white" size={70} />
                            </span>
                        </div>
                        <h1 className="lg:text-4xl text-2xl lg:text-nowrap mb-12 font-bold">Plumbing</h1>
                        <ul className="lg:text-lg text-sm font-semibold">
                            <li>
                                <span className="text-black font-bold mr-2">*</span>
                                Water Supply & Distribution Systems
                            </li>
                            <li>
                                <span className="text-black font-bold mr-2">*</span>
                                Drainage & Sewage Systems
                            </li>
                            <li>
                                <span className="text-black  font-bold mr-2">*</span>
                                Rainwater Harvesting Systems
                            </li>
                            <li>
                                <span className="text-black font-bold mr-2">*</span>
                                Pumping Stations & Sump Design
                            </li>
                            <li>
                                <span className="text-black font-bold mr-2">*</span>
                                Hot Water Systems (Solar, Heat Pump, etc.)
                            </li>
                            <li>
                                <span className="text-black font-bold mr-2">*</span>
                                Sanitary Fixture Selection & Layout
                            </li>
                        </ul>
                    </div>
                    {/* Fire Protection Services */}
                    <div className="flex flex-col items-start min-w-[340px]">
                        <div className="mb-4">
                            <span className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-700">
                                <FaFire className="text-white" size={70} />
                            </span>
                        </div>
                        <h1 className="lg:text-4xl text-2xl lg:text-nowrap mb-12 font-bold">Fire Protection Services</h1>
                        <ul className="lg:text-lg text-sm font-semibold ">
                            <li>
                                <span className="text-black font-bold mr-2">*</span>
                                Fire Detection & Alarm Systems
                            </li>
                            <li>
                                <span className="text-black font-bold mr-2">*</span>
                                Fire Fighting Systems (Sprinklers, Hydrants, Hose Reels)
                            </li>
                            <li>
                                <span className="text-black font-bold mr-2">*</span>
                                Fire Suppression Systems (FM-200, CO2, etc.)
                            </li>
                            <li>
                                <span className="text-black font-bold mr-2">*</span>
                                Emergency Lighting & Exit Signage Design
                            </li>
                            <li>
                                <span className="text-black font-bold mr-2">*</span>
                                NFPA, NBC, and Local Code Compliance
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mep2
