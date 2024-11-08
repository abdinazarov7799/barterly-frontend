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
        <path fillRule="evenodd"
              clipRule="evenodd"
              d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H13C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1V4C13.9999 4.26519 13.8946 4.51951 13.707 4.707L9 9.414V13C8.99994 13.2652 8.89455 13.5195 8.707 13.707L6.707 15.707C6.56715 15.8468 6.38898 15.942 6.19503 15.9806C6.00108 16.0192 5.80005 15.9993 5.61735 15.9237C5.43465 15.848 5.27848 15.7199 5.1686 15.5555C5.05871 15.391 5.00004 15.1978 5 15V9.414L0.293 4.707C0.105451 4.51951 5.66374e-05 4.26519 0 4V1Z"
              fill={color}/>
    </svg>
));

export default Index;
