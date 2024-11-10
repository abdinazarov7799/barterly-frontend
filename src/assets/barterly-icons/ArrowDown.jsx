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
              d="M0.293245 0.292787C0.481066 0.105316 0.735772 0 1.00135 0C1.26693 0 1.52164 0.105316 1.70946 0.292787L4.00605 2.58579L6.30264 0.292787C6.49153 0.110629 6.74453 0.0098342 7.00714 0.0121126C7.26974 0.014391 7.52095 0.11956 7.70665 0.304968C7.89235 0.490376 7.99768 0.741189 7.99996 1.00339C8.00224 1.26558 7.90129 1.51818 7.71885 1.70679L4.71415 4.70679C4.52633 4.89426 4.27163 4.99957 4.00605 4.99957C3.74047 4.99957 3.48576 4.89426 3.29794 4.70679L0.293245 1.70679C0.10548 1.51926 0 1.26495 0 0.999786C0 0.734622 0.10548 0.480314 0.293245 0.292787Z"
              fill={color}/>
    </svg>
));

export default Index;