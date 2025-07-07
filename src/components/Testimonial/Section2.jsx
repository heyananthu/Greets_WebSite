import React from 'react'

const brands = [
    { name: 'Imoge', className: 'font-bold text-4xl', isLogo: true },
    { name: 'POLAR', className: 'tracking-widest text-5xl', isLogo: false },
    { name: 'Eembreeque', className: 'font-serif text-3xl', isLogo: false },
    { name: 'Ocean', className: 'font-serif italic text-4xl', isLogo: false },
    { name: 'Datox.Ai', className: 'font-sans text-2xl flex items-center gap-2', isLogo: true },
    { name: 'foreva*', className: 'italic text-4xl font-black', isLogo: false },
    { name: 'RODOND', className: 'font-serif text-4xl', isLogo: false },
    { name: 'Airy\nVell', className: 'italic text-4xl whitespace-pre-line', isLogo: false },
];

function Section2() {
    return (
        <div className="max-w-screen mx-auto px-12 py-8 ">
            <h1 className='font-questrial font-black md:text-7xl mb-16'>
                SERVING INDUSTRY LEADERS
            </h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 border-t border-l border-gray-300">
                {brands.map((brand, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center border-b border-r min-h-[340px] bg-white border-gray-300"
                    >
                        {/* If you have logo images, replace the text below with <img src={brand.logo} ... /> */}
                        <span className={`text-black ${brand.className}`}>{brand.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section2
