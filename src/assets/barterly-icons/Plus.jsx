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
        <path d="M1 4H7M4 1V7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
));

export default Index;
