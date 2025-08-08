import React from 'react'
import beachImg from '../../assets/villadevbanner.jpg'
import buildingImg from '../../assets/banner/project-banner.avif'
import KeyProject from './Project_sub/KeyProject'

function Main() {
    return (
        <div className='bg-gray-100'>
            {/* Hero Section with Background Image */}
            <div className="relative w-full h-screen mt-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={buildingImg}
                        alt="Modern Architecture Project"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex items-center justify-center h-full px-4 font-questrial">
                    {/* Central Content Card */}
                    <div className="bg-white opacity-70 rounded-3xl px-8 py-12 md:px-5 md:py-10 md:h-[15rem] md:w-[32rem] max-w-4xl mx-auto text-center shadow-2xl">
                        <h1 className="text-3xl  lg:text-5xl font-bold text-black mb-6 ">
                            Our Projects
                        </h1>
                        <p className="text-sm md:text-lg  text-black leading-relaxed max-w-3xl mx-auto ">
                            We deliver innovative, sustainable, and high-quality design and engineering solutions across residential, commercial, hospitality, and mixed-use developments worldwide.
                        </p>
                    </div>
                </div>

                {/* Decorative Elements */}
                {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div> */}
            </div>

            <KeyProject />
        </div>
    )
}

export default Main
