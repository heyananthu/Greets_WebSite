import React from 'react';
import buildingImg from '../../../assets/consultancy.avif';

function Consultancy() {
    return (
        <section className="h-screen bg-gray-200 flex items-center justify-center px-4">
            <div className="flex flex-col md:flex-row max-w-[1400px] w-full h-full rounded-[56px] overflow-hidden bg-gray-200 items-center">
                {/* Image Section */}
                <div className="w-full md:w-[40rem] h-[250px] sm:h-[350px] md:h-full md:pl-12 md:pt-12">
                    <img
                        src={buildingImg}
                        alt="Consultancy"
                        className="w-full h-full object-cover md:rounded-tl-[2.5rem] md:rounded-bl-4xl"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 px-4 sm:px-8 md:px-10 py-8 md:py-0 flex flex-col items-center justify-center font-questrial text-center h-full">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-poppins">Consultancy</h2>

                    <p className="text-green-600 text-sm sm:text-base leading-relaxed font-poppins mb-8 max-w-md">
                        Architecture consultancy helps you turn your vision into a practical, well-designed space by offering expert guidance on planning, design, regulations, and sustainability. Ideal for residential, commercial, or renovation projects, this service ensures cost efficiency, compliance with local laws, and personalized design solutions. Clients benefit from smart space planning, eco-friendly recommendations, and early-stage advice that prevents costly mistakes. Packages start at ₹2,500 with both online and in-person options. Booking is simple through our website—just choose a package, share your project details, and get expert support tailored to your needs.
                    </p>

                    <button className="px-8 sm:px-12 py-3 border border-green-400 rounded-bl-none rounded-[2rem] text-sm bg-green-600 text-green-300 hover:bg-green-500 hover:text-black transition-all duration-200">
                        Check Our Solutions
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Consultancy;
