import React from 'react';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { SiSquareenix } from "react-icons/si";
import client1 from '../../../assets/ourclient1.jpg'
import client2 from '../../../assets/client2.png'
import client3 from '../../../assets/client3.jpg'
import client4 from '../../../assets/client4.png'

// const clients = [
//     {
//         icon: <AiOutlineThunderbolt className='text-3xl mr-2 text-white' />,
//         name: 'Energator',
//         style: 'font-questrial',
//     },
//     {
//         // icon: <SiSquareenix className='text-3xl mr-2 text-white' />,
//         name: 'LADERATE ' ,
//         style: 'font-poppins font-bold tracking-widest',
//     },
//     {
//         name: '3TERNET',
//         logo: null,
//         style: 'font-mono font-bold',
//     },
//     {
//         name: 'JUGONLINE',
//         logo: (
//             <span className="inline-block align-middle mr-2">
//                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="inline">
//                     <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
//                     <circle cx="12" cy="12" r="4" fill="currentColor" />
//                 </svg>
//             </span>
//         ),
//         style: 'font-questrial',
//     },
// ];

function Ourclient() {
    return (
        <section className=" bg-green-700 rounded-b-[2rem] py-16 px-4 sm:px-6 md:px-10 min-h-[70vh] font-questrial lg:mt-24 md:mt-[35rem] mt-[48rem]">
            <div className="max-w-[1600px] mx-auto">
                <h2 className="text-white text-3xl sm:text-4xl font-bold font-poppins mb-12">Our Clients</h2>

                <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-2">
                    {[client1, client2, client3, client4].map((img, idx) => (
                        <div
                            key={idx}
                            className="bg-black rounded-[3rem] w-[22rem] h-[11rem] flex items-center justify-center"
                        >
                            <img
                                src={img}
                                alt={`client${idx + 1}`}
                                className="object-contain max-h-[3rem] max-w-[40%]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Ourclient;
