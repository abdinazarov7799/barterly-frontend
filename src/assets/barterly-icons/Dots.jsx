import React from 'react';

const Index = React.forwardRef(({ width = '24', height = '24', color = 'none', ...props }, ref) => (
    <svg
        ref={ref}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx="2" cy="2" r="2" fill="black"/>
        <circle cx="8" cy="2" r="2" fill="black"/>
        <circle cx="14" cy="2" r="2" fill="black"/>
    </svg>
));

export default Index;
