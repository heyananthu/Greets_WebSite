import React from 'react'
import FooterSub from './FooterSub'

function Footer() {
    return (
        <>
            <footer className=" flex flex-wrap items-center justify-between gap-8 px-[3vw] pt-16  w-full font-questrial text-white md:mt-16">
                {/* Left: Brand */}
                <div className="font-bold  text-green-700 leading-none min-w-[350px] flex-1 md:text-7xl text-5xl md:-translate-y-10">
                    FOMO got<br className='md:block hidden' /> you puzzled?
                </div>
                {/* Right: Newsletter */}
                <div className="flex-1 max-w-[700px] w-full ml-auto text-black">
                    <div className=" font-normal text-sm mb-6">
                        Not anymore. Subscribe to our weekly newsletter.
                    </div>
                    <form className="w-full">
                        <label htmlFor="footer-email" className="block  text-sm mb-2">
                            Email *
                        </label>
                        <input
                            id="footer-email"
                            type="email"
                            required
                            className="w-full py-3 px-2 text-lg border-0 border-b border-black outline-none mb-8 bg-transparent font-[Montserrat]"
                        />
                        <div className='flex justify-end'>
                            <button
                                type="submit"
                                className="px-28 bg-black text-[#6fff3e] rounded-full py-2 text-sm  font-medium transition-colors duration-200 hover:bg-[#6fff3e] hover:text-black cursor-pointer"
                            >
                                Subscribe
                            </button>

                        </div>

                    </form>
                </div>
            </footer>
            <FooterSub />
        </>
    )
}

export default Footer
