import React from 'react';
import desktopBg from '../assets/footer_graphic.webp';
import mobileBg from '../assets/Do_full_screen_202512050653_6lpij-ezgif.com-video-to-webp-converter.webp';

const BackgroundAnimation = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none h-[100dvh]">
            <picture>
                <source media="(max-width: 767px)" srcSet={mobileBg} />
                <img
                    src={desktopBg}
                    alt="Background Ocean Scene"
                    className="absolute inset-0 w-full h-full object-cover object-center transform-gpu"
                />
            </picture>
        </div>
    );
};

export default BackgroundAnimation;
