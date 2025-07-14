import React from 'react'

import settingIconImage from '../../../assets/icons/setting-icon.png';
import boltIcon from '../../../assets/icons/thunder-icon.png';
import banner from '../../../assets/services-card1.avif'
function Mep() {
    return (
        <div className='font-questrial bg-gray-100 pt-1 h-screen w-full'>
            {/* <h1 className='text-center text-[43px] font-bold mb-2'>MEP (Mechanical, Electrical, and Plumbing) Services</h1> */}
            <div className="flex bg-gray-100  w-[92vw] max-w-screen mx-auto h-full rounded-[48px] rounded-br-none rounded-bl-none overflow-hidden ">
                {/* Left Side */}
                <div className="flex-1 flex md:flex-col flex-row  justify-center px-12 py-10 bg-white">
                    <div className="flex md:flex-row flex-col lg:gap-16 gap-4">
                        {/* Mechanical Services */}
                        <div className="flex flex-col items-start min-w-[340px]">
                            <div className="mb-4">
                                <span className="inline-flex items-center justify-center">
                                    <img src={settingIconImage} alt="Drop Icon" className="w-24 h-24 " />
                                </span>
                            </div>
                            <h1 className="lg:text-4xl text-2xl lg:text-nowrap mb-6 font-bold">
                                Mechanical Services <br />
                                (HVAC)
                            </h1>
                            <ul className="lg:text-lg text-sm font-semibold">
                                <li>
                                    <span className="text-black font-bold mr-2">*</span>
                                    Internal & External Lighting Design
                                </li>
                                <li>
                                    <span className="text-black font-bold mr-2">*</span>
                                    Power Distribution Systems
                                </li>
                                <li>
                                    <span className="text-black font-bold mr-2">*</span>
                                    Electrical Load Calculations
                                </li>
                                <li>
                                    <span className="text-black font-bold mr-2">*</span>
                                    Earthing & Lightning Protection
                                </li>
                                <li>
                                    <span className="text-black font-bold mr-2">*</span>
                                    UPS & Generator Systems
                                </li>
                                <li>
                                    <span className="text-black font-bold mr-2">*</span>
                                    Low Voltage Systems (CCTV, Access Control, etc.)
                                </li>
                                <li>
                                    <span className="text-black font-bold mr-2">*</span>
                                    Solar Power Integration & Energy Management
                                </li>
                            </ul>
                        </div>
                        {/* Electrical Services */}
                        <div className="flex flex-col items-start min-w-[320px]">
                            <div className="mb-4">
                                <span className="inline-flex items-center justify-center">
                                <img src={boltIcon} alt="Drop Icon" className="w-24 h-24 " />
                                </span>
                            </div>
                            <h1 className="lg:text-4xl text-2xl font-bold mb-6 ">
                                Electrical Services
                            </h1>
                            <ul className="lg:text-lg text-sm font-semibold">
                                <li>
                                    <span className="text- font-bold mr-2">*</span>
                                    Heating, Ventilation & Air Conditioning (HVAC) Design
                                </li>
                                <li>
                                    <span className="text-black font-bold mr-2">*</span>
                                    Chiller, VRF & Split AC Systems
                                </li>
                                <li>
                                    <span className="text-black font-bold mr-2">*</span>
                                    Ducting & Air Distribution Systems
                                </li>
                                <li>
                                    <span className="text-black font-bold mr-2">*</span>
                                    Ventilation & Smoke Extraction Systems
                                </li>
                                <li>
                                    <span className="text-black font-bold mr-2">*</span>
                                    Building Thermal Load Analysis
                                </li>
                                <li>
                                    <span className="text-black font-bold mr-2">*</span>
                                    Energy Efficiency Optimization
                                </li>
                                <li>
                                    <span className="text-black font-bold mr-2">*</span>
                                    Mechanical Equipment Sizing & Selection
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="flex-1 relative min-h-[600px] hidden md:block">
                    <img
                        src={banner}
                        alt="City"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
            </div>
        </div>
    )
}

export default Mep
