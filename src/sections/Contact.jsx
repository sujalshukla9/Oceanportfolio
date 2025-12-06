import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { GiSeaTurtle } from 'react-icons/gi';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await addDoc(collection(db, "contacts"), {
                name: form.current.user_name.value,
                email: form.current.user_email.value,
                message: form.current.message.value,
                timestamp: serverTimestamp()
            });

            setStatus('success');
            form.current.reset();
            setTimeout(() => setStatus(''), 3000);
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus('error');
            setTimeout(() => setStatus(''), 3000);
        }
    };

    return (
        <section id="contact" className="py-12 md:py-20 flex items-center justify-center relative z-10">
            <div className="w-full max-w-6xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] transform-gpu"
                >
                    {/* Left Side - Contact Info */}
                    <div className="md:w-5/12 bg-transparent relative p-6 md:p-10 text-white flex flex-col justify-between overflow-hidden">
                        {/* Decorative bubbles - kept for subtle effect, can be removed if strictly 'no separation' is desired, but 'merge' usually implies visual integration */}
                        <div className="absolute top-[-20px] left-[-20px] w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-[-10px] right-[-10px] w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 mt-10">
                            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
                            <p className="text-white mb-10 leading-relaxed">
                                Fill up the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm tracking-wide">hello@sujalshukla.com</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm tracking-wide">+91 123 456 7890</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm tracking-wide">India</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-4 mt-12">
                            {/* Social circles */}
                            {[
                                { icon: FaInstagram, href: "#" },
                                { icon: FaTwitter, href: "#" },
                                { icon: FaLinkedin, href: "#" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit our ${social.icon.name || 'social'} page`}
                                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all cursor-pointer flex items-center justify-center hover:scale-110 text-white"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="md:w-7/12 p-6 md:p-14 bg-transparent flex flex-col justify-center relative">
                        <AnimatePresence mode='wait'>
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                                >
                                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-12 h-12 text-green-400" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                                    <p className="text-gray-300 text-lg">Thank you for reaching out.<br />I'll get back to you shortly.</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full"
                                >
                                    <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Get in Touch With Us</h2>
                                    <p className="text-white mb-10 text-sm">Leave us a message, we will contact you as soon as possible.</p>

                                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-xs font-bold text-white uppercase tracking-widest mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="user_name"
                                                required
                                                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all placeholder-white/50 text-base"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-white uppercase tracking-widest mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="user_email"
                                                required
                                                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all placeholder-white/50 text-base"
                                                placeholder="Enter your email"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-white uppercase tracking-widest mb-2">Message</label>
                                            <textarea
                                                name="message"
                                                rows="4"
                                                required
                                                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all placeholder-white/50 text-base"
                                                placeholder="Write your message here..."
                                            ></textarea>
                                        </div>

                                        <div className="flex justify-center pt-2">
                                            <button
                                                type="submit"
                                                disabled={status === 'sending'}
                                                className="bg-white/10 hover:bg-white/20 border border-white/50 text-white font-bold py-3 px-12 rounded-full transition-all transform active:scale-95 uppercase text-sm tracking-wide shadow-lg hover:shadow-white/20 backdrop-blur-sm disabled:opacity-70 disabled:cursor-not-allowed flex gap-2 items-center"
                                            >
                                                {status === 'sending' ? (
                                                    <>
                                                        Sending...
                                                        <GiSeaTurtle className="w-5 h-5 animate-bounce" />
                                                    </>
                                                ) : (
                                                    <>
                                                        Send
                                                        <GiSeaTurtle className="w-5 h-5" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
