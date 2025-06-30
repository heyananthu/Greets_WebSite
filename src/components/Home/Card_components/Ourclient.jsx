import React from 'react';

const clients = [
    {
        name: 'Energator',
        logo: <span className="text-3xl mr-2">⚡</span>,
        style: 'font-questrial',
    },
    {
        name: 'LADERATE',
        logo: null,
        style: 'font-poppins font-bold tracking-widest',
    },
    {
        name: '3TERNET',
        logo: null,
        style: 'font-mono font-bold',
    },
    {
        name: 'JUGONLINE',
        logo: (
            <span className="inline-block align-middle mr-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="inline">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" fill="currentColor" />
                </svg>
            </span>
        ),
        style: 'font-questrial',
    },
];

function Ourclient() {
    return (
        <section className=" bg-green-700 rounded-b-[2rem] py-16 px-4 sm:px-6 md:px-10 min-h-[64vh] font-questrial lg:mt-24 md:mt-[30rem] mt-[52rem]">
            <div className="max-w-[1600px] mx-auto">
                <h2 className="text-white text-3xl sm:text-4xl font-bold font-poppins mb-12">Our Clients</h2>

                <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-4">
                    {clients.map((client, idx) => (
                        <div
                            key={idx}
                            className="w-full sm:w-[18rem] md:w-[19.2rem] md:h-[10rem] h-[12rem] sm:h-[14rem] bg-black rounded-[2.5rem] flex items-center justify-center text-gray-300 text-2xl sm:text-3xl font-bold shadow-lg"
                        >
                            {client.logo}
                            <span className={client.style}>{client.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Ourclient;
