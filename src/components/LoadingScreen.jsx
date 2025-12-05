import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitText from './SplitText';

const LoadingScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2500); // 2.5s total loading time

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/5 backdrop-blur-3xl shadow-[inset_0_0_50px_rgba(255,255,255,0.1)] text-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="relative flex items-center justify-center">
                {/* Blue Orb */}
                <motion.div
                    className="absolute -inset-10 bg-blue-500/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Purple Orb (New for depth) */}
                <motion.div
                    className="absolute -inset-10 bg-purple-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, -20, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />

                <div className="relative z-10">
                    <SplitText
                        text="Hello, you!"
                        className="text-4xl md:text-7xl font-extrabold font-sans tracking-normal leading-tight text-center drop-shadow-2xl px-4"
                        delay={100}
                        duration={1.2}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        to={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
