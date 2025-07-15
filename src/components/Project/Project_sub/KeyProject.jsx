import React from 'react';
import Navbar from '../../sharedcomponents/Navbar';
import Footer from '../../sharedcomponents/Footer';
import { keyprojects } from '../../../lib/projects';

const projects = keyprojects;

function KeyProject() {
    return (
        <div>
            <Navbar />
            <section className="max-w-screen mx-auto px-12 py-16 mt-28">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 ">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-0">Key Projects</h2>
                    <p className="md:w-2/3 text-md leading-7 ">
                        Our portfolio includes diverse and impactful projects such as luxury villas in the Maldives, a 20-story commercial office tower in Dubai, an eco-resort in Seychelles, a large-scale residential township in India, and a mixed-use development in Africa. Each project reflects our commitment to sustainable design, efficient engineering, and seamless execution—delivering modern, functional, and environmentally responsible spaces across different regions.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
                    {projects.map((project, idx) => (
                        <div key={idx} className="flex flex-col font-semibold text-black text-[23px] leading-8">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-56 md:h-[26rem] object-cover rounded-lg mb-4"
                            />
                            <h3 className=" mb-1">{project.title}</h3>
                            <div className="italic">{project.area}</div>
                            <div className="italic">{project.units}</div>
                            <div className="italic">{project.scope}</div>
                            <div className="italic">{project.type}</div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>

    );
}

export default KeyProject;
