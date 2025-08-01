import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import greetsicon from '../../assets/Greets_icon.png';

function GridSection() {
    const navigate = useNavigate();
    const [isIconVisible, setIsIconVisible] = useState(false);
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
                const iconRight = 80;
                const iconTop = windowHeight / 2;
                const iconX = windowWidth - iconRight;
                const iconY = iconTop;

                // Add buffer to prevent flicker
                const buffer = 40;
                return (
                    iconX >= rect.left - buffer &&
                    iconX <= rect.right + buffer &&
                    iconY >= rect.top - buffer &&
                    iconY <= rect.bottom + buffer
                );
            };

            const visible =
                isIconInsideCard(card1Ref) ||
                isIconInsideCard(card2Ref) ||
                isIconInsideCard(card3Ref);

            setIsIconVisible(visible);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='p-4 md:p-0 font-questrial relative'>
            {/* Fixed Icon with fade-in/out animation */}
            <div className={`fixed top-1/2 right-20 transform -translate-y-1/2 z-50 transition-opacity duration-700 ease-in-out ${isIconVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="shadow-xl bg-white rounded-full p-2 border-2 border-transparent">
                    <img src={greetsicon} alt="Greets Icon" className="w-16 h-16" />
                </div>
            </div>

            {/* Section Content */}
            <div className='font-[var(--font-questrial)] space-y-12'>
                {/* Section 1 */}
                <div className="w-full px-4 md:px-8 lg:px-16">
                    <div ref={card1Ref} className="bg-green-700 text-white p-6 md:p-8 lg:p-10 rounded-[2rem] shadow-lg min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex items-center">
                        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                            <div className="flex-1 text-center">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                                    Complete MEP Solutions, Tailored for Every Sector
                                </h2>
                                <p className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
                                    GREETS provides end-to-end MEP services—spanning design, planning, estimation, procurement, and execution—crafted to meet the unique needs of Residential, Commercial, Industrial, Healthcare, Hospitality, Educational, and Government projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="w-full px-4 md:px-8 lg:px-16">
                    <div ref={card2Ref} className="bg-stone-300 p-6 md:p-8 lg:p-10 rounded-[2rem] shadow-lg min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex items-center">
                        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                            <div className="flex-1 text-center">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700 mb-6">
                                    Driving Ecological Transformation
                                </h2>
                                <p className="text-green-700 text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
                                    We are committed to delivering sustainable, cost-effective, and impactful MEP systems that support LEED and other green building certifications—ensuring every project contributes positively to the environment and community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="w-full px-4 md:px-8 lg:px-16">
                    <div ref={card3Ref} className="bg-stone-200 p-6 md:p-8 lg:p-10 rounded-[2rem] shadow-lg min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex items-center">
                        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                            <div className="flex-1 text-center">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700 mb-6">
                                    Passion-Driven MEP Innovation
                                </h2>
                                <p className="text-green-700 text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
                                    Our team thrives on delivering results that balance ecology, economy, and efficiency. Headquartered in India, with a presence in the Maldives, Mauritius, Seychelles, Gambia, and other tropical regions, we manage complex international projects with precision and care.
                                </p>
                                <button
                                    onClick={() => navigate('/services')}
                                    className="px-5 py-2 cursor-pointer border-2 border-green-700 rounded-[2rem] rounded-bl-none text-base bg-green-700 text-white hover:bg-white hover:text-green-700 transition-all duration-200 font-semibold"
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
