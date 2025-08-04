import React from 'react'
import map from '../../assets/about-map-new.png'
function Presence() {
    return (
        <div className='font-questrial w-full bg-gray-50 py-4 lg:py-8'>
            <div className='w-full max-w-7xl mx-auto px-4 md:px-8'>
                <h1 className='text-green-700 md:text-5xl text-3xl font-bold text-center mb-8'>Global foot print </h1>
                <div className='w-full flex justify-center'>
                    <img 
                        src={map} 
                        alt="Global Presence Map" 
                        className='w-full max-w-full h-auto max-h-[400px] md:w-[80rem] md:max-h-[300px] lg:max-h-[500px] object-contain '
                    />
                </div>
                {/* <div className='flex items-start justify-center'>
                    <div className='py-28'>
                        <div className='flex justify-center lg:justify-end  lg:pr-32 lg:mb-12'>
                            <h1 className='text-green-700 text-5xl font-bold text-center lg:text-right'>Global foot print </h1>
                        </div>
                        <p className='font-bold p-5 text-center lg:text-left'>Headquartered in India, with a local presence in tropical countries such as Mauritius and Seychelles, and operational reach in the Maldives, St. Lucia, Gambia, and several other African nations.</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Presence

