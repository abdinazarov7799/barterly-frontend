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
        <path
            d="M4.99979 3.01229C4.73457 3.01229 4.48022 3.11765 4.29268 3.30518C4.10514 3.49272 3.99979 3.74707 3.99979 4.01229C3.99979 4.2775 4.10514 4.53186 4.29268 4.71939C4.48022 4.90693 4.73457 5.01229 4.99979 5.01229H10.5858L9.29279 6.30529C9.11063 6.49389 9.00983 6.74649 9.01211 7.00869C9.01439 7.27089 9.11956 7.5217 9.30497 7.70711C9.49038 7.89251 9.74119 7.99768 10.0034 7.99996C10.2656 8.00224 10.5182 7.90145 10.7068 7.71929L13.7068 4.71929C13.8943 4.53176 13.9996 4.27745 13.9996 4.01229C13.9996 3.74712 13.8943 3.49282 13.7068 3.30529L10.7068 0.305288C10.6145 0.209778 10.5042 0.133596 10.3822 0.0811869C10.2602 0.0287779 10.129 0.00119157 9.99619 3.77567e-05C9.86341 -0.00111606 9.73173 0.0241857 9.60883 0.0744666C9.48594 0.124747 9.37428 0.199001 9.28039 0.292893C9.1865 0.386786 9.11225 0.498438 9.06196 0.621334C9.01168 0.744231 8.98638 0.87591 8.98754 1.00869C8.98869 1.14147 9.01628 1.27269 9.06868 1.39469C9.12109 1.5167 9.19728 1.62704 9.29279 1.71929L10.5858 3.01229H4.99979ZM8.99979 13.0123C9.265 13.0123 9.51936 12.9069 9.70689 12.7194C9.89443 12.5319 9.99979 12.2775 9.99979 12.0123C9.99979 11.7471 9.89443 11.4927 9.70689 11.3052C9.51936 11.1176 9.265 11.0123 8.99979 11.0123H3.41379L4.70679 9.71929C4.8023 9.62704 4.87848 9.5167 4.93089 9.39469C4.9833 9.27269 5.01088 9.14147 5.01204 9.00869C5.01319 8.87591 4.98789 8.74423 4.93761 8.62133C4.88733 8.49844 4.81307 8.38679 4.71918 8.29289C4.62529 8.199 4.51364 8.12475 4.39074 8.07447C4.26784 8.02419 4.13616 7.99888 4.00339 8.00004C3.87061 8.00119 3.73939 8.02878 3.61738 8.08119C3.49538 8.1336 3.38503 8.20978 3.29279 8.30529L0.292786 11.3053C0.105315 11.4928 0 11.7471 0 12.0123C0 12.2775 0.105315 12.5318 0.292786 12.7193L3.29279 15.7193C3.48139 15.9014 3.73399 16.0022 3.99619 16C4.25838 15.9977 4.5092 15.8925 4.6946 15.7071C4.88001 15.5217 4.98518 15.2709 4.98746 15.0087C4.98974 14.7465 4.88894 14.4939 4.70679 14.3053L3.41379 13.0123H8.99979Z"
            fill={color}/>
    </svg>
));

export default Index;
