import React from 'react'

function Section1() {
    const testimonials = [
        {
            name: 'Jamie Lane',
            text:
                '"Working with GREETS has been a game changer. Their MEP coordination was spot-on, and their design solutions saved us time and cost. Truly professional from start to finish!"',
        },
        {
            name: 'Max Johnson',
            text:
                '"We approached GREETS for a complex hospitality project, and they delivered beyond expectations. Their sustainability insights and execution quality were outstanding."',
        },
        {
            name: 'Jesse Neimus',
            text:
                '"I was impressed with their ability to handle multiple trades without a hitch. Communication was clear, timelines were met, and the results speak for themselves."',
        },
        {
            name: 'Drew Carlyle',
            text:
                '"GREETS transformed our outdated building into a modern, energy-efficient workspace. Their professionalism and attention to detail were unmatched."',
        },
    ];

    return (
        <div>
            <div className="max-w-screen mx-auto  px-12 py-12 font-questrial mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-green-700 rounded-3xl p-8 md:pl-14  flex flex-col justify-between min-h-[290px] w-full shadow-md"
                        >
                            <div className=" text-white text-lg font-normal pt-4">{t.name}</div>
                            <div className="text-white text-2xl md:text-[26px] font-light leading-snug "><span className='font-black italic'>Dummy : </span>{t.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section1
