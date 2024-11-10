import React from 'react';

const Index = React.forwardRef(({ width = '24', height = '24', color = 'black', ...props }, ref) => (
    <svg
        ref={ref}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M14.7663 1.2377C14.3753 0.845314 13.9111 0.534045 13.4002 0.321676C12.8893 0.109307 12.3417 0 11.7887 0C11.2357 0 10.6881 0.109307 10.1772 0.321676C9.66629 0.534045 9.20211 0.845314 8.81116 1.2377L7.9998 2.05166L7.18843 1.2377C6.39874 0.445478 5.32768 0.000410637 4.21089 0.000410646C3.09409 0.000410654 2.02303 0.445478 1.23334 1.2377C0.443646 2.02993 8.32078e-09 3.10441 0 4.22479C-8.32078e-09 5.34516 0.443646 6.41965 1.23334 7.21187L2.0447 8.02583L7.9998 14L13.9549 8.02583L14.7663 7.21187C15.1574 6.81967 15.4677 6.354 15.6794 5.84146C15.891 5.32893 16 4.77958 16 4.22479C16 3.67 15.891 3.12064 15.6794 2.60811C15.4677 2.09558 15.1574 1.6299 14.7663 1.2377Z"
            fill={color}/>
    </svg>
));

export default Index;