import React, {useEffect, useState} from 'react';
import leftIcon from '../assets/icons1/left-arrow.svg';
import rightIcon from '../assets/icons1/right-arrow.svg';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        'https://via.placeholder.com/800x200?text=Slide+1',
        'https://via.placeholder.com/800x200?text=Slide+2',
        'https://via.placeholder.com/800x200?text=Slide+3',
    ];

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full mx-auto h-52">
            <div className="overflow-hidden rounded-lg h-full">
                <div className="flex transition-transform duration-500 h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <img key={index} src={slide} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0 h-full object-cover" />
                    ))}
                </div>
            </div>
            <button onClick={goToPrevSlide} className="absolute top-1/2 -left-5 transform -translate-y-1/2 py-[6px] px-[10px] bg-white border-gray border-[2px] rounded-lg">
                <img src={leftIcon} alt="slide-left" width={12} height={6} />
            </button>
            <button onClick={goToNextSlide} className="absolute top-1/2 -right-5 transform -translate-y-1/2 py-[6px] px-[10px] bg-white border-gray border-[2px] rounded-lg">
                <img src={rightIcon} alt="slide-right" width={12} height={6} />
            </button>
            <div className="flex justify-center mt-3">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-14 h-1 mx-2 rounded-full ${index === currentIndex ? 'bg-gray' : 'bg-gray-light'} cursor-pointer`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
