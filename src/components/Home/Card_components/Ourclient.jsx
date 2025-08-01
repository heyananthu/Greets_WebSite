import React, { useRef, useEffect } from 'react';
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
import tulah from '../../../assets/greets_client_icons/tulah-clinical.avif'

const clients = [
    { logo: greenisland, name: 'Green Island' },
    // { logo: IDCSeychelles, name: 'IDC Seychelles' },
    { logo: taj, name: 'Taj' },
    // { logo: GulfCraft, name: 'Gulf Craft' },
    { logo: platinum, name: 'Platinum' },
    { logo: rbi, name: 'RBI' },
    { logo: IndianOil, name: 'Indian Oil' },
    { logo: smartowner, name: 'Smart Owner' },
    { logo: phoenix, name: 'Phoenix' },
    { logo: Decathlon, name: 'Decathlon' },
    { logo: sheraton, name: 'Sheraton' },
    { logo: khushihospital, name: 'Khushi Hospital' },
    { logo: elgi, name: 'ELGi' },
    { logo: ecoinfrastructure, name: 'Eco Infrastructure Solutions' },
    { logo: centurygroup, name: 'Century Group' },
    // { logo: sbr, name: 'SBR Group' },
    { logo: jssl, name: 'JSSL' },
    { logo: pitti, name: 'Pitti' },
    { logo: harvest, name: 'Harvest School' },
    // { logo: tulah, name: 'tulah' },
];

function Ourclient() {
    const controls = useAnimation();
    const sliderRef = useRef(null);

    useEffect(() => {
        const startAnimation = async () => {
            if (!sliderRef.current) return;
            const sliderWidth = sliderRef.current.scrollWidth / 2; // width of one set
            await controls.start({
                x: [0, -sliderWidth],
                transition: {
                    duration: 50,// adjust for speed
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                }
            });
        };
        startAnimation();
    }, [controls]);

    // Duplicate the clients array for seamless loop
    const allClients = [...clients, ...clients];

    return (
        <section className="bg-green-700 rounded-[3rem] py-16 px-4 sm:px-6 md:px-10 min-h-[60vh] font-questrial client-section">
            <div className="max-w-[1600px] mx-auto">
                <h2 className="text-white text-3xl sm:text-4xl font-bold font-poppins mb-12">Our Clients</h2>
                <div className="overflow-hidden">
                    <motion.div
                        className="flex flex-nowrap gap-4"
                        animate={controls}
                        initial={{ x: 0 }}
                        ref={sliderRef}
                    >
                        {allClients.map((client, idx) => (
                            <div
                                key={idx}
                                className=" w-[22rem] h-[11rem] flex items-center justify-center flex-shrink-0"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className={
                                        "object-contain max-h-[6rem] max-w-[90%]" +
                                        (["tulah", "ELGi", "Khushi Hospital", "Gulf Craft", "Platinum","Decathlon"].includes(client.name)
                                            ? " bg-white p-3 rounded-lg"
                                            : "")
                                    }
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
