import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import logo from '../../assets/Greets_Logo.avif' // Uncomment and adjust if you want to use an image
import footerlogo from '../../assets/footerlogo.svg'
function FooterSub() {
    const [openAccordion, setOpenAccordion] = useState(false)

    return (
        <div className='font-questrial text-black mb-12'>
            <div className='text-center md:flex md:justify-start md:pl-12 mt-8'>
                <h1 className='lg:text-[19rem] text-8xl'>Greets</h1>
            </div>
            <div className='md:flex md:justify-between px-8 mt-5'>
                <div className='md:pl-8  grid grid-cols-1 md:grid-cols-4 text-[14px] gap-x-12 gap-y-8'>
                    <div className='flex flex-col gap-y-1 w-fit relative'>
                        <NavLink
                            to='/'
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-1 ${isActive ? 'text-blue-500 font-semibold' : ''}`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && <span className="text-blue-500 text-xs">•</span>}
                                    Home
                                </>
                            )}
                        </NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : ''}>About</NavLink>
                        <NavLink to='/services' className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : ''}>Services</NavLink>
                        <button
                            type="button"
                            className="flex items-center gap-1 focus:outline-none"
                            onClick={() => setOpenAccordion((v) => !v)}
                        >
                            <NavLink
                                to='/projects'
                                className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : ''}
                            >
                                Projects
                            </NavLink>
                            <svg className={`w-3 h-3 ml-1 transition-transform duration-200 ${openAccordion ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        {openAccordion && (
                            <div className="flex flex-col pl-6 py-1 gap-y-1">
                                <NavLink to="/projects/one" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : ''}>Project One</NavLink>
                                <NavLink to="/projects/two" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : ''}>Project Two</NavLink>
                            </div>
                        )}
                        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : ''}>Contact Us</NavLink>
                    </div>
                    <div className='md:-translate-x-16'>
                        <p>500 Terry Francine Street,<br />  San Francisco, CA 94158</p>
                        <p>info@gmail.com</p>
                        <p>123-456-7890</p>
                    </div>
                    <div className='flex flex-col gap-y-2 w-fit'>
                        <NavLink to='/' >LinkedIn</NavLink>
                        <NavLink to='/' >Instagram</NavLink>
                        <NavLink to='/' >Facebook</NavLink>
                    </div>
                    <div className='md:-translate-x-16'>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className='relative flex items-center gap-x-1 '>
                    <img src={footerlogo} alt="footerlogo" className='size-32' />
                    <div className="flex items-end  w-full md:w-auto mt-8">
                        <span className="text-sm ">© 2035<span className="align-super text-xs ml-1">_™</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSub
