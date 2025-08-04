import React, { useRef, useEffect, useState } from 'react';
import greetsicon from '../../assets/Greets_icon.png';
import CompleteMEPCard from './GridSection_components/CompleteMEPCard';
import EcologicalTransformationCard from './GridSection_components/EcologicalTransformationCard';
import InnovationCard from './GridSection_components/InnovationCard';

function GridSection() {
    const [showIcon, setShowIcon] = useState(false);
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const checkStickyState = () => {
            let anyStuck = false;

            cardRefs.current.forEach(ref => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    // Check if the card is stuck at the top (within a small threshold)
                    // Card is considered "stuck" when it's at the top of viewport
                    if (rect.top <= 5 && rect.bottom > window.innerHeight * 0.5) {
                        anyStuck = true;
                    }
                }
            });

            setShowIcon(anyStuck);
        };

        // Check on scroll
        const handleScroll = () => {
            checkStickyState();
        };

        // Initial check
        checkStickyState();

        // Add scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const cards = [
        <CompleteMEPCard key="card1" />,
        <EcologicalTransformationCard key="card2" />,
        <InnovationCard key="card3" />,
    ];

    return (
        <div ref={sectionRef} className="relative bg-white font-questrial">
            {/* Fixed icon shown only during sticky card scroll */}
            <div
                className={`fixed md:top-20 top-16 md:right-16 right-5 z-50 transition-opacity duration-700 ease-in-out ${showIcon ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="bg-white rounded-full p-4 shadow-xl">
                    <img src={greetsicon} alt="Greets Icon" className="md:w-16 md:h-16 h-4 w-4" />
                </div>
            </div>

            {/* Sticky card sections */}
            {cards.map((card, idx) => (
                <div
                    key={idx}
                    ref={el => (cardRefs.current[idx] = el)}
                    className={`sticky top-0 h-fit w-full ${idx === cards.length - 1 ? 'pt-12' : 'py-12'}`}
                    style={{ zIndex: idx + 1 }}
                >
                    {card}
                </div>
            ))}
        </div>
    );
}

export default GridSection;
