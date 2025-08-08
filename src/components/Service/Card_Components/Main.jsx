import React from 'react';
import Mep from './Mep'
import Mep2 from './Mep2';
import Mep3 from './Mep3';
import Mep4 from './Mep4';

const cards = [<Mep />, <Mep2 />,];

function Main() {
    return (
        <div className="relative bg-grey-100">
            {cards.map((Card, index) => (
                <div
                    key={index}
                    className={
                        "sticky top-0 h-screen w-full " +
                        (index === cards.length - 1 ? "pt-12" : "py-12")
                    } 
                    style={{ zIndex: index + 1 }}
                >
                    {Card}
                </div>
            ))}
        </div>
    );
}

export default Main;// style={{ height: `${cards.length * 100}vh` }}
