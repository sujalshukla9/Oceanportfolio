import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-gray-300 text-sm text-center">
                        © {new Date().getFullYear()} Sujal Shukla. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
