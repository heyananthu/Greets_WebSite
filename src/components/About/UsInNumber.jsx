import React from 'react'

const numbers = [
    {
        value: '$100M+',
        desc: "+ Clients' Income during the Last Quarter",
    },
    {
        value: '5',
        desc: 'Industry Awards',
    },
    {
        value: '350',
        desc: 'Business Partners in over 8 Countries',
    },
    {
        value: '10',
        desc: 'Years of Experience',
    },
];

function UsInNumber() {
    return (
        <div className='bg-black text-white font-questrial min-h-screen py-8 px-4'>
            <div className="max-w-screen mx-auto px-12 pt-12">
                <h1 className="text-2xl md:text-4xl font-bold mb-32">Us in Numbers</h1>
                <div className="flex flex-col md:flex-row gap-8 ">
                    <div
                        className="bg-white text-black rounded-[3rem] p-8 flex flex-col justify-end min-h-[290px] w-full md:w-[38rem] shadow-md"
                    >
                        <h1 className='text-4xl md:text-7xl font-medium mb-2'>$100M+</h1>
                        <p className='text-sm md:text-lg text-black font-normal opacity-80'>Clients’ Income during the Last Quarter</p>
                    </div>
                    <div
                        className="bg-white  text-black rounded-[3rem] p-8 flex flex-col justify-end min-h-[290px] w-full md:w-[29rem] shadow-md"
                    >
                        <h1 className='text-4xl md:text-7xl font-medium mb-2'>5</h1>
                        <p className='text-sm md:text-lg text-black font-normal opacity-80'>Industry Awards</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row  gap-8 mt-8'>
                    <div
                        className="bg-white  text-black rounded-[3rem] rounded-bl-none p-8 flex flex-col justify-end min-h-[320px] w-full md:w-[38rem] shadow-md"
                    >
                        <h1 className='text-4xl md:text-7xl font-medium mb-2'>350</h1>
                        <p className='text-sm md:text-lg text-black font-normal opacity-80'>Business Partners in over 8 Countries</p>
                    </div>
                    <div
                        className="bg-white  text-black rounded-[3rem] rounded-br-none p-8 flex flex-col justify-end min-h-[290px] w-full md:w-[29rem] shadow-md"
                    >
                        <h1 className='text-4xl md:text-7xl font-medium mb-2'>10</h1>
                        <p className='text-sm md:text-lg text-black font-normal opacity-80'>Years of Experience</p>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default UsInNumber

