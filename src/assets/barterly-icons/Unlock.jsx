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
        <path
            d="M7 0C5.67392 0 4.40215 0.526784 3.46447 1.46447C2.52678 2.40215 2 3.67392 2 5V7C1.46957 7 0.960859 7.21071 0.585786 7.58579C0.210714 7.96086 0 8.46957 0 9V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H12C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14V9C14 8.46957 13.7893 7.96086 13.4142 7.58579C13.0391 7.21071 12.5304 7 12 7H4V5C3.99975 4.26964 4.26595 3.56428 4.74866 3.01618C5.23138 2.46809 5.89747 2.11491 6.622 2.02289C7.34654 1.93087 8.07977 2.10631 8.68417 2.51633C9.28858 2.92635 9.72266 3.54277 9.905 4.25C9.9713 4.50686 10.1369 4.72686 10.3654 4.86161C10.4786 4.92833 10.6038 4.97211 10.7338 4.99045C10.8639 5.00879 10.9963 5.00133 11.1235 4.9685C11.2507 4.93567 11.3702 4.87811 11.4751 4.79911C11.58 4.7201 11.6684 4.6212 11.7351 4.50806C11.8018 4.39491 11.8456 4.26973 11.8639 4.13966C11.8823 4.00959 11.8748 3.87719 11.842 3.75C11.5645 2.67676 10.9384 1.7261 10.062 1.04734C9.18559 0.368574 8.10852 0.000172449 7 0Z"
            fill="black"/>
    </svg>
));

export default Index;
