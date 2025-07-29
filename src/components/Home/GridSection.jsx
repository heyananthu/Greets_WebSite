import React from 'react';
import gridimg from '../../assets/gird-img.jpg';
import icon from '../../assets/gridsection-icon.svg'
import { useNavigate } from 'react-router-dom';

function GridSection() {
    const navigate = useNavigate()
    return (
        <div className='p-4 md:p-0 font-questrial'>
            <div className='font-[var(--font-questrial)]'>
                {/* Top Row */}
                <div className="flex flex-col md:flex-row md:justify-between md:gap-4 lg:gap-4 mb-6 w-full mx-auto space-y-4">
                    {/* Left Block */}
                    <div className="w-full md:flex-1 min-w-0 px-4 md:px-0 lg:ml-8">
                        <div className="bg-green-700 text-white p-4 md:p-6 lg:p-8 rounded-tr-[2.5rem] shadow h-fit md:h-[21.5rem] lg:h-[21rem] flex flex-col justify-between">

                            <div className="px-2 sm:px-0">
                                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4">
                                    Complete MEP Solutions, Tailored for Every Sector
                                </h2>
                                <p className="text-sm md:text-base">
                                    GREETS provides end-to-end MEP services—spanning design, planning, estimation, procurement, and execution—crafted to meet the unique needs of Residential, Commercial, Industrial, Healthcare, Hospitality, Educational, and Government projects.
                                </p>
                            </div>

                            <div className="mt-4 md:mt-2 lg:mt-0 px-2 sm:px-0">
                                <button onClick={()=>navigate('/contact')} className="px-6 py-3 cursor-pointer border border-black rounded-bl-none rounded-[2rem] text-sm bg-green-700 text-black hover:bg-black hover:text-green-400 transition-all duration-200">
                                    Schedule a Free Consultation
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Right Block */}
                    <div className="w-full md:flex-1 min-w-0 px-4 md:px-0">
                        <div className="bg-stone-300 p-4 md:p-6 lg:p-8 rounded-tl-[2.5rem] shadow flex flex-col justify-between md:h-[21.5rem] lg:h-[21rem] h-auto">

                            {/* Heading + Paragraph */}
                            <div className="px-2 sm:px-0 py-2">
                                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-green-700 mb-2">
                                    Driving Ecological Transformation
                                </h2>
                                <p className="text-green-700 text-sm md:text-base w-full lg:w-[80%]">
                                    We are committed to delivering sustainable, cost-effective, and impactful MEP systems that support LEED and other green building certifications—ensuring every project contributes positively to the environment and community.
                                </p>
                            </div>

                            {/* Button */}
                            <div className="mt-4  lg:mt-0 px-2 sm:px-0">
                                <button className="px-4 py-3 cursor-pointer border border-black rounded-bl-none rounded-[2rem] text-sm bg-green-700 text-white hover:text-black transition-all duration-200 w-full md:w-[15rem]">
                                    Read Our Latest Report
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row md:justify-start gap-6 w-full md:px-2 lg:px-0">
                    {/* Image */}
                    <div className="relative w-full md:w-[27.5rem] h-[12rem] md:h-[14rem] rounded-r-[2.5rem] overflow-hidden">
                        <img
                            src={gridimg}
                            alt="Designer"
                            className="w-full h-full object-cover rounded-r-[2.5rem]"
                        />
                        <div className="absolute inset-0 bg-black opacity-60 rounded-r-[2.5rem]"></div>
                    </div>

                    {/* Relaunch Block */}
                    <div className="bg-stone-200 p-4 md:p-6 lg:p-10 rounded-[2.5rem] shadow h-auto lg:h-[20rem] w-full md:w-[35rem] lg:w-[46rem] flex flex-col justify-between">

                        <div className="px-2 sm:px-0">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                                Passion-Driven MEP Innovation
                            </h2>
                            <p className="text-green-700 text-sm md:text-base mb-1 lg:w-[97%]">
                                Our team thrives on delivering results that balance ecology, economy, and efficiency. Headquartered in India, with a presence in the Maldives, Mauritius, Seychelles, Gambia, and other tropical regions, we manage complex international projects with precision and care.
                            </p>
                        </div>

                        <div className="px-2 sm:px-0">
                            <button onClick={()=>navigate('/services')} className="px-6 py-3 cursor-pointer border border-white rounded-bl-none rounded-[2rem] text-sm bg-black text-white hover:bg-green-700 hover:text-black transition-all duration-200 w-full md:w-[15rem]">
                                Check Our Services
                            </button>
                        </div>

                    </div>


                    {/* Icon Block */}
                    <div className="bg-green-700 flex items-center justify-center rounded-[2rem] p-6 md:px-12 h-[14rem] md:h-[14rem] w-full md:w-[17rem] ">
                        <img src={icon} alt="icon" className='size-56' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridSection;
