import React from 'react';

export const Select = ({ items, label }) => {
    return (
        <div className="relative inline-block w-full rounded-[4px] border-[1.5px] border-gray px-[16px] py-[12px] text-[12px] bg-white">
            {label && (
                <label className="block text-gray text-[10px] mb-[8px]">
                    {label}
                </label>
            )}
            <select className='w-full appearance-none outline-none'>
                {items?.map(item => (
                    <option key={item.key} value={item.value}>{item.label}</option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect width="16" height="16" rx="2" fill="#F0F0F0"/>
                    <path d="M4 6L8 10L12 6" stroke="#D7D6D6" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    );
};
