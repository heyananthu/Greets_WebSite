import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import greenisland from '../../../assets/greets_client_icons/GreenIsland.jpg'
import IDCSeychelles from '../../../assets/greets_client_icons/IDCSeychelles.jpg'
import taj from '../../../assets/greets_client_icons/taj.png'
import GulfCraft from '../../../assets/greets_client_icons/GulfCraft.webp'
import platinum from '../../../assets/greets_client_icons/platinum.webp'
import rbi from '../../../assets/greets_client_icons/rbi.jpg'
import IndianOil from '../../../assets/greets_client_icons/IndianOil.png'
import smartowner from '../../../assets/greets_client_icons/smartowner.png'
import phoenix from '../../../assets/greets_client_icons/phoenix.svg'
import Decathlon from '../../../assets/greets_client_icons/Decathlon.png'
import sheraton from '../../../assets/greets_client_icons/sheraton.webp'
import khushihospital from '../../../assets/greets_client_icons/khushi-hospital.png'
import elgi from '../../../assets/greets_client_icons/elgi.png'
import ecoinfrastructure from '../../../assets/greets_client_icons/Eco-infrastructure-solutions.webp'
import centurygroup from '../../../assets/greets_client_icons/century-group.svg'
import sbr from '../../../assets/greets_client_icons/sbr-group.png'
import jssl from '../../../assets/greets_client_icons/jssl.png'
import pitti from '../../../assets/greets_client_icons/pitti.jpg'
import harvest from '../../../assets/greets_client_icons/harvest-school.png'
// import tulah from '../../../assets/greets_client_icons/tulah-clinical.avif'

const clients = [
    { logo: greenisland, name: 'Green Island' },
    { logo: IDCSeychelles, name: 'IDC Seychelles' },
    { logo: taj, name: 'Taj' },
    { logo: GulfCraft, name: 'Gulf Craft' },
    { logo: platinum, name: 'Platinum' },
    { logo: rbi, name: 'RBI' },
    { logo: IndianOil, name: 'Indian Oil' },
    { logo: smartowner, name: 'Smart Owner' },
    { logo: phoenix, name: 'Phoenix' },
    { logo: Decathlon, name: 'Decathlon' },
    { logo: sbr, name: 'SBR Group' },
    { logo: jssl, name: 'JSSL' },
    { logo: pitti, name: 'Pitti' },
    { logo: harvest, name: 'Harvest School' },
    // { logo: tulah, name: 'Tulah Clinical' },
];

function Ourclient() {
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Start animation when component comes into view
                        const startAnimation = async () => {
                            await controls.start({
                                x: [0, -100 * clients.length * 100],
                                transition: {
                                    duration: 1300,
                                    ease: "linear",
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    repeatDelay: 0,
                                }
                            });
                        };
                        startAnimation();
                    }
                });
            },
            { threshold: 0.1 } // Start when 10% of the component is visible
        );

        const element = document.querySelector('.client-section');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [controls]);

    return (
        <section className="bg-green-700 rounded-b-[2rem] py-16 px-4 sm:px-6 md:px-10 min-h-[70vh] font-questrial client-section">
            <div className="max-w-[1600px] mx-auto">
                <h2 className="text-white text-3xl sm:text-4xl font-bold font-poppins mb-12">Our Clients</h2>

                {/* Infinite scrolling animation container */}
                <div className="overflow-hidden">
                    <motion.div
                        className="flex gap-4"
                        animate={controls}
                        initial={{ x: 0 }}
                    >
                        {/* First set of clients */}
                        {clients.map((client, idx) => (
                            <div
                                key={`first-${idx}`}
                                className="bg-black rounded-[3rem] w-[22rem] h-[11rem] flex items-center justify-center flex-shrink-0"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="object-contain max-h-[4rem] max-w-[60%]"
                                />
                            </div>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {clients.map((client, idx) => (
                            <div
                                key={`second-${idx}`}
                                className="bg-black rounded-[3rem] w-[22rem] h-[11rem] flex items-center justify-center flex-shrink-0"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="object-contain max-h-[3rem] max-w-[40%]"
                                />
                            </div>
                        ))}

                        {/* Third set for extra smoothness */}
                        {clients.map((client, idx) => (
                            <div
                                key={`third-${idx}`}
                                className="bg-black rounded-[3rem] w-[22rem] h-[11rem] flex items-center justify-center flex-shrink-0"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="object-contain max-h-[3rem] max-w-[40%]"
                                />
                            </div>
                        ))}

                        {/* Fourth set for perfect infinite loop */}
                        {clients.map((client, idx) => (
                            <div
                                key={`fourth-${idx}`}
                                className="bg-black rounded-[3rem] w-[22rem] h-[11rem] flex items-center justify-center flex-shrink-0"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="object-contain max-h-[3rem] max-w-[40%]"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Ourclient;
