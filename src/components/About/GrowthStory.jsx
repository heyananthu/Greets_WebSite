import React from 'react'
import chart2015 from '../../assets/chart-2015.png'
import chart2017 from '../../assets/chart-2017.png'
import chart2018 from '../../assets/chart-2018.png'
import chart2020 from '../../assets/chart-2020.png'
import chart2023 from '../../assets/chart-2023.png'
import chart2024 from '../../assets/chart-2024.png'

const growthData = [
    {
        chart: chart2015,
        items: [
            { text: 'MEP Design', bold: true },
            { text: 'HVAC' },
            { text: 'Electrical' },
            { text: 'Plumbing' },
            { text: 'Fire' },
        ],
    },
    {
        chart: chart2017,
        items: [
            { text: 'MEP Design', bold: true },
            { text: 'PMC', bold: true },
            { text: 'HVAC' },
            { text: 'Electrical' },
            { text: 'Plumbing' },
            { text: 'Fire' },
        ],
    },
    {
        chart: chart2018,
        items: [
            { text: 'MEP Design', bold: true },
            { text: 'PMC', bold: true },
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
        chart: chart2020,
        items: [
            { text: 'MEP Design', bold: true },
            { text: 'PMC', bold: true },
            { text: 'Execution', bold: true },
            { text: 'AMC', bold: true },
            { text: 'Trade', bold: true },
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
        chart: chart2023,
        items: [
            { text: 'MEP Design', bold: true },
            { text: 'PMC', bold: true },
            { text: 'Execution', bold: true },
            { text: 'AMC', bold: true },
            { text: 'Trade', bold: true },
            { text: 'HVAC' },
            { text: 'Electrical' },
            { text: 'Plumbing' },
            { text: 'Fire' },
            { text: 'Sustainability' },
            { text: 'Networking' },
            { text: 'BMS' },
            { text: 'Security & AV' },
            { text: 'LMS' },
            { text: 'Compressed air' },

        ],
    },
    {
        chart: chart2024,
        items: [
            { text: 'MEP Design', bold: true },
            { text: 'PMC', bold: true },
            { text: 'Execution', bold: true },
            { text: 'AMC', bold: true },
            { text: 'Trade', bold: true },
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
            { text: 'Compressed air' },
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
                        <div key={entry.year} className="flex flex-col items-center">
                            {/* Card with image */}
                            <div className="relative w-64 h-64 md:w-56 md:h-56 flex items-center justify-center border-8 border-green-700 mb-6 bg-black">
                                <img src={entry.chart} alt={`chart for ${entry.year}`} className="w-full h-full object-cover" />
                                <span className="absolute inset-0 flex items-center justify-center text-white text-4xl z-10">{entry.year}</span>
                            </div>
                            {/* List */}
                            <ul className="text-black text-left text-md w-full pl-3">
                                {entry.items.map((item, i) => (
                                    <li key={i} className={item.bold ? 'font-bold' : ''}>{item.text}</li>
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
