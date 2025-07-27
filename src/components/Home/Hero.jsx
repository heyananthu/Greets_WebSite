import React from 'react'
import heroVideo from '../../assets/video/banner_video.mp4'

function Hero() {
    return (
        <div className=" mb-16 relative">
            <div className="w-full h-[15rem] md:h-[18rem] sm:h-[24rem] lg:h-[32rem] mt-24 relative overflow-hidden">
                {/* Video Background */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                {/* Gray Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-cyan-400/20 z-5"></div>
                {/* Bottom White Gradient Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-48 z-10 pointer-events-none bg-gradient-to-t from-white to-transparent"></div>
                {/* Overlay Content */}
                <div className="p-4 relative z-20 lg:px-16 flex md:items-center items-start">
                    <h1 className="text-3xl mt-4 sm:text-5xl lg:text-[5.5rem] text-white lg:leading-[6rem] font-questrial [text-shadow:_0_4px_12px_rgba(0,0,0,1)]">
                        Transforming the Built  <br className="hidden md:block" />
                        Environment with Expert <br className="hidden md:block" /> MEP 
                        Design & Sustainable <br className="hidden md:block" /> Solutions
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Hero
