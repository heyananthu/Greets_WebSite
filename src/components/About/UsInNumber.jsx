import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const numbers = [
    {
        value: 100,
        start: 90,
        suffix: 'M+',
        prefix: '$',
        desc: "Clients' Income during the Last Quarter",
    },
    {
        value: 5,
        suffix: '',
        prefix: '',
        desc: 'Industry Awards',
    },
    {
        value: 350,
        suffix: '',
        prefix: '',
        desc: 'Business Partners in over 8 Countries',
    },
    {
        value: 10,
        start: 5,
        suffix: '',
        prefix: '',
        desc: 'Years of Experience',
    },
];

// ✅ Digit component with scroll animation
const ScrollingDigit = ({ targetDigit, startDigit = 0, delay = 0 }) => {
    const digitHeight = 1.2; // in em

    return (
        <div className="relative inline-block overflow-hidden" style={{ width: '1ch', height: `${digitHeight}em` }}>
            <motion.div
                className="absolute top-0 left-0 w-full flex flex-col items-center"
                initial={{ y: `-${startDigit * digitHeight}em` }}
                animate={{ y: `-${targetDigit * digitHeight}em` }}
                transition={{
                    duration: 1.5,
                    delay: delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div
                        key={num}
                        className="w-full text-center"
                        style={{ height: `${digitHeight}em`, lineHeight: `${digitHeight}em` }}
                    >
                        {num}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

// ✅ Counter component with optional startValue
const Counter = ({ targetValue, prefix, suffix, isVisible, startValue = 0 }) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isVisible && !hasAnimated) {
            setHasAnimated(true);
            setTimeout(() => {
                setShouldAnimate(true);
            }, 200);
        }
    }, [isVisible, hasAnimated]);

    const targetStr = targetValue.toString();
    const paddedStart = startValue
        .toString()
        .padStart(targetStr.length, '0');

    const targetDigits = targetStr.split('').map(Number);
    const startDigits = paddedStart.split('').map(Number);

    return (
        <span className="inline-flex items-center">
            {prefix}
            <span className="inline-flex">
                {shouldAnimate
                    ? targetDigits.map((digit, index) => (
                        <ScrollingDigit
                            key={index}
                            targetDigit={digit}
                            startDigit={startDigits[index]}
                            delay={index * 0.1}
                        />
                    ))
                    : startDigits.map((digit, index) => (
                        <span key={index} style={{ width: '1ch' }}>
                            {digit}
                        </span>
                    ))}
            </span>
            {suffix}
        </span>
    );
};


// ✅ Main Section Component
function UsInNumber() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -100px 0px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="bg-green-700 text-white font-questrial min-h-screen py-8 px-4">
            <div className="max-w-screen mx-auto px-12 pt-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-24">Us in Numbers</h1>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* First Card (100 → from 90) */}
                    <div className="bg-white text-black rounded-[3rem] p-8 flex flex-col justify-end min-h-[290px] w-full md:w-[38rem] shadow-md transform transition-all duration-500 hover:scale-105">
                        <h1 className="text-4xl md:text-7xl font-medium mb-2">
                            <Counter
                                targetValue={numbers[0].value}
                                startValue={numbers[0].start}
                                prefix={numbers[0].prefix}
                                suffix={numbers[0].suffix}
                                isVisible={isVisible}
                            />
                        </h1>
                        <p className="text-sm md:text-lg text-black font-normal opacity-80">{numbers[0].desc}</p>
                    </div>

                    {/* Second Card */}
                    <div className="bg-white text-black rounded-[3rem] p-8 flex flex-col justify-end min-h-[290px] w-full md:w-[29rem] shadow-md transform transition-all duration-500 hover:scale-105">
                        <h1 className="text-4xl md:text-7xl font-medium mb-2">
                            <Counter
                                targetValue={numbers[1].value}
                                prefix={numbers[1].prefix}
                                suffix={numbers[1].suffix}
                                isVisible={isVisible}
                            />
                        </h1>
                        <p className="text-sm md:text-lg text-black font-normal opacity-80">{numbers[1].desc}</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 mt-8">
                    {/* Third Card */}
                    <div className="bg-white text-black rounded-[3rem] rounded-bl-none p-8 flex flex-col justify-end min-h-[320px] w-full md:w-[38rem] shadow-md transform transition-all duration-500 hover:scale-105">
                        <h1 className="text-4xl md:text-7xl font-medium mb-2">
                            <Counter
                                targetValue={numbers[2].value}
                                prefix={numbers[2].prefix}
                                suffix={numbers[2].suffix}
                                isVisible={isVisible}
                            />
                        </h1>
                        <p className="text-sm md:text-lg text-black font-normal opacity-80">{numbers[2].desc}</p>
                    </div>

                    {/* Fourth Card (10 → from 0) */}
                    <div className="bg-white text-black rounded-[3rem] rounded-br-none p-8 flex flex-col justify-end min-h-[290px] w-full md:w-[29rem] shadow-md transform transition-all duration-500 hover:scale-105">
                        <h1 className="text-4xl md:text-7xl font-medium mb-2">
                            <Counter
                                targetValue={numbers[3].value}
                                startValue={numbers[3].start}
                                prefix={numbers[3].prefix}
                                suffix={numbers[3].suffix}
                                isVisible={isVisible}
                            />
                        </h1>
                        <p className="text-sm md:text-lg text-black font-normal opacity-80">{numbers[3].desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsInNumber;
