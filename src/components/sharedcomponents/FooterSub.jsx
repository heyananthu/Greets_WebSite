import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
// import logo from '../../assets/Greets_Logo.avif' // Uncomment and adjust if you want to use an image
import footerlogo from '../../assets/logo2.jpg'



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
            {/* <div className='text-center md:flex md:justify-start md:pl-12 mt-8'>
                <h1 className='lg:text-[20rem] text-8xl'>Greets</h1>
            </div> */}
            <div className='md:flex md:justify-between px-8 mt-5'>
                <div className='md:pl-8  grid grid-cols-1 md:grid-cols-3  text-[14px] gap-x-5  gap-y-8'>
                    <div className='flex flex-col gap-y-1 w-fit relative'>
                        {[
                            { to: '/', label: 'Home' },
                            {
                                to: '/about', label: 'About', isAccordion: true, children: [
                                    { to: '/testimonial', label: 'Testimonial' }
                                ]
                            },
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
                                            {/* About submenu */}
                                            {item.label === 'About' && item.children && item.children.map((sub, subIdx) => (
                                                <motion.div className="flex items-center gap-1 group" whileHover="hover" initial="initial" key={sub.to}>
                                                    <NavLink to={sub.to} className="flex items-center gap-1 group">
                                                        {({ isActive }) => (
                                                            <>
                                                                {isActive ? (
                                                                    <span className="text-blue-500 text-xs">•</span>
                                                                ) : (
                                                                    <motion.span variants={dotVariants} className="text-black text-xs">•</motion.span>
                                                                )}
                                                                <span className={isActive ? 'text-black' : ''}>{sub.label}</span>
                                                            </>
                                                        )}
                                                    </NavLink>
                                                </motion.div>
                                            ))}
                                            {/* Projects submenu */}
                                            {item.label === 'Projects' && (
                                                <>
                                                    <motion.div className="flex items-center gap-1 group" whileHover="hover" initial="initial">
                                                        <NavLink to="/key-projects" className="flex items-center gap-1 group">
                                                            {({ isActive }) => (
                                                                <>
                                                                    {isActive ? (
                                                                        <span className="text-blue-500 text-xs">•</span>
                                                                    ) : (
                                                                        <motion.span variants={dotVariants} className="text-black text-xs">•</motion.span>
                                                                    )}
                                                                    <span className={isActive ? 'text-black' : ''}>Key Projects</span>
                                                                </>
                                                            )}
                                                        </NavLink>
                                                    </motion.div>
                                                    <motion.div className="flex items-center gap-1 group" whileHover="hover" initial="initial">
                                                        <NavLink to="/upcoming-projects" className="flex items-center gap-1 group">
                                                            {({ isActive }) => (
                                                                <>
                                                                    {isActive ? (
                                                                        <span className="text-black text-xs">•</span>
                                                                    ) : (
                                                                        <motion.span variants={dotVariants} className="text-black text-xs">•</motion.span>
                                                                    )}
                                                                    <span className={isActive ? 'text-black ' : ''}>Upcoming Projects</span>
                                                                </>
                                                            )}
                                                        </NavLink>
                                                    </motion.div>
                                                    <motion.div className="flex items-center gap-1 group" whileHover="hover" initial="initial">
                                                        <NavLink to="/completed-projects" className="flex items-center gap-1 group">
                                                            {({ isActive }) => (
                                                                <>
                                                                    {isActive ? (
                                                                        <span className="text-black text-xs">•</span>
                                                                    ) : (
                                                                        <motion.span variants={dotVariants} className="text-black text-xs">•</motion.span>
                                                                    )}
                                                                    <span className={isActive ? 'text-black ' : ''}>Completed Projects</span>
                                                                </>
                                                            )}
                                                        </NavLink>
                                                    </motion.div>
                                                </>
                                            )}
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
                        {/* <p>080 4302 7655</p> */}
                    </div>
                    {/* <div className='flex flex-col gap-y-2 w-fit lg:ml-16 md:ml-8'>
                        <NavLink to='/' >LinkedIn</NavLink>
                        <NavLink to='/' >Instagram</NavLink>
                        <NavLink to='/' >Facebook</NavLink>
                    </div> */}
                    <div className='flex flex-col  gap-y-2 lg:ml-16 md:ml-8'>
                        <p className='text-[14px]'>Privacy Policy</p>
                        {/* <NavLink to='/codeofethics' className='text-[14px] '>Code of Ethics</NavLink>
                        <NavLink to='/health-saftey-environment' className='text-[14px]'>Health, Safety & Environmental</NavLink>
                        <NavLink to='/quality-policy' className='text-[14px]'>Quality</NavLink> */}
                    </div>
                </div>
                <div className='relative flex flex-row  items-center justify-center gap-x-4 mt-4'>
                    <div>
                        <img src={footerlogo} alt="footerlogo" className='lg:size-40 lg:h-28 h-14 md:mb-1' />
                    </div>

                    <div className="flex items-end  w-full md:w-auto lg:mt-auto md:mt-4 lg:mb-4 ">
                        <span className="text-sm ">© 2035<span className="align-middle text-xs ml-1 underline">™</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSub

