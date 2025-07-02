import React from 'react';

function Strategy() {
    return (
        <div className="h-screen w-full flex items-center justify-center font-questrial px-4">
            <div className="w-[92vw] max-w-screen h-full rounded-[48px] rounded-br-none rounded-bl-none flex flex-col md:flex-row overflow-hidden">
                {/* Left Side */}
                <div className="flex-1 flex flex-col items-center justify-center px-6 py-8  bg-[#f0f0f0]">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center  font-questrial">Strategy</h2>
                    <p className='italic text-md text-center'>Engineered for impact. Delivered with purpose.</p>
                    <p className="text-green-700 text-md md:text-lg max-w-sm mt-6">
                        At GREETS, we design and integrate smart, sustainable MEP solutions tailored to your space, goals, and budget.<br />

                        More than system installers, we align technical expertise with real-world functionality to reduce energy use, enhance safety, and enable automation<br />

                        all in a cost-effective, future-ready way.                    </p>
                </div>

                {/* Right Side */}
                <div className="flex-1 flex flex-col items-center justify-center  py-8  bg-white">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center  font-questrial">Execution</h2>
                    <p className='italic text-md text-center'>Built to precision. Delivered with confidence.</p>
                    <p className="text-green-700 text-md md:text-lg max-w-sm mt-6">
                        At GREETS, we turn plans into reality with precision, speed, and quality. From resorts to commercial facilities, our certified team ensures seamless coordination, timely delivery, and site specific execution — all while upholding safety and sustainability. With proven success across India, the Maldives, Seychelles, and Africa, we deliver projects exactly as envisioned.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Strategy;
