import React from 'react';
import Navbar from '../../sharedcomponents/Navbar';
import Footer from '../../sharedcomponents/Footer';
import prj1 from '../../../assets/upcomingprj/prj1.avif';
import prj2 from '../../../assets/upcomingprj/prj2.avif';
import prj3 from '../../../assets/upcomingprj/prj3.avif';
import prj4 from '../../../assets/upcomingprj/prj4.avif';
import prj5 from '../../../assets/upcomingprj/prj5.avif';

function Upcoming() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 mt-28">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 px-4 mt-12 font-wix">
          <h2 className="text-2xl lg:text-[38px] font-semibold mb-2 md:mb-6 text-center lg:w-2/3">
            OUR LATEST & UPCOMING PROJECTS
          </h2>
          <p className="lg:w-[54%] text-[16px] text-gray-700 text-left lg:px-12 mb-6">
            Our upcoming and latest projects reflect our continued commitment to excellence, innovation, and sustainable development. From modern residential communities and smart commercial spaces to eco-conscious hospitality ventures, we are currently engaged in a range of projects that push design boundaries while meeting the evolving needs of our clients. Each project is carefully planned and executed to ensure quality, functionality, and long-term value.
          </p>
        </div>

        {/* First Row */}
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-24 px-4 lg:px-12 mb-10'>
          {/* Project 1 */}
          <div className='w-full lg:w-fit'>
            <img
              src={prj1}
              className='w-full lg:w-[43rem] h-auto md:w-auto md:h-auto lg:h-[33rem] object-cover mb-2'
              alt='Upcoming Project'
            />
            <p className='mt-4 text-center lg:text-left'>Project 01</p>
          </div>

          {/* Project 2 and 3 */}
          <div className='flex flex-col lg:flex-row gap-1 w-full '>
            {/* Project 2 */}
            <div className='w-full  lg:flex lg:flex-col justify-end lg:h-screen'>
              <img
                src={prj2}
                className='w-full lg:w-[25rem] h-auto md:w-auto md:h-auto lg:h-[33rem] object-cover mb-2'
                alt='Upcoming Project'
              />
              <p className='mt-4 text-center lg:text-left'>Project 02</p>
            </div>

            {/* Project 3 */}
            <div className='w-full '>
              <img
                src={prj3}
                className='w-full lg:w-[32rem] h-auto md:w-auto md:h-auto lg:h-[40rem] object-cover mb-2'
                alt='Upcoming Project'
              />
              <p className='mt-4 text-center lg:text-left'>Project 03</p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className='flex flex-col lg:flex-row gap-10 px-4 lg:px-12 mb-10 h-screen'>
          {/* Project 4 */}
          <div className='w-full lg:w-[75%] flex flex-col justify-end'>
            <img
              src={prj4}
              className='w-full h-auto lg:h-auto object-cover mb-2'
              alt='Upcoming Project'
            />
            <p className='mt-4 text-center lg:text-left'>Project 04</p>
          </div>

          {/* Project 5 */}
          <div className='w-full lg:w-auto'>
            <img
              src={prj5}
              className='w-full lg:w-[32rem] h-auto md:w-auto md:h-auto lg:h-[35rem] object-cover mb-2'
              alt='Upcoming Project'
            />
            <p className='mt-4 text-center lg:text-left'>Project 05</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='mt-28 lg:mt-0 md:mt-[40rem]'>
        <Footer />
      </div>
    </div>
  );
}

export default Upcoming;
