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
            d="M11.9499 13.9172C10.6371 15.2508 8.85663 16 7.00009 16C5.14355 16 3.36305 15.2508 2.05028 13.9172C0.737507 12.5836 1.38323e-08 10.7748 0 8.88879C-1.38323e-08 7.00278 0.737507 5.19401 2.05028 3.8604C2.05028 3.8604 2.62515 5.33327 4.37512 6.22215C4.37512 4.44439 4.81262 1.77776 6.98784 0C8.75006 1.77776 10.5788 2.46842 11.949 3.8604C12.6001 4.51994 13.1165 5.30371 13.4685 6.16665C13.8205 7.0296 14.0011 7.9547 14 8.88879C14.0012 9.82281 13.8207 10.7479 13.4689 11.6108C13.1171 12.4738 12.6009 13.2576 11.9499 13.9172Z"
            fill={color}/>
    </svg>
));

export default Index;
