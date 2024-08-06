import React from 'react';
import UserProfile from "../../../components/UserProfile.jsx";

const ItemInfo = ({category,id}) => {
    return (
        <div className="my-5">
            <div className='flex justify-between items-center border-b-2 border-gray pb-3'>
                <p className='font-bold text-[16px]'>{category}</p>
                <div className='flex items-center space-x-2 font-black text-text-gray text-[10px]'>
                    <span>Главная</span>
                    <span>—</span>
                    <span>Все категории</span>
                    <span>—</span>
                    <span>Недвижимость</span>
                    <span>—</span>
                    <span>Квартиры</span>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-5'>

                </div>
                <div className='col-span-5'>

                </div>
                <div className='col-span-2'>
                    <UserProfile />
                </div>
            </div>
        </div>
    );
};

export default ItemInfo;