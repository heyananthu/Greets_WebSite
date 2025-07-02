import React from "react";

const industries = [
    {
        title: "Energy",
        description:
            "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsumio de usar textos como por ejemplo.",
        green: false,
        className: "rounded-[60px] p-10 flex flex-col text-black"
    },
    {
        title: "Technology",
        description:
            "Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin.",
        green: true,
        className: "bg-green-700 rounded-[60px] p-10 flex flex-col text-black"
    },
    {
        title: "Infrastructure",
        description:
            "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsumio de usar textos como por ejemplo.",
        green: false,
        className: "rounded-[60px] p-10 flex flex-col text-black"
    },
];

const industries2 = [
    {
        title: "Building & Architecture",
        description:
            "Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet.",
        green: false,
        className: "rounded-[60px] p-10 flex flex-col text-black place-items-end"
    },
    {
        title: "Logistics",
        description:
            "Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de de Finnibus Bonorum et Malorum (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.",
        green: true,
        className: "bg-green-700 rounded-[60px] p-10 flex flex-col text-black"
    },
];

export default function Industries() {
    return (
        <div className="font-questrial bg-stone-300 mt-20">
            <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">Industries</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {/* First row */}
                    {industries.map((industry) => (
                        <div
                            key={industry.title}
                            className={industry.className + " w-full lg:w-[25.5rem] h-full lg:h-[23rem]"}
                        >
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-4">{industry.title}</h2>
                            <p className="text-base md:text-lg  font-normal">{industry.description}</p>
                        </div>
                    ))}

                    {/* Second row */}
                    {industries2.map((industry, idx) => (
                        <div
                            key={industry.title}
                            className={`${industry.className} w-full lg:w-[25.5rem] h-full lg:h-[23rem] ${idx === 0 ? "lg:col-start-2" : ""
                                }`}
                        >
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-4">{industry.title}</h2>
                            <p className="text-base md:text-lg  font-normal">{industry.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
