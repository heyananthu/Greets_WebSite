import React from 'react';
import banner from '../../assets/about-approach.avif';

const circles = [
    { label: 'TECHNOLOGY', size: 'w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40', position: 'left-[3rem] top-[9rem] md:left-[8rem] md:top-[10rem] lg:left-24 lg:top-[9rem]', z: 'z-10', extra: '-translate-x-1/3 translate-y-1/3' },
    { label: 'QUALITY', size: 'w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40', position: 'left-[4.5rem] top-[7rem] md:left-[10rem] md:top-[7rem] lg:left-32 lg:top-20', z: 'z-20', extra: '' },
    { label: 'AFFORDABLE', size: 'w-32 h-32 md:w-48 md:h-48 lg:w-52 lg:h-52', position: 'left-[9rem] top-[3rem] md:left-[18rem] md:top-[3rem] lg:left-68 lg:top-0', z: 'z-30', extra: '' },
    { label: 'TIME', size: 'w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40', position: 'left-[15rem] top-[7rem] md:left-[28rem] md:top-[8rem] lg:left-[28rem] lg:top-20', z: 'z-40', extra: '' },
    { label: 'SUSTAINABILITY', size: 'w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40', position: 'left-[19rem] top-[11rem] md:left-[34rem] md:top-[13rem] lg:left-[34rem] lg:top-48', z: 'z-40', extra: '' },
];

function Approach() {
    return (
        <div className="w-full flex flex-col lg:flex-row font-questrial mt-3 mb-20 p-4 md:p-0">
            {/* Left: Banner with Text */}
            <div
                className="relative flex-1 min-h-[590px] flex items-center justify-center"
                style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <span className="text-white text-5xl sm:text-6xl md:text-8xl font-light absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-center">
                    Approach
                </span>
            </div>

            {/* Right: Green Circle Container */}
            <div className="relative flex-1 bg-green-700 min-h-[590px] rounded-tl-[40px] rounded-bl-[40px] overflow-hidden flex items-center justify-center">
                <div className="relative w-full h-[28rem] max-w-6xl mx-auto overflow-x-auto md:overflow-visible lg:pt-12 pt-12 pr-12">
                    <div className="relative w-[700px] lg:w-full h-full ">
                        {circles.map((circle, index) => (
                            <div
                                key={index}
                                className={`absolute ${circle.position} ${circle.size} bg-black rounded-full border border-white flex items-center justify-center ${circle.z} ${circle.extra}`}
                            >
                                <span className="text-white text-xs sm:text-sm lg:text-lg font-light text-center px-2">
                                    {circle.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Approach;
