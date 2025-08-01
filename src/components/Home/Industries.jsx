import React from "react";

const industries = [
    {
        title: "Infrastructure ",
        description:
            "Empowering the backbone of smart cities—our MEP systems support roads, bridges, utilities, and civic services with resilient, future-ready engineering built for scale and sustainability. ",
        green: false,
        className: "rounded-[60px] p-10 flex flex-col text-black"
    },
    {
        title: "Buildings",
        description:
            "From high-rise towers to smart homes, we design and deliver intelligent MEP systems that optimize energy, comfort, and safety—transforming structures into living ecosystems.",
        green: true,
        className: "bg-green-700 rounded-[60px] p-10 flex flex-col text-black"
    },
    {
        title: "Hospitality",
        description:
            "Crafting seamless guest experiences, we engineer world-class MEP services for hotels, resorts, and luxury getaways, blending elegance with performance in every system we install.",
        green: false,
        className: "rounded-[60px] p-10 flex flex-col text-black"
    },
    {
        title: "Healthcare",
        description:
            "Critical care demands flawless precision. We build MEP systems for hospitals, labs, and medical campuses that ensure uninterrupted power, sterile air, and life-saving infrastructure.",
        green: true,
        className: " rounded-[60px] p-10 flex flex-col text-black"
    },
    {
        title: "Industries",
        description:
            "Built for performance—our industrial MEP solutions power manufacturing units, logistics parks, and special economic zones with rugged, high-capacity, automation-ready infrastructure.",
        green: false,
        className: "rounded-[60px] p-10 flex flex-col text-black "
    },
    {
        title: "Aviation",
        description:
            "Airports and transport hubs rely on our integrated MEP systems for smooth operations—from climate control to baggage handling—delivering comfort, safety, and operational excellence at scale.",
        green: true,
        className: "bg-green-700 rounded-[60px] p-10 flex flex-col text-black"
    },
];

// const industries2 = [
//     {
//         title: "Building & Architecture",
//         description:
//             "Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet.",
//         green: false,
//         className: "rounded-[60px] p-10 flex flex-col text-black "
//     },
//     {
//         title: "Logistics",
//         description:
//             "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de de Finnibus Bonorum et Malorum (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.",
//         green: true,
//         className: "bg-green-700 rounded-[60px] p-10 flex flex-col text-black"
//     },
// ];

export default function Industries() {
    return (
        <div className="font-questrial bg-stone-300 mt-20">
            <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 py-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">Industries</h1>

                <div className="flex flex-wrap justify-center gap-6">
                    {/* First row */}
                    {industries.map((industry) => (
                        <div
                            key={industry.title}
                            className={industry.className + " w-full lg:w-[25.5rem] h-full lg:h-[23rem]"}
                        >
                            <h2 className="text-2xl md:text-3xl  font-light mb-4">{industry.title}</h2>
                            <p className="text-base md:text-lg  font-normal">{industry.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
