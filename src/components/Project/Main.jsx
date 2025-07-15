import React from 'react'
import beachImg from '../../assets/project-img1.jpg'
import buildingImg from '../../assets/project-img2.avif'

function Main() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-6 mt-28">
            <div className="w-full max-w-screen md:px-5 px-2 grid grid-cols-1 md:grid-cols-[1.4fr_2fr] gap-6 rounded-[2rem]">
                {/* Left column */}
                <div className="flex flex-col gap-6 w-full font-fahkwang">
                    {/* Top card */}
                    <div className="bg-[#ffe48c] rounded-[1.3rem] flex flex-col items-center justify-center md:p-10 p-5 md:h-[380px] w-full h-full">
                        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-center">Our Projects</h2>
                        <p className="text-center text-base">
                            We deliver innovative, sustainable, and high-quality design and engineering solutions across residential, commercial, hospitality, and mixed-use developments worldwide.
                        </p>
                    </div>
                    {/* Bottom image */}
                    <img
                        src={beachImg}
                        alt="Beach Project"
                        className="rounded-[2rem] object-cover w-full h-[320px] md:h-[500px]"
                    />
                </div>
                {/* Right column */}
                <div className="w-full">
                    <img
                        src={buildingImg}
                        alt="Building Project"
                        className="rounded-[2rem] object-cover w-full h-full sm:h-[700px] md:h-[900px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Main
