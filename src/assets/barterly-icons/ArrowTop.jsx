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
              d="M7.70676 4.70673C7.51893 4.8942 7.26423 4.99951 6.99865 4.99951C6.73307 4.99951 6.47836 4.8942 6.29054 4.70673L3.99395 2.41372L1.69736 4.70673C1.50847 4.88888 1.25547 4.98968 0.992862 4.9874C0.730255 4.98512 0.47905 4.87995 0.293351 4.69454C0.107653 4.50914 0.00231981 4.25832 3.76701e-05 3.99613C-0.002244 3.73393 0.0987077 3.48133 0.281151 3.29273L3.28585 0.292725C3.47367 0.105254 3.72837 -6.10352e-05 3.99395 -6.10352e-05C4.25953 -6.10352e-05 4.51424 0.105254 4.70206 0.292725L7.70676 3.29273C7.89452 3.48025 8 3.73456 8 3.99973C8 4.26489 7.89452 4.5192 7.70676 4.70673Z"
              fill={color}/>
    </svg>
));

export default Index;
