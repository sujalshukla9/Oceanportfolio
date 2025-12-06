import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-[100dvh] flex items-center justify-center pt-16 bg-transparent overflow-hidden relative">
            {/* Background Elements */}
            {/* Background Elements - Removed as per request */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h2 className="text-base md:text-lg font-semibold text-white mb-2">
                        Hello, I'm
                    </h2>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Sujal Shukla
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 mb-8">
                        Frontend Developer & <span className="font-bold text-white">Web Designer</span>
                    </p>
                    <p className="text-gray-200 mb-8 max-w-lg mx-auto">
                        I build fast, modern, and visually impressive web applications with a focus on user experience and performance.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-full font-medium transition-all shadow-lg hover:shadow-white/10 flex items-center gap-2"
                        >
                            Get in Touch <ArrowRight size={20} />
                        </a>
                        <a
                            href="/resume.pdf"
                            className="px-8 py-3 bg-white/10 text-white border border-white/20 hover:border-white rounded-full font-medium transition-all flex items-center gap-2 backdrop-blur-sm hover:bg-white/20"
                        >
                            Download CV <Download size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
