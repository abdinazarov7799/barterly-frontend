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
              d="M6 2.00003C4.93913 2.00003 3.92172 2.42146 3.17157 3.17161C2.42143 3.92175 2 4.93917 2 6.00003C2 7.0609 2.42143 8.07832 3.17157 8.82846C3.92172 9.57861 4.93913 10 6 10C7.06087 10 8.07828 9.57861 8.82843 8.82846C9.57857 8.07832 10 7.0609 10 6.00003C10 4.93917 9.57857 3.92175 8.82843 3.17161C8.07828 2.42146 7.06087 2.00003 6 2.00003ZM1.13461e-07 6.00003C-0.00012039 5.05574 0.222642 4.12475 0.650171 3.28278C1.0777 2.4408 1.69792 1.71163 2.4604 1.15456C3.22287 0.597487 4.10606 0.228246 5.03815 0.0768669C5.97023 -0.0745122 6.92488 -0.00375491 7.82446 0.283384C8.72404 0.570523 9.54315 1.06594 10.2152 1.72933C10.8872 2.39272 11.3931 3.20537 11.6919 4.10117C11.9906 4.99697 12.0737 5.95063 11.9343 6.88459C11.795 7.81855 11.4372 8.70643 10.89 9.47603L15.707 14.293C15.8892 14.4816 15.99 14.7342 15.9877 14.9964C15.9854 15.2586 15.8802 15.5094 15.6948 15.6949C15.5094 15.8803 15.2586 15.9854 14.9964 15.9877C14.7342 15.99 14.4816 15.8892 14.293 15.707L9.477 10.891C8.57936 11.5293 7.52335 11.9082 6.42468 11.9862C5.326 12.0641 4.22707 11.8381 3.2483 11.333C2.26953 10.8279 1.44869 10.0631 0.875723 9.12239C0.30276 8.18171 -0.000214051 7.10147 1.13461e-07 6.00003Z"
              fill={color}/>
        <path fillRule="evenodd"
              clipRule="evenodd"
              d="M3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H8C8.26522 5 8.51957 5.10536 8.70711 5.29289C8.89464 5.48043 9 5.73478 9 6C9 6.26522 8.89464 6.51957 8.70711 6.70711C8.51957 6.89464 8.26522 7 8 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6Z"
              fill={color}/>
    </svg>
));

export default Index;