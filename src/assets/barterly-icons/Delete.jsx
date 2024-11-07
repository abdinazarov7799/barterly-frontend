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
        <path d="M5 1L1 5M1 1L5 5" stroke="#A5A4A3" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round"/>
    </svg>
));

export default Index;
