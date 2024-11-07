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
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H10C10.5304 16 11.0391 15.7893 11.4142 15.4142C11.7893 15.0391 12 14.5304 12 14V5.414C11.9999 4.88361 11.7891 4.37499 11.414 4L8 0.586C7.62501 0.210901 7.11639 0.000113275 6.586 0H2ZM7 6C7 5.73478 6.89464 5.48043 6.70711 5.29289C6.51957 5.10536 6.26522 5 6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V9.586L3.707 8.293C3.61475 8.19749 3.50441 8.12131 3.3824 8.0689C3.2604 8.01649 3.12918 7.9889 2.9964 7.98775C2.86362 7.9866 2.73194 8.0119 2.60905 8.06218C2.48615 8.11246 2.3745 8.18671 2.2806 8.28061C2.18671 8.3745 2.11246 8.48615 2.06218 8.60905C2.0119 8.73194 1.9866 8.86362 1.98775 8.9964C1.9889 9.12918 2.01649 9.2604 2.0689 9.3824C2.12131 9.50441 2.19749 9.61475 2.293 9.707L5.293 12.707C5.48053 12.8945 5.73484 12.9998 6 12.9998C6.26516 12.9998 6.51947 12.8945 6.707 12.707L9.707 9.707C9.88916 9.5184 9.98995 9.2658 9.98767 9.0036C9.9854 8.7414 9.88023 8.49059 9.69482 8.30518C9.50941 8.11977 9.2586 8.0146 8.9964 8.01233C8.7342 8.01005 8.4816 8.11084 8.293 8.293L7 9.586V6Z"
              fill="black"/>
    </svg>
));

export default Index;
