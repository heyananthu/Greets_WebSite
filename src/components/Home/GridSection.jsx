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
        const observer = new IntersectionObserver(
            (entries) => {
                // Check if any sticky card is intersecting
                const anyVisible = entries.some(entry => entry.isIntersecting);
                setShowIcon(anyVisible);
            },
            {
                root: null,
                threshold: 0.5, // Half of the card must be visible
            }
        );

        // Observe each sticky card
        cardRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
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
