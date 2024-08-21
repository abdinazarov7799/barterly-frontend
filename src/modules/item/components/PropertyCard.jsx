import React from 'react';
import {get} from "lodash";

const PropertyCard = ({item}) => {
    return (
        <div className='px-[16px] py-[8px] w-full border-[1.5px] border-[#D7D6D6] rounded-[6px]'>
            <p className='font-black text-gray text-[10px]'>{get(item,'label')}</p>
            <p className='font-extrabold text-[10px] my-[4]'>{get(item,'value')}</p>
        </div>
    );
};

export default PropertyCard;