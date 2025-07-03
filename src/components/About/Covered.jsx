import React from 'react';
import img1 from '../../assets/covered-img1.png';
import img2 from '../../assets/covered-img2.png';
import img3 from '../../assets/covered-img3.png';

function Covered() {
  return (
    <div className="font-questrial bg-gray-100 min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl lg:text-7xl font-bold mb-10 sm:mb-12">
          We’ve Been Covered
        </h1>

        {/* Covered Logos */}
        <div className="bg-green-700 flex flex-col md:flex-row justify-center lg:justify-around items-center gap-8 px-6 py-10 rounded-[2rem]">
          <img src={img1} alt="covered 1" className="w-32 md:w-28 lg:w-40 object-contain" />
          <img src={img2} alt="covered 2" className="w-28 md:w-24 lg:w-32 object-contain" />
          <img src={img3} alt="covered 3" className="w-32 md:w-28 lg:w-40 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Covered;
