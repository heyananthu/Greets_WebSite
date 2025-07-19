import React from 'react';
import buildingImg from '../../../assets/consultancy.avif';

function Consultancy() {
    return (
        <section className="h-screen bg-gray-200 flex items-center justify-center px-4 pb-2 pt-2 lg:mb-0">
            <div className="flex flex-col md:flex-row max-w-[1400px] w-full h-full rounded-[56px] overflow-hidden bg-gray-200 items-center">
                {/* Image Section */}
                <div className="w-full md:w-[40rem] h-[230px] sm:h-[350px] md:h-full md:pl-12 md:pt-12">
                    <img
                        src={buildingImg}
                        alt="Consultancy"
                        className="w-full h-full object-cover md:rounded-tl-[2.5rem] md:rounded-bl-4xl"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 px-4 sm:px-8 md:px-10 py-8 md:py-0 flex flex-col items-center md:justify-center font-questrial text-center h-full mb-2 md:mb-5 lg:mb-0">
                    <h2 className="text-3xl sm:text-4xl font-bold md:mb-6  font-poppins md:mt-12">SUSTAINABILITY</h2>

                    <p className="text-green-600 text-sm sm:text-base leading-relaxed font-poppins mb-1 md:mb-8 max-w-md">
                    <span className='font-bold'>Dummy :</span> Architecture consultancy helps you turn your vision into a practical, well-designed space by offering expert guidance on planning, design, regulations, and sustainability. Ideal for residential, commercial, or renovation projects, this service ensures cost efficiency, compliance with local laws, and personalized design solutions. Clients benefit from smart space planning, eco-friendly recommendations, and early-stage advice that prevents costly mistakes.
                    </p>

                    <button className="px-8 sm:px-12 py-3  cursor-pointer border border-green-700 rounded-bl-none rounded-[2rem] text-sm bg-black text-green-300 hover:bg-green-700 hover:text-black transition-all duration-200">
                        Check Our Solutions
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Consultancy;
