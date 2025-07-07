import React from 'react'
import chart2016 from '../../assets/2016.png'
import chart2018 from '../../assets/chart-2018.png'
import chart2021 from '../../assets/2021.png'
import chart2023 from '../../assets/chart-2023.png'
import chart2024 from '../../assets/chart-2024.png'
import chart2025 from '../../assets/2025.png'
import india from '../../assets/flag/india flag.png'
import maldives from '../../assets/flag/Maldives flag.png'
import mauritius from '../../assets/flag/mauritius.png'
import seychelles from '../../assets/flag/seychelles.png'
import gambia from '../../assets/flag/gambia.png'

const growthData = [
    {
        chart: chart2016,
        img: india,
        items: [
            { text: 'MEP Design', bold: true },
            { text: 'HVAC' },
            { text: 'Electrical' },
            { text: 'Plumbing' },
            { text: 'Fire' },
        ],
    },
    {
        chart: chart2018,
        // img: maldives,
        items: [
            { text: 'MEP Design', bold: true },
            { text: 'PMC', new: true },
            { text: 'HVAC' },
            { text: 'Electrical' },
            { text: 'Plumbing' },
            { text: 'Fire' },
        ],
    },
    {
        chart: chart2021,
        img: mauritius,
        items: [
            { text: 'MEP Design', bold: true },
            { text: 'PMC', bold: true },
            { text: 'Trade', new: true },
            { text: 'HVAC' },
            { text: 'Electrical' },
            { text: 'Plumbing' },
            { text: 'Fire' },
            { text: 'Sustainability' },
            { text: 'Networking' },
            { text: 'BMS' },
            { text: 'Security and AV' },
        ],
    },
    {
        chart: chart2023,
        img: maldives,
        items: [
            { text: 'MEP Design', bold: true },
            { text: 'PMC', bold: true },
            { text: 'Trade', bold: true },
            { text: 'Execution', new: true },
            { text: 'HVAC' },
            { text: 'Electrical' },
            { text: 'Plumbing' },
            { text: 'Fire' },
            { text: 'Sustainability' },
            { text: 'BMS' },
            { text: 'Security & AV' },
            { text: 'Home Automation' },
            { text: 'LMS' },
        ],
    },
    {
        chart: chart2024,
        img: seychelles,
        items: [
            { text: 'MEP Design', bold: true },
            { text: 'PMC', bold: true },
            { text: 'Trade', bold: true },
            { text: 'Execution', bold: true },
            { text: 'AMC', new: true },
            { text: 'HVAC' },
            { text: 'Electrical' },
            { text: 'Plumbing' },
            { text: 'Fire' },
            { text: 'Sustainability' },
            { text: 'Networking' },
            { text: 'BMS' },
            { text: 'Security & AV' },
            { text: 'Home Automation' },
            { text: 'LMS' },
            { text: 'IOT' },

        ],
    },
    {
        chart: chart2025,
        img: gambia,
        items: [
            { text: 'MEP Design', bold: true, },
            { text: 'PMC', bold: true },
            { text: 'Trade', bold: true },
            { text: 'Execution', bold: true },
            { text: 'AMC', bold: true },
            { text: 'Intl. Local', new: true },
            { text: 'Presence', new: true },
            { text: 'HVAC' },
            { text: 'Electrical' },
            { text: 'Plumbing' },
            { text: 'Fire' },
            { text: 'Sustainability' },
            { text: 'Networking' },
            { text: 'BMS' },
            { text: 'Security & AV' },
            { text: 'Home Automation' },
            { text: 'LMS' },
            { text: 'IOT' },
            // { text: 'Compressed air' },
        ],
    },
];

function GrowthStory() {
    return (
        <div className="font-questrial bg-green-700 min-h-screen py-10">
            <h1 className="text-center font-black text-white text-6xl md:text-8xl uppercase mb-3">Growth Story</h1>
            <div className="max-w-screen mx-auto flex flex-col items-center">
                <div className="flex flex-wrap justify-center w-full">
                    {growthData.map((entry, idx) => (
                        <div key={entry.year} className="flex flex-col items-center ">
                            {/* Card with image */}
                            <div className="relative w-64 h-64 md:w-56 md:h-56 flex items-center justify-center border-8 border-green-700  bg-black">
                                <img src={entry.chart} alt={`chart for ${entry.year}`} className="w-full h-full object-cover" />
                                {/* <span className="absolute inset-0 flex items-center justify-center text-white text-4xl z-10">{entry.year}</span> */}
                            </div>
                            {/* List */}
                            <div className='flex justify-end w-48'>
                                {entry.img && <img src={entry.img} alt="" className='size-12'/>}
                            </div>
                            <ul className="text-black text-left text-md w-full pl-3">
                                {entry.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className={
                                            `${item.bold ? 'font-bold text-2xl' : ''} ${item.new ? 'text-blue-950 font-black text-2xl' : ''}`
                                        }
                                    >
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GrowthStory;
