import React, {useEffect, useState} from 'react';

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
            <button onClick={goToPrevSlide}
                    className="absolute top-1/2 -left-5 transform -translate-y-1/2 py-[12px] px-[7px] bg-white border-gray border-[2px] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                    <path d="M5 9L1 5M1 5L5 1M1 5L19 5" stroke="#D7D6D6" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </button>
            <button onClick={goToNextSlide}
                    className="absolute top-1/2 -right-5 transform -translate-y-1/2 py-[12px] px-[7px] bg-white border-gray border-[2px] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                    <path d="M15 1L19 5M19 5L15 9M19 5L1 5" stroke="#D7D6D6" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
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
