import React from 'react';
import bgImage from '../assets/footer_graphic.webp';

const BackgroundAnimation = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <img
                src={bgImage}
                alt="Background Animation"
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
    );
};

export default BackgroundAnimation;
