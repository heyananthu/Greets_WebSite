import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../sharedcomponents/Navbar';
import Footer from '../../sharedcomponents/Footer';
import { keyprojects } from '../../../lib/projects';

const projects = keyprojects;

function KeyProject() {
    return (
        <div className="overflow-x-hidden"> {/* Prevent horizontal scroll */}
            {/* <Navbar /> */}
            <section className="w-full ">
                <div className="">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
className={`flex flex-col md:flex-row items-center ${idx % 2 === 1 ? 'md:flex-row-reverse ' : 'mt-7'}`}                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {/* Text Section */}
                            <motion.div
                                className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-6 min-h-[250px] md:min-h-[384px]"
                                initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut"
                                }}
                            >
                                <h3 className="text-black text-2xl md:text-3xl font-semibold text-center leading-tight tracking-wide uppercase">
                                    {project.title}
                                </h3>
                            </motion.div>

                            {/* Image Section */}
                            <motion.div
                                className="w-full md:w-1/2 min-h-[250px] md:min-h-[384px]"
                                initial={{ x: idx % 2 === 0 ? 100 : -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut"
                                }}
                            >
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full md:h-[25.5rem] object-top"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* <Footer /> */}
        </div>
    );
}

export default KeyProject;
