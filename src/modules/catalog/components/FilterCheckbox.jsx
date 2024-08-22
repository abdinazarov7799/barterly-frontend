import React from 'react';

const FilterCheckbox = ({checked, title, count}) => {
    return (
        <div className='flex items-center gap-[8px]'>
            <input type="checkbox" checked={checked} />
            <label htmlFor={title} className='font-bold text-[10px]'>{title}</label>
            <span className='font-black text-[10px] text-gray'>{count}</span>
        </div>
    );
};

export default FilterCheckbox;