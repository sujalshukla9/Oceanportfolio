import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Globe } from 'lucide-react';
import aboutMeGraphic from '../assets/about_me_graphic.png';

const About = () => {
    return (
        <section id="about" className="py-12 md:py-20 bg-transparent transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <img
                            src={aboutMeGraphic}
                            alt="Sujal Shukla - Frontend Developer"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700 mix-blend-plus-lighter rounded-2xl transform-gpu"
                        />

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Passionate Frontend Developer based in India
                        </h3>
                        <p className="text-gray-200 mb-6 leading-relaxed">
                            I specialize in building responsive, user-friendly websites and web applications.
                            My journey in web development started with a curiosity for how things work on the internet,
                            and it has evolved into a career where I craft digital experiences.
                        </p>
                        <p className="text-gray-200 mb-8 leading-relaxed">
                            I love working with modern technologies like React, Tailwind CSS, and Framer Motion to bring ideas to life.
                            When I'm not coding, you can find me exploring new design trends or contributing to open source.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                                <div className="p-2 bg-white/10 text-white rounded-lg">
                                    <Code size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Clean Code</h4>
                                    <p className="text-sm text-gray-300">Maintainable & Scalable</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                                <div className="p-2 bg-white/10 text-white rounded-lg">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Modern Tech</h4>
                                    <p className="text-sm text-gray-300">Latest Tools & Frameworks</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
