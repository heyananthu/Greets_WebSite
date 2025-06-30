import React from 'react';
import OurSolutions from "./OurSolutions";
import Strategy from "./Strategy";
import Consultancy from "./Consultancy";
import ClientStories from "./ClientStories";

const cards = [<OurSolutions />, <Strategy />, <Consultancy />, <ClientStories />];

function Main() {
    return (
        <div style={{ height: `${cards.length * 110}vh` }} className="relative bg-green-700">
            {cards.map((Card, index) => (
                <div
                    key={index}
                    className="sticky top-0 h-screen w-full py-12"
                    style={{ zIndex: index + 1 }}
                >
                    {Card}
                </div>
            ))}
        </div>
    );
}

export default Main;
