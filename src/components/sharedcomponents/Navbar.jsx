import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../assets/Greets_Logo.avif'

// ChevronDown SVG component
const ChevronDown = ({ className = '' }) => (
  <svg
    className={`w-4 h-4 inline-block ml-1 transition-transform duration-200 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isAtTop, setIsAtTop] = useState(true)
    const location = useLocation()
    const [openDropdown, setOpenDropdown] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            setIsAtTop(currentScrollY === 0)

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down and past 100px
                setIsVisible(false)
            } else {
                // Scrolling up
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const isActive = (path) => {
        return location.pathname === path
    }

    const menuItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        {
            path: '/projects',
            label: 'Projects',
            children: [
                { path: '/projects/all', label: 'All Projects' },
                { path: '/projects/ongoing', label: 'Ongoing' },
                { path: '/projects/completed', label: 'Completed' }
            ]
        },
        { path: '/contact', label: 'Contact Us' }
    ]

    const navbarVariants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                opacity: { duration: 0.4 }
            }
        },
        hidden: {
            y: -100,
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: [0.55, 0.055, 0.675, 0.19],
                opacity: { duration: 0.6, delay: 0.1 }
            }
        }
    }

    return (
        <AnimatePresence>
            <motion.div
                className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-8 lg:px-16 p-2 font-questrial ${isAtTop ? 'bg-gray-100' : 'bg-white'}`}
                variants={navbarVariants}
                initial="visible"
                animate={isVisible ? "visible" : "hidden"}
                exit="hidden"
            >
                <div>
                    <img src={logo} alt="logo" className='w-32 h-20 sm:w-40 sm:h-24' />
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:block'>
                    <ul className='flex gap-8 text-sm'>
                        {menuItems.map((item, idx) => (
                            <li key={item.path} className='relative'>
                                {item.children ? (
                                    <div className="inline-block">
                                        <button
                                            type="button"
                                            onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                                            className={`cursor-pointer transition-colors flex items-center ${isActive(item.path)
                                                ? 'text-green-700 px-3 py-2 rounded-md'
                                                : 'text-gray-700'
                                                }`}
                                        >
                                            {item.label}
                                            <ChevronDown className={openDropdown === idx ? 'rotate-180' : ''} />
                                        </button>
                                        {/* Dropdown */}
                                        {openDropdown === idx && (
                                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                                <ul className="py-2">
                                                    {item.children.map((child) => (
                                                        <li key={child.path}>
                                                            <Link
                                                                to={child.path}
                                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-700 transition-colors"
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className={`cursor-pointer transition-colors ${isActive(item.path)
                                            ? 'text-green-700 px-3 py-2 rounded-md'
                                            : 'text-gray-700'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button
                        onClick={toggleMenu}
                        className='text-5xl font-light hover:text-green-700 transition-colors'
                        aria-label="Toggle menu"
                    >
                        =
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
                            onClick={toggleMenu}
                        >
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className='fixed top-0 right-0 h-full w-full bg-[#1C6900] shadow-lg z-50'
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className='flex justify-end p-4'>
                                    <button
                                        onClick={toggleMenu}
                                        className='text-2xl font-bold text-white hover:text-green-700 transition-colors'
                                        aria-label="Close menu"
                                    >
                                        ✕
                                    </button>
                                </div>
                                <nav className='px-6 py-4 h-screen bg-[#1C6900]'>
                                    <ul className='space-y-4 text-lg'>
                                        {menuItems.map((item, idx) => (
                                            <li key={item.path} className='border-gray-200 pb-2 text-5xl'>
                                                {item.children ? (
                                                    <div>
                                                        <button
                                                            type="button"
                                                            onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                                                            className="flex items-center w-full text-left text-white focus:outline-none"
                                                        >
                                                            {item.label}
                                                            <ChevronDown className={openDropdown === idx ? 'rotate-180' : ''} />
                                                        </button>
                                                        {openDropdown === idx && (
                                                            <ul className="pl-6 mt-2 space-y-2">
                                                                {item.children.map((child) => (
                                                                    <li key={child.path} className="text-3xl">
                                                                        <Link
                                                                            to={child.path}
                                                                            onClick={toggleMenu}
                                                                            className="block text-white hover:text-green-400 transition-colors"
                                                                        >
                                                                            {child.label}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <Link
                                                        to={item.path}
                                                        onClick={toggleMenu}
                                                        className="cursor-pointer transition-colors block text-white"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    )
}

export default Navbar
