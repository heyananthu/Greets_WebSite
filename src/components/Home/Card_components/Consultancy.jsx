import React from 'react';
import buildingImg from '../../../assets/consultancy.avif';
import { useNavigate } from 'react-router-dom';

function Consultancy() {
    const navigate = useNavigate()
    return (
        <section className="h-screen bg-gray-200 flex items-center justify-center px-4 pb-2 pt-2 lg:mb-0">
            <div className="flex flex-col  md:flex-row max-w-[1400px] w-full h-full rounded-[56px] overflow-hidden bg-gray-200 items-center ">
                {/* Image Section */}
                {/* <div className="w-full md:w-[40rem] h-[230px] sm:h-[350px] md:h-full md:pl-12 md:pt-12">
                    <img
                        src={buildingImg}
                        alt="Consultancy"
                        className="w-full h-full object-cover md:rounded-tl-[2.5rem] md:rounded-bl-4xl"
                    />
                </div> */}

                {/* Content Section */}
                <div className="w-full md:w-1/2 px-4 sm:px-8 md:px-10 py-8 md:py-0 flex flex-col items-center md:justify-center font-questrial text-center h-full mb-2 md:mb-5 lg:mb-0 ">
                    <h2 className="text-3xl sm:text-4xl font-bold md:mb-6 mb-2 font-poppins md:mt-12">SUSTAINABILITY</h2>
                    <p className='italic md:text-md text-sm text-center'>Greener Systems. Smarter Performance</p>
                    <p className="text-green-600 text-sm sm:text-base leading-relaxed font-poppins mb-3 md:mb-8 max-w-md mt-2">
                        At GREETS, sustainability is not a feature—it’s a foundation. We design MEP systems that reduce energy use, conserve water, lower emissions, and support LEED and green building certifications. Our goal is to deliver systems that restore ecological balance while maximizing building efficiency.
                    </p>

                    <button onClick={()=>navigate('/services')} className="px-8 sm:px-12 py-3  cursor-pointer border border-green-700 rounded-bl-none rounded-[2rem] text-sm bg-black text-green-300 hover:bg-green-700 hover:text-black transition-all duration-200">
                        Check Our Services
                    </button>
                </div>

                <div className="w-full md:w-1/2 px-4 sm:px-8 md:px-10 py-8 md:py-0 flex flex-col items-center md:justify-center font-questrial text-center h-full mb-2 md:mb-5 lg:mb-0 ">
                    <h2 className="text-3xl sm:text-4xl font-bold md:mb-6 mb-2 font-poppins md:mt-12">VALUE</h2>
                    <p className='italic md:text-md text-sm text-center'>Driven by Purpose. Focused on Results</p>
                    <p className="text-green-600 text-sm sm:text-base leading-relaxed font-poppins mb-3 md:mb-8 max-w-md mt-2">
                        We measure success by the long-term value our systems bring. GREETS delivers tailored, high-performance MEP solutions that enhance building lifecycle, reduce operating costs, and align with your project's functional and commercial goals.                    </p>

                    <button onClick={()=>navigate('/services')} className="px-8 sm:px-12 py-3  cursor-pointer
                    border border-green-700 rounded-bl-none rounded-[2rem] text-sm bg-black text-green-300 hover:bg-green-700 hover:text-black transition-all duration-200">
                        Check Our Services
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Consultancy;
