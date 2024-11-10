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
              d="M1 0C1.26522 0 1.51957 0.105357 1.70711 0.292893C1.89464 0.48043 2 0.734784 2 1V3.101C2.83204 2.25227 3.86643 1.62931 5.00574 1.29078C6.14506 0.952259 7.35179 0.909318 8.51228 1.16601C9.67277 1.42269 10.7488 1.97056 11.6391 2.758C12.5294 3.54544 13.2045 4.54654 13.601 5.667C13.6491 5.79176 13.6717 5.92489 13.6674 6.05854C13.6632 6.19218 13.6322 6.32361 13.5763 6.44506C13.5203 6.56651 13.4406 6.67551 13.3418 6.76561C13.243 6.85571 13.1272 6.92508 13.0011 6.96963C12.875 7.01417 12.7413 7.03298 12.6078 7.02494C12.4744 7.0169 12.3439 6.98217 12.224 6.92282C12.1042 6.86346 11.9975 6.78068 11.9103 6.67937C11.823 6.57806 11.7569 6.46029 11.716 6.333C11.4141 5.47982 10.8865 4.72451 10.1892 4.14758C9.49191 3.57064 8.65117 3.19369 7.75656 3.05688C6.86195 2.92008 5.94698 3.02855 5.10916 3.37074C4.27133 3.71293 3.54204 4.27602 2.999 5H6C6.26522 5 6.51957 5.10536 6.70711 5.29289C6.89464 5.48043 7 5.73478 7 6C7 6.26522 6.89464 6.51957 6.70711 6.70711C6.51957 6.89464 6.26522 7 6 7H1C0.734784 7 0.48043 6.89464 0.292893 6.70711C0.105357 6.51957 0 6.26522 0 6V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM1.008 9.057C1.13184 9.01326 1.26308 8.99434 1.39422 9.00133C1.52537 9.00831 1.65386 9.04106 1.77235 9.09771C1.89084 9.15435 1.99701 9.23378 2.0848 9.33146C2.17259 9.42914 2.24028 9.54316 2.284 9.667C2.58586 10.5202 3.11355 11.2755 3.81082 11.8524C4.50809 12.4294 5.34883 12.8063 6.24344 12.9431C7.13805 13.0799 8.05302 12.9714 8.89084 12.6293C9.72867 12.2871 10.458 11.724 11.001 11H8C7.73478 11 7.48043 10.8946 7.29289 10.7071C7.10536 10.5196 7 10.2652 7 10C7 9.73478 7.10536 9.48043 7.29289 9.29289C7.48043 9.10536 7.73478 9 8 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V15C14 15.2652 13.8946 15.5196 13.7071 15.7071C13.5196 15.8946 13.2652 16 13 16C12.7348 16 12.4804 15.8946 12.2929 15.7071C12.1054 15.5196 12 15.2652 12 15V12.899C11.168 13.7477 10.1336 14.3707 8.99426 14.7092C7.85494 15.0477 6.64821 15.0907 5.48772 14.834C4.32723 14.5773 3.25117 14.0294 2.36091 13.242C1.47065 12.4546 0.795479 11.4535 0.399 10.333C0.35526 10.2092 0.336343 10.0779 0.343327 9.94678C0.350311 9.81563 0.383061 9.68714 0.439706 9.56865C0.496351 9.45016 0.575781 9.34399 0.673461 9.2562C0.771142 9.16841 0.884158 9.10072 1.008 9.057Z"
              fill={color}/>
    </svg>
));

export default Index;