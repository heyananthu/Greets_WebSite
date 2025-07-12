import React from 'react'
import map from '../../assets/about-map-new.png'
function Presence() {
    return (
        <div className='font-questrial flex w-full  h-full bg-gray-50 py-2 lg:pb-36'>
            <div className='flex flex-col lg:flex-row p-4 md:pl-16'>
                <div className=''>
                    <img src={map} alt="" className='w-full lg:w-[80rem] ' />
                </div>
                <div className='flex items-start justify-center'>
                    <div className='py-28'>
                        <div className='flex justify-center lg:justify-end  lg:pr-32 lg:mb-12'>
                            <h1 className='text-green-700 text-5xl font-bold text-center lg:text-right'>Global foot print </h1>
                        </div>
                        <p className='font-bold p-5 text-center lg:text-left'>Headquartered in India, with a local presence in tropical countries such as Mauritius and Seychelles, and operational reach in the Maldives, St. Lucia, Gambia, and several other African nations.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presence

