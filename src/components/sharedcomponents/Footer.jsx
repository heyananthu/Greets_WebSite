import React from 'react'
import FooterSub from './FooterSub'

function Footer() {
    return (
        <>
            <footer className=" flex flex-wrap items-center justify-between gap-8 px-[5vw] pt-16  w-full font-questrial text-white md:mt-16">
                {/* Left: Brand */}
                <div className="font-bold  text-green-700 leading-none min-w-[350px] flex-1 md:text-7xl text-5xl md:-translate-y-10">
                    FOMO got you <br className='md:block hidden' />  puzzled?
                </div>
                {/* Right: Newsletter */}
                <div className="flex-1 max-w-[500px] w-full ml-auto text-black">
                    <div className="flex justify-center items-center  min-h-[60vh] w-full bg-white">
                        <form className="w-full max-w-xl mx-auto">
                            <div className=" mb-5">
                                <div className="font-normal text-2xl mb-6">Subscribe to our newsletter</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="footer-email" className="block text-sm mb-2 font-medium text-black text-left">Email *</label>
                                <input
                                    id="footer-email"
                                    type="email"
                                    required
                                    className="w-full md:w-[22rem] py-2 px-24 text-lg border border-black outline-none mb-2 bg-transparent font-[Montserrat]"
                                />
                            </div>
                            <div className="flex items-center mb-6">
                                <input
                                    id="newsletter-checkbox"
                                    type="checkbox"
                                    className="w-4 h-4 border border-black mr-3"
                                />
                                <label htmlFor="newsletter-checkbox" className="text-base text-black cursor-pointer select-none">
                                    Yes, subscribe me to your newsletter.
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full md:w-[22rem] bg-green-700 text-white py-2 text-md font-normal transition-colors duration-200 hover:bg-green-800 cursor-pointer"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
            <FooterSub />
        </>
    )
}

export default Footer
