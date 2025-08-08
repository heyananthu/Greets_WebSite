import React from 'react'
import { FaTint, FaFire } from 'react-icons/fa'
import banner from '../../../assets/banner/service-banner2.jpg'
import { RiDropFill } from "react-icons/ri";
import dropIcon from '../../../assets/icons/drop-icon.png';
import fireIcon from '../../../assets/icons/fire-icon.png';
function Mep2() {
    return (
        <div className="flex flex-col md:flex-row bg-white  w-[92vw] max-w-screen mx-auto h-screen rounded-[32px] md:rounded-[48px] rounded-br-none rounded-bl-none overflow-hidden font-questrial">
            {/* Left Image */}
            <div className="w-[22rem] min-h-[600px] hidden lg:block relative">
                <img
                    src={banner}
                    alt="Construction"
                    className="w-full h-full object-right "
                />
            </div>
            {/* Right Content */}
            <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-12  md:py-10 bg-white">
                <div className="flex flex-col md:flex-row lg:gap-16 gap-4 lg:-mt-32">
                    {/* Plumbing */}
                    <div className="flex flex-col items-start min-w-0 md:min-w-[340px]">
                        <div className='flex md:flex-col gap-2'>
                            {/* <div className="md:mb-4">
                                    <span className="inline-flex items-center justify-center">
                                        <img src={dropIcon} alt="Drop Icon" className="md:w-24 md:h-24 h-12 w-12 " />
                                    </span>
                                </div> */}
                            <h1 className="lg:text-4xl text-2xl lg:text-nowrap md:mb-6 mb-1 font-bold">Plumbing</h1>
                        </div>
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
                                <span className="text-black font-bold mr-2">*</span>
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
                    <div className="flex flex-col items-start min-w-0 md:min-w-[320px]">
                        <div className='flex items-center md:flex-col gap-2'>
                            {/* <div className="md:mb-4">
                                    <span className="inline-flex items-center justify-center">
                                        <img src={fireIcon} alt="Drop Icon" className="md:w-24 md:h-24 h-12 w-12 " />
                                    </span>
                                </div> */}
                            <h1 className="lg:text-4xl text-2xl font-bold md:mb-6  mb-1">
                                Fire Protection Services
                            </h1>
                        </div>
                        <ul className="lg:text-lg text-sm font-semibold">
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
