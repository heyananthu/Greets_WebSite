import React from 'react'
import Navbar from '../../sharedcomponents/Navbar'
import Footer from '../../sharedcomponents/Footer'
import { completedProjects } from '../../../lib/projects'

// Group into chunks of 10
const chunks = [];
for (let i = 0; i < completedProjects.length; i += 10) {
  chunks.push(completedProjects.slice(i, i + 10));
}

const lastData = [
  { name: "IOCL -Ventilation & Smoke Pressurisation", country: "INDIA" },
  { name: "Residential - Indore", country: "INDIA" },
  { name: "Donapolla", country: "INDIA" },
  { name: "Vruddhi - St.Marks Bangalore", country: "INDIA" },
  { name: "Atmosphere Resort, Coorg", country: "INDIA" },
]

function Completed() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 py-10 px-2 sm:px-10 font-wix mt-24">
        <div className="max-w-screen px-6">
          <h2 className="font-bold text-[31px] mb-6">Completed Projects</h2>
          {chunks.map((chunk, chunkIdx) => {
            // Prepare 5 rows per chunk
            const rows = [];
            for (let i = 0; i < 5; i++) {
              rows.push([
                chunk[i],         // left project
                chunk[i + 5],     // right project
              ]);
            }
            return (
              <div key={chunkIdx} className={`grid grid-cols-1 lg:grid-cols-2 gap-x-24 ${chunkIdx < chunks.length - 1 ? 'mb-24' : ''}`}>
                {rows.map((pair, rowIdx) => (
                  <React.Fragment key={rowIdx}>
                    {/* Left cell */}
                    <div className="flex items-center border-b-1 border-black py-4 min-h-[90px] ">
                      {pair[0] && (
                        <>
                          <span className="text-[18px] font-normal w-8 text-right mr-4">
                            {(chunkIdx * 10 + rowIdx + 1).toString().padStart(2, '0')}
                          </span>
                          <span className="flex-1 font-bold text-[18px] md:text-[28px]">
                            {pair[0].name}
                          </span>
                          <span className="font-bold text-[18px] md:text-[28px] text-right w-32">
                            {pair[0].country}
                          </span>
                        </>
                      )}
                    </div>
                    {/* Right cell */}
                    <div className="flex items-center border-b-1 border-black py-4 min-h-[90px]">
                      {pair[1] && (
                        <>
                          <span className="text-[18px] font-normal w-8 text-right mr-4">
                            {(chunkIdx * 10 + rowIdx + 6).toString().padStart(2, '0')}
                          </span>
                          <span className="flex-1 font-bold text-[18px] md:text-[28px]">
                            {pair[1].name}
                          </span>
                          <span className="font-bold text-[18px] md:text-[28px] text-right w-32">
                            {pair[1].country}
                          </span>
                        </>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            );
          })}
          {/* Render lastData: 3 left, 2 right, aligned row by row, no empty cells */}
          {(() => {
            const left = lastData.slice(0, 3);
            const right = lastData.slice(3, 5);
            const maxRows = Math.max(left.length, right.length);
            return (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 mt-24">
                {[...Array(maxRows)].map((_, idx) => (
                  <React.Fragment key={idx}>
                    {/* Left cell */}
                    {left[idx] && (
                      <div className="flex items-center border-b-1 border-black py-4 min-h-[90px]">
                        <span className="text-[18px] font-normal w-8 text-right mr-4">
                          {(chunks.length * 10 + idx + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="flex-1 font-bold text-[18px] md:text-[28px]">
                          {left[idx].name}
                        </span>
                        <span className="font-bold text-[18px] md:text-[28px] text-right w-32">
                          {left[idx].country}
                        </span>
                      </div>
                    )}
                    {/* Right cell */}
                    {right[idx] && (
                      <div className="flex items-center border-b-1 border-black py-4 min-h-[90px]">
                        <span className="text-[18px] font-normal w-8 text-right mr-4">
                          {(chunks.length * 10 + 3 + idx + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="flex-1 font-bold text-[18px] md:text-[28px]">
                          {right[idx].name}
                        </span>
                        <span className="font-bold text-[18px] md:text-[28px] text-right w-32">
                          {right[idx].country}
                        </span>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            );
          })()}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Completed
