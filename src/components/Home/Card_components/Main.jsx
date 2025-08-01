import React from 'react';
import OurSolutions from "./OurSolutions";
import Strategy from "./Strategy";
import Consultancy from "./Consultancy";
import ClientStories from "./ClientStories";
import Approach2 from './Approach2';

const cards = [<OurSolutions />, <Strategy />, <Approach2 />, <Consultancy />, <ClientStories />];

function Main() {
    return (
        <div className="relative bg-green-700">
            {cards.map((Card, index) => (
                <div
                    key={index}
                    className={
                        "sticky top-0 h-fit w-full " +
                        (index === cards.length - 1 ? "pt-12" : "py-12")
                    } style={{ zIndex: index + 1 }}
                >
                    {Card}
                </div>
            ))}
        </div>
    );
}

export default Main;
