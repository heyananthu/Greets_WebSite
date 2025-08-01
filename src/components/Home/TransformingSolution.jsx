import React from 'react';
import banner from '../../assets/transform.avif';

function TransformingSolution() {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat h-fit md:h-[50rem] w-full py-12 mt-24"
            style={{ backgroundImage: `url(${banner})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex  h-full px-6 sm:px-10 md:px-20 lg:pl-36 lg:pt-20 ">
                <div className="text-white space-y-6 md:space-y-20 font-questrial max-w-6xl text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5rem]  mb-4 md:mb-8">
                        Building Tomorrow with Green <br className='hidden lg:block'/>
                        Transforming Solutions
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg  max-w-4xl sm:max-w-5xl">
                        <span className='font-bold'>Dummy : </span>Welcome to Green Transforming Solutions, where our passion lies in blending innovative architecture with sustainability. Our mission is to redefine space and functionality while considering the impact on our planet. With a hands-on approach and extensive experience in architecture, I am dedicated to crafting unique and environmentally conscious designs that meet the needs of our clients. Let's collaborate to build a future that prioritizes both beauty and functionality in every project we undertake. Welcome to Green Transforming Solutions, where our passion lies in blending innovative architecture with sustainability. Our mission is to redefine space and functionality while considering the impact on our planet. With a hands-on approach and extensive experience in architecture, I am dedicated to crafting unique and environmentally conscious designs that meet the needs of our clients. Let's collaborate to build a future that prioritizes both beauty and functionality in every project we undertake.                    </p>

                    {/* <button className=" px-8 sm:px-10 py-2 sm:py-3 border border-white bg-transparent rounded-bl-none rounded-[5rem] text-white text-sm hover:bg-green-700 hover:bg-opacity-20 transition-all duration-200">
                        Read More
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default TransformingSolution;
