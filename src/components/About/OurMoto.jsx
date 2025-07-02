import React from 'react'

function OurMoto() {
    return (
        <div className='font-questrial flex flex-col lg:flex-row  items-center justify-center bg-green-700 h-full py-12 lg:py-48'>
            <div className='lg:w-[40%] text-center'>
                <h1 className='text-4xl font-bold'>Our Moto</h1>
            </div>
            <div className='lg:w-[60%] lg:text-left text-center mt-5 lg:mt-0'>
                <p className='lg:w-[80%] text-white text-xl lg:text-3xl lg:leading-10'>Our motive is to <br className='hidden' />
                    “Strive continuously towards transformation <br className='hidden' />
                    by providing ecological design solutions that are <br className='hidden' />
                    Effective, Affordable, and Remarkable.”</p>
            </div>

        </div>
    )
}

export default OurMoto  
