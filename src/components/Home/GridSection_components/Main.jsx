import React from 'react';
import CompleteMEPCard from './CompleteMEPCard';
import EcologicalTransformationCard from './EcologicalTransformationCard';
import InnovationCard from './InnovationCard';

const cards = [<CompleteMEPCard />, <EcologicalTransformationCard />, <InnovationCard />];

function GridSection() {
    return (
        <div className="relative bg-white">
            {cards.map((Card, index) => (
                <div
                    key={index}
                    className="sticky top-0 h-screen w-full"
                    style={{ zIndex: index + 1 }}
                >
                    {Card}
                </div>
            ))}
        </div>
    );
}

export default GridSection; 