import React from 'react';
import BarterCard from "./BarterCard.jsx";

const UserBarters = ({data,title}) => {

    return (
        <div className='bg-gray-extra-light p-[24px] rounded-[12px]'>
            <div className='flex items-center justify-between font-extrabold'>
                <p className='text-[14px]'>{title}</p>
                <button className='bg-gray py-[10px] px-[18px] rounded-[4px] text-[10px]'>
                    Показать еще
                </button>
            </div>
            <div className='grid grid-cols-5 gap-5 py-3'>
                {
                    data?.map((item, index) => (
                        <BarterCard item={item} key={index}/>
                    ))
                }
            </div>
        </div>
    );
};

export default UserBarters;