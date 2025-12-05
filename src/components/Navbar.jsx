import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="absolute top-0 left-0 right-0 z-50 flex justify-center pt-6">
            <motion.nav
                layout
                initial={{ y: -100, opacity: 0, borderRadius: "50px" }}
                animate={{
                    y: 0,
                    opacity: 1,
                    borderRadius: isOpen ? "24px" : "50px"
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    layout: { duration: 0.3 }
                }}
                className={`
                    relative px-2 py-2
                    bg-white/5 border border-white/10
                    w-[90%] md:max-w-5xl overflow-hidden
                `}
            >
                <div className="flex items-center justify-between px-4">
                    {/* Logo Area - Keeps it liquid with the rest */}
                    <a
                        href="#"
                        className="relative z-10 px-4 py-2 text-xl font-bold text-white hover:opacity-80 transition-opacity"
                    >
                        Sujal Shukla
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onMouseEnter={() => setActiveTab(link.name)}
                                onMouseLeave={() => setActiveTab('')}
                                className="relative px-5 py-2.5 text-sm font-medium text-white transition-colors"
                            >
                                {activeTab === link.name && (
                                    <motion.div
                                        layoutId="liquid-hover"
                                        className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative z-10 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Navigation Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="px-4 pb-4 pt-2 space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 rounded-2xl text-center text-white hover:text-white hover:bg-white/10 transition-all font-medium border border-transparent hover:border-white/5 active:scale-95 duration-200"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
};

export default Navbar;
