import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo-cut.jpg';
import icon from '../../assets/Greets_icon.jpg'
const ChevronDown = ({ rotated }) => (
    <svg
        className={`w-4 h-4 ml-1 transition-transform duration-200 ${rotated ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

function DesktopItem({ item, idx, openIdx, setOpenIdx, active }) {
    const hasChildren = !!item.children;

    return (
        <li className="relative flex items-center h-full px-1.5">
            <div className="flex items-center group">
                <Link
                    to={item.path}
                    className={`transition-colors py-2 font-medium flex items-center ${active ? 'text-green-700' : 'text-gray-800 hover:text-green-700'
                        }`}
                >
                    {item.label}
                </Link>

                {hasChildren && (
                    <button
                        aria-label="toggle submenu"
                        onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                        className="ml-1 flex items-center"
                    >
                        <ChevronDown rotated={openIdx === idx} />
                    </button>
                )}
            </div>

            {hasChildren && openIdx === idx && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <ul className="py-2">
                        {item.children.map((child) => (
                            <li key={child.path}>
                                <Link
                                    to={child.path}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-700"
                                >
                                    {child.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
}

function MobilePanel({ menu, openIdx, setOpenIdx, close }) {
    const location = useLocation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={close}
        >
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-full bg-[#1C6900] z-50"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end p-4">
                    <button onClick={close} className="text-2xl font-bold text-white">
                        ✕
                    </button>
                </div>

                <nav className="px-6 py-4 space-y-6 text-white">
                    {menu.map((item, idx) => (
                        <div key={item.path}>
                            <div className="flex justify-between items-center text-4xl space-y-2">
                                <Link
                                    to={item.path}
                                    onClick={close}
                                    className={`${location.pathname === item.path ? 'text-green-600' : ''
                                        }`}
                                >
                                    {item.label}
                                </Link>

                                {item.children && (
                                    <button
                                        onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                        aria-label="Toggle submenu"
                                    >
                                        <ChevronDown rotated={openIdx === idx} />
                                    </button>
                                )}
                            </div>

                            {item.children && openIdx === idx && (
                                <ul className="mt-2 pl-4 space-y-2 text-xl">
                                    {item.children.map((child) => (
                                        <li key={child.path}>
                                            <Link
                                                to={child.path}
                                                onClick={close}
                                                className={`block ${location.pathname === child.path
                                                    ? 'text-green-600'
                                                    : 'text-white'
                                                    }`}
                                            >
                                                {child.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </nav>
            </motion.div>
        </motion.div>
    );
}


export default function Navbar() {
    const location = useLocation();

    const menu = [
        { path: '/', label: 'Home' },
        {
            path: '/about',
            label: 'About',
            // children: [{ path: '/testimonial', label: 'Testimonial' }],
        },
        { path: '/services', label: 'Services' },
        {
            path: '/projects',
            label: 'Projects',
            children: [
                { path: '/key-projects', label: 'Key Projects' },
                { path: '/upcoming-projects', label: 'Upcoming Projects ' },
                { path: '/completed-projects', label: 'Completed Projects' },
            ],
        },
        { path: '/contact', label: 'Contact Us' },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [visible, setVisible] = useState(true);
    const [atTop, setAtTop] = useState(true);
    const [lastY, setLastY] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setAtTop(y === 0);
            setVisible(!(y > lastY && y > 100));
            setLastY(y);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [lastY]);

    const variants = {
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        hidden: { y: -80, opacity: 0, transition: { duration: 0.5 } },
    };

    return (
        <AnimatePresence>
            <motion.header
                variants={variants}
                initial="visible"
                animate={visible ? 'visible' : 'hidden'}
                exit="hidden"
                className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between 
          px-4 sm:px-8 lg:px-16 py-2 font-questrial pt-4 ${atTop ? 'bg-white' : 'bg-white shadow-sm'
                    }`}
            >
                <img src={logo} alt="logo" className="w-32 h-20 sm:w-32 sm:h-16" />

                <nav className="hidden md:block">
                    <ul className="flex gap-2 text-sm h-full items-center">
                        {menu.map((item, idx) => (
                            <DesktopItem
                                key={item.path}
                                item={item}
                                idx={idx}
                                openIdx={openDropdown}
                                setOpenIdx={setOpenDropdown}
                                active={location.pathname === item.path}
                            />
                        ))}
                        <li className="flex items-center h-full px-1.5">
                            <img src={icon} alt="Greets Icon" className="w-5 h-5 ml-5" />
                        </li>
                    </ul>
                </nav>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-5xl font-light hover:text-green-700"
                >
                    =
                </button>

                <AnimatePresence>
                    {isMenuOpen && (
                        <MobilePanel
                            menu={menu}
                            openIdx={openDropdown}
                            setOpenIdx={setOpenDropdown}
                            close={() => setIsMenuOpen(false)}
                        />
                    )}
                </AnimatePresence>
            </motion.header>
        </AnimatePresence>
    );
}
