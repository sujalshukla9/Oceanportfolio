import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiFramer } from 'react-icons/si';

const skills = [
    { name: 'HTML5', level: 'Advanced', color: 'text-orange-500', icon: FaHtml5 },
    { name: 'CSS3', level: 'Advanced', color: 'text-blue-500', icon: FaCss3Alt },
    { name: 'JavaScript', level: 'Advanced', color: 'text-yellow-400', icon: FaJs },
    { name: 'React', level: 'Intermediate', color: 'text-cyan-400', icon: FaReact },
    { name: 'Tailwind CSS', level: 'Advanced', color: 'text-teal-400', icon: SiTailwindcss },
    { name: 'Git & GitHub', level: 'Intermediate', color: 'text-white', icon: FaGithub },
    { name: 'Firebase', level: 'Basic', color: 'text-yellow-500', icon: SiFirebase },
    { name: 'Framer Motion', level: 'Intermediate', color: 'text-purple-500', icon: SiFramer },
];

const Skills = () => {
    return (
        <section id="skills" className="py-12 md:py-20 bg-transparent transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <p className="text-gray-200 max-w-2xl mx-auto">
                        Here are the technologies and tools I work with to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10 flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-all duration-300 transform-gpu"
                        >
                            <div className={`p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors`}>
                                <skill.icon className={`w-8 h-8 ${skill.color}`} />
                            </div>
                            <h3 className="font-bold text-white content-center">{skill.name}</h3>
                            <span className="text-xs px-3 py-1 bg-white/10 text-gray-200 rounded-full">
                                {skill.level}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
