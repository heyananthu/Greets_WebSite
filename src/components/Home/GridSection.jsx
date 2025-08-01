import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import greetsicon from '../../assets/Greets_icon.png';

function GridSection() {
    const navigate = useNavigate();
    const [isIconVisible, setIsIconVisible] = useState(false);
    // Refs for the actual colored card divs
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const isIconInsideCard = (ref) => {
                if (!ref.current) return false;
                const rect = ref.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const windowWidth = window.innerWidth;
                // Icon position (fixed at right-20, which is 80px from right)
                const iconRight = 80; // right-20 = 5rem = 80px
                const iconTop = windowHeight / 2; // top-1/2
                // Check if icon position is within the card's bounds
                const iconX = windowWidth - iconRight;
                const iconY = iconTop;
                return (
                    iconX >= rect.left && 
                    iconX <= rect.right && 
                    iconY >= rect.top && 
                    iconY <= rect.bottom
                );
            };
            setIsIconVisible(
                isIconInsideCard(card1Ref) ||
                isIconInsideCard(card2Ref) ||
                isIconInsideCard(card3Ref)
            );
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='p-4 md:p-0 font-questrial relative'>
            {/* Fixed Icon - Only visible when inside any of the 3 colored cards */}
            {isIconVisible && (
                <div className="fixed top-1/2 right-20 transform -translate-y-1/2 z-50 transition-opacity duration-300">
                    <div className="shadow-xl bg-white rounded-full p-2 border-2 border-transparent">
                        <img src={greetsicon} alt="Greets Icon" className="w-10 h-10" />
                    </div>
                </div>
            )}

            <div className='font-[var(--font-questrial)] space-y-12'>
                {/* Section 1: Complete MEP Solutions */}
                <div className="w-full px-4 md:px-8 lg:px-16">
                    <div ref={card1Ref} className="bg-green-700 text-white p-6 md:p-8 lg:p-10 rounded-[2rem] shadow-lg min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex items-center">
                        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                            <div className="flex-1">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                                    Complete MEP Solutions, Tailored for Every Sector
                                </h2>
                                <p className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
                                    GREETS provides end-to-end MEP services—spanning design, planning, estimation, procurement, and execution—crafted to meet the unique needs of Residential, Commercial, Industrial, Healthcare, Hospitality, Educational, and Government projects.
                                </p>
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="px-8 py-4 cursor-pointer border-2 border-white rounded-[2rem] text-base bg-green-700 text-white hover:bg-white hover:text-green-700 transition-all duration-200 font-semibold"
                                >
                                    Schedule a Free Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Ecological Transformation */}
                <div className="w-full px-4 md:px-8 lg:px-16">
                    <div ref={card2Ref} className="bg-stone-300 p-6 md:p-8 lg:p-10 rounded-[2rem] shadow-lg min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex items-center">
                        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                            <div className="flex-1">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700 mb-6">
                                    Driving Ecological Transformation
                                </h2>
                                <p className="text-green-700 text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
                                    We are committed to delivering sustainable, cost-effective, and impactful MEP systems that support LEED and other green building certifications—ensuring every project contributes positively to the environment and community.
                                </p>
                                <button className="px-8 py-4 cursor-pointer border-2 border-green-700 rounded-[2rem] text-base bg-green-700 text-white hover:bg-white hover:text-green-700 transition-all duration-200 font-semibold">
                                    Read Our Latest Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Innovation */}
                <div className="w-full px-4 md:px-8 lg:px-16">
                    <div ref={card3Ref} className="bg-stone-200 p-6 md:p-8 lg:p-10 rounded-[2rem] shadow-lg min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex items-center">
                        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                            <div className="flex-1">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700 mb-6">
                                    Passion-Driven MEP Innovation
                                </h2>
                                <p className="text-green-700 text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
                                    Our team thrives on delivering results that balance ecology, economy, and efficiency. Headquartered in India, with a presence in the Maldives, Mauritius, Seychelles, Gambia, and other tropical regions, we manage complex international projects with precision and care.
                                </p>
                                <button
                                    onClick={() => navigate('/services')}
                                    className="px-8 py-4 cursor-pointer border-2 border-green-700 rounded-[2rem] text-base bg-green-700 text-white hover:bg-white hover:text-green-700 transition-all duration-200 font-semibold"
                                >
                                    Check Our Services
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default GridSection;
