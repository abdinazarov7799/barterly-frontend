import React from 'react';

const InputSearch = (props) => {
    return (
        <div className='relative pb-[8px]'>
            <input className='w-full py-[10px] pl-[16px] pr-[35px] font-bold text-[10px] outline-none border-[1.5px] border-gray rounded-[8px]' {...props} />
            <span className='absolute right-[10px] top-[10px] cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                    d="M13 13L10.1 10.1M11.6667 6.33333C11.6667 9.27885 9.27885 11.6667 6.33333 11.6667C3.38781 11.6667 1 9.27885 1 6.33333C1 3.38781 3.38781 1 6.33333 1C9.27885 1 11.6667 3.38781 11.6667 6.33333Z"
                    stroke="#D7D6D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </span>
        </div>
    );
};

export default InputSearch;