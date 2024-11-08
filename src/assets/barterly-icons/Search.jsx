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
              d="M7.28889 3.2C5.03066 3.2 3.2 5.03066 3.2 7.28889C3.2 9.54712 5.03066 11.3778 7.28889 11.3778C8.37243 11.3778 9.35754 10.9563 10.0892 10.2684C10.1165 10.2365 10.1451 10.2054 10.1753 10.1753C10.2054 10.1451 10.2365 10.1165 10.2684 10.0892C10.9563 9.35754 11.3778 8.37243 11.3778 7.28889C11.3778 5.03066 9.54712 3.2 7.28889 3.2ZM13.4493 11.1865C14.164 10.0593 14.5778 8.7224 14.5778 7.28889C14.5778 3.26335 11.3144 0 7.28889 0C3.26335 0 0 3.26335 0 7.28889C0 11.3144 3.26335 14.5778 7.28889 14.5778C8.7224 14.5778 10.0593 14.164 11.1865 13.4493L13.2686 15.5314C13.8935 16.1562 14.9065 16.1562 15.5314 15.5314C16.1562 14.9065 16.1562 13.8935 15.5314 13.2686L13.4493 11.1865Z"
              fill={color}/>
    </svg>
));

export default Index;
