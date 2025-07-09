import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
// import logo from '../../assets/Greets_Logo.avif' // Uncomment and adjust if you want to use an image
import footerlogo from '../../assets/footerlogo.svg'



function FooterSub() {
    const [openProjectsAccordion, setOpenProjectsAccordion] = useState(false)
    const [openAboutAccordion, setOpenAboutAccordion] = useState(false)
    const [openPolicyAccordion, setOpenPolicyAccordion] = useState(false);


    // Dot animation variants
    const dotVariants = {
        initial: { opacity: 0, x: -12 },
        hover: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    }

    return (
        <div className='font-questrial text-black mb-12'>
            <div className='text-center md:flex md:justify-start md:pl-12 mt-8'>
                <h1 className='lg:text-[22rem] text-8xl'>Greets</h1>
            </div>
            <div className='md:flex md:justify-between px-8 mt-5'>
                <div className='md:pl-8  grid grid-cols-1 md:grid-cols-4 lg:text-[14px] text-[10px]  gap-y-8'>
                    <div className='flex flex-col gap-y-1 w-fit relative'>
                        {[
                            { to: '/', label: 'Home' },
                            { to: '/about', label: 'About', isAccordion: true },
                            { to: '/services', label: 'Services' },
                            { to: '/projects', label: 'Projects', isAccordion: true },
                            { to: '/contact', label: 'Contact Us' },
                        ].map((item, idx) => (
                            item.isAccordion ? (
                                <React.Fragment key={item.to}>
                                    <motion.button
                                        type="button"
                                        className="flex items-center gap-1 focus:outline-none group bg-transparent"
                                        onClick={() => item.label === 'Projects' ? setOpenProjectsAccordion((v) => !v) : setOpenAboutAccordion((v) => !v)}
                                        whileHover="hover"
                                        initial="initial"
                                    >
                                        <NavLink
                                            to={item.to}
                                            className="flex items-center gap-1 group bg-transparent"
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    {isActive ? (
                                                        <span className="text-blue-500 text-xs">•</span>
                                                    ) : (
                                                        <motion.span
                                                            variants={dotVariants}
                                                            className="text-black text-xs"
                                                        >
                                                            •
                                                        </motion.span>
                                                    )}
                                                    <span className={isActive ? 'text-blue-500 ' : ''}>{item.label}</span>
                                                </>
                                            )}
                                        </NavLink>
                                        <svg className={`w-3 h-3 ml-1 transition-transform duration-200 ${(item.label === 'Projects' ? openProjectsAccordion : openAboutAccordion) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                                    </motion.button>
                                    {(item.label === 'Projects' ? openProjectsAccordion : openAboutAccordion) && (
                                        <div className="flex flex-col pl-6 py-1 gap-y-1">
                                            <motion.div className="flex items-center gap-1 group" whileHover="hover" initial="initial">
                                                <NavLink to="/projects/one" className="flex items-center gap-1 group">
                                                    {({ isActive }) => (
                                                        <>
                                                            {isActive ? (
                                                                <span className="text-blue-500 text-xs">•</span>
                                                            ) : (
                                                                <motion.span variants={dotVariants} className="text-black text-xs">•</motion.span>
                                                            )}
                                                            <span className={isActive ? 'text-black' : ''}>Project One</span>
                                                        </>
                                                    )}
                                                </NavLink>
                                            </motion.div>
                                            <motion.div className="flex items-center gap-1 group" whileHover="hover" initial="initial">
                                                <NavLink to="/projects/two" className="flex items-center gap-1 group">
                                                    {({ isActive }) => (
                                                        <>
                                                            {isActive ? (
                                                                <span className="text-black text-xs">•</span>
                                                            ) : (
                                                                <motion.span variants={dotVariants} className="text-black text-xs">•</motion.span>
                                                            )}
                                                            <span className={isActive ? 'text-black ' : ''}>Project Two</span>
                                                        </>
                                                    )}
                                                </NavLink>
                                            </motion.div>
                                        </div>
                                    )}
                                </React.Fragment>
                            ) : (
                                <motion.div className="flex items-center gap-1 group" whileHover="hover" initial="initial" key={item.to}>
                                    <NavLink
                                        to={item.to}
                                        className="flex items-center gap-1 group"
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {isActive ? (
                                                    <span className="text-blue-500 text-xs">•</span>
                                                ) : (
                                                    <motion.span
                                                        variants={dotVariants}
                                                        className="text-black text-xs"
                                                    >
                                                        •
                                                    </motion.span>
                                                )}
                                                <span className={isActive ? 'text-blue-500 ' : ''}>{item.label}</span>
                                            </>
                                        )}
                                    </NavLink>
                                </motion.div>
                            )
                        ))}
                    </div>
                    <div className=''>
                        <p>384, 9th Main Rd, 7th Sector<br />HSR Layout, Bengalure <br />Karnataka 560102</p>
                        <p>info@gmail.com</p>
                        <p>080 4302 7655</p>
                    </div>
                    <div className='flex flex-col gap-y-2 w-fit lg:ml-16 md:ml-8'>
                        <NavLink to='/' >LinkedIn</NavLink>
                        <NavLink to='/' >Instagram</NavLink>
                        <NavLink to='/' >Facebook</NavLink>
                    </div>
                    <div className='flex flex-col  gap-y-2 '>
                        <p className='text-[10px] lg:text-[14px]'>Privacy Policy</p>
                        <NavLink to='/codeofethics' className='text-[10px] lg:text-[14px] '>Code of Ethics</NavLink>
                        <NavLink to='/health-saftey-environment' className='text-[10px] lg:text-[14px]'>Health, Safety & Environmental</NavLink>
                        <NavLink to='/quality-policy' className='text-[10px] lg:text-[14px]'>Quality</NavLink>

                    </div>


                </div>
                <div className='relative flex flex-row  items-center justify-center gap-x-1 '>
                    <div>
                        <img src={footerlogo} alt="footerlogo" className='size-32' />
                    </div>

                    <div className="flex items-end  w-full md:w-auto pt-5">
                        <span className="text-sm ">© 2035<span className="align-middle text-xs ml-1 underline">™</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSub

