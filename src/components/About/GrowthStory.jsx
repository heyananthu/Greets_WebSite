import React, { useState } from 'react'
import { LuCalendarDays } from "react-icons/lu";
import { motion } from 'framer-motion';
import banner from '../../assets/banner/growthstory-banner.avif';

const growthData = [
    { year: '2016', isGreen: false, services: ['MEP DESIGN'] },
    { year: '2018', isGreen: true, services: ['MEP DESIGN', 'PMC'] },
    { year: '2021', isGreen: false, services: ['MEP DESIGN', 'PMC', 'TRADE'] },
    { year: '2023', isGreen: true, services: ['MEP DESIGN', 'PMC', 'TRADE', 'EXECUTION'] },
    { year: '2024', isGreen: false, services: ['MEP DESIGN', 'PMC', 'TRADE', 'EXECUTION', 'AMC'] },
    { year: '2025', isGreen: true, services: ['MEP DESIGN', 'PMC', 'TRADE', 'EXECUTION', 'AMC', 'INTL LOCAL', 'Presence'] },
];

function GrowthStory() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="bg-[#eaeaea]">
            {/* Title */}
            <h1 className="text-center font-questrial font-black text-gray-800 text-3xl md:text-5xl uppercase mb-2 py-4">
                Growth Story
            </h1>

            {/* Banner Background */}
            <div
                className="font-questrial min-h-screen py-10 px-4 sm:px-6 md:px-8"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundColor: '#f8fafc',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-7xl mx-auto">
                    {/* Cards Grid */}
                    <motion.div
                        className="
                            grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 
                            gap-8 lg:gap-x-20 
                            justify-items-center
                        "
                        animate={{
                            x: [0, -8, 8, -8, 8, 0]
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }}
                    >
                        {growthData.map((entry, idx) => (
                            <div
                                key={entry.year}
                                className={`
                                    rounded-3xl p-6 sm:p-8 shadow-lg transition-all cursor-pointer duration-300 
                                    w-full max-w-sm md:max-w-md lg:w-[26rem] overflow-hidden
                                    ${entry.isGreen
                                        ? 'bg-green-700 text-white'
                                        : 'bg-[#eaeaea] text-gray-800'
                                    }
                                `}
                                style={{ minHeight: '390px', height: '440px' }}
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <motion.div
                                    animate={{
                                        y: hoveredCard === idx ? -10 : 0,
                                        transition: { duration: 0.2, ease: "easeOut" }
                                    }}
                                >
                                    {/* Calendar Icon */}
                                    <div className="flex justify-center mb-4">
                                        <motion.div
                                            animate={{
                                                rotate: hoveredCard === idx ? 45 : 0,
                                                transition: { duration: 0.3, ease: "easeInOut" }
                                            }}
                                        >
                                            <LuCalendarDays
                                                size={35}
                                                className={entry.isGreen ? 'text-white' : 'text-gray-600'}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Year */}
                                    <h2 className="text-center text-3xl  md:text-5xl font-bold mb-6 sm:mb-8">
                                        {entry.year}
                                    </h2>

                                    {/* Services List */}
                                    <div className="space-y-2 ">
                                        {entry.services.map((service, i) => (
                                            <div
                                                key={i}
                                                className="text-sm sm:text-base lg:text-lg text-center  tracking-wide font-medium"
                                            >
                                                {service}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default GrowthStory;
