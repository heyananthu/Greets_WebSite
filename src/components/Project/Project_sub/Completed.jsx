import React from 'react'
import Navbar from '../../sharedcomponents/Navbar'
import Footer from '../../sharedcomponents/Footer'
import { completedProjects } from '../../../lib/projects'

// Group into rows of 10 (5 left, 5 right)
const rows = [];
for (let i = 0; i < completedProjects.length; i += 10) {
  rows.push(completedProjects.slice(i, i + 10));
}

function Completed() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 py-10 px-2 sm:px-10 font-wix mt-28">
        <div className="max-w-screen px-6">
          <h2 className="font-bold text-[31px] mb-6">Completed Projects</h2>
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2 gap-x-24">
              {/* Left column */}
              <div className='mb-20'>
                {row.slice(0, 5).map((item, idx) => (
                  <div key={rowIdx * 10 + idx + 1} className="flex items-center border-b-1 border-black py-4">
                    <span className="text-[18px] font-normal w-8 text-right mr-4">{rowIdx * 10 + idx + 1}</span>
                    <span className="flex-1 font-bold text-[18px] md:text-[28px]">{item.name}</span>
                    <span className="font-bold text-[18px] md:text-[28px] text-left w-32">{item.country}</span>
                  </div>
                ))}
              </div>
              {/* Right column */}
              <div>
                {row.slice(5, 10).map((item, idx) => (
                  <div key={rowIdx * 10 + idx + 6} className="flex items-center border-b-1 border-black py-4">
                    <span className="text-[18px] font-normal w-8 text-right mr-4">{rowIdx * 10 + idx + 6}</span>
                    <span className="flex-1 font-bold text-[18px] md:text-[28px]">{item.name}</span>
                    <span className="font-bold text-[18px] md:text-[28px] text-left w-32">{item.country}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Completed
