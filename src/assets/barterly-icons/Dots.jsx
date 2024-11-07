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
        <circle cx="2" cy="2" r="2" fill={color}/>
        <circle cx="8" cy="2" r="2" fill={color}/>
        <circle cx="14" cy="2" r="2" fill={color}/>
    </svg>
));

export default Index;
