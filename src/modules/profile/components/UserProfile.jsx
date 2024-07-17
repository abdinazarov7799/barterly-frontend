import React from 'react';
import barterIcon from '../../../assets/icons/icon_Barters.svg'
import predlojeniyaIcon from '../../../assets/icons/kub.svg'
import moreIcon from '../../../assets/icons/more.svg'

const UserProfile = () => {
    return (
        <div>
            <div className='flex justify-between items-center border-b-2 border-gray pb-3'>
                <p className='font-bold text-[16px]'>Профиль пользователя Dilmurod1227</p>
                <div className='flex items-center space-x-2 font-black text-text-gray text-[10px]'>
                    <span>Главная</span>
                    <span>—</span>
                    <span>Все категории</span>
                    <span>—</span>
                    <span>Недвижимость</span>
                </div>
            </div>
            <div className='mt-6 py-5 px-32 relative bg-gray-light rounded-lg flex justify-between'>
                <div className='flex items-end space-x-32'>
                    <div className='relative'>
                        <div className="absolute bg-gray text-white rounded-full px-2 text-sm right-0">pro</div>
                        <div className='w-[60px] h-[60px] bg-gray rounded-full'></div>
                        <p className='w-28 font-bold text-[16px] my-2'>Dilmurod Ishonkulov</p>
                        <p className='font-black text-[12px] text-text-gray'>Dilmurod1227</p>
                    </div>
                    <div className='flex space-x-8'>
                        <div>
                            <p className='font-black text-text-gray text-[10px]'>Уровень</p>
                            <span className='font-bold text-[12px]'>LVL 7</span>
                        </div>
                        <div className='space-y-2'>
                            <div className='border-2 border-gray rounded-md p-2 w-28'>
                                <p className='font-black text-text-gray text-[10px]'>Бартеры</p>
                                <div className='flex items-center space-x-2 justify-end'>
                                    <img src={barterIcon} width={12} alt="barter"/>
                                    <span className='font-bold text-[12px]'>39</span>
                                </div>
                            </div>
                            <div className='border-2 border-gray rounded-md p-2 w-28'>
                                <p className='font-black text-text-gray text-[10px]'>Предложения</p>
                                <div className='flex items-center space-x-2 justify-end'>
                                    <img src={predlojeniyaIcon} width={12} alt="barter"/>
                                    <span className='font-bold text-[12px]'>26</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <p className='font-black text-text-gray text-[10px]'>Личная информация</p>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='bg-gray text-[10px] p-2 w-28 rounded-md space-y-1'>
                            <p className='font-black text-text-gray'>Telegram</p>
                            <p className='font-bold'>Ташкент</p>
                        </div>
                        <div className='bg-gray text-[10px] p-2 w-28 rounded-md space-y-1'>
                            <p className='font-black text-text-gray'>Локация</p>
                            <p className='font-bold'>@dilmurod1227</p>
                        </div>
                        <div className='bg-gray text-[10px] p-2 w-28 rounded-md space-y-1'>
                            <p className='font-black text-text-gray'>На сайте с</p>
                            <p className='font-bold'>27.07.2024</p>
                        </div>
                        <div className='bg-gray text-[10px] p-2 w-28 rounded-md space-y-1'>
                            <p className='font-black text-text-gray'>ID</p>
                            <p className='font-bold'>#2745-09</p>
                        </div>
                        <div className='bg-gray text-[10px] p-2 w-28 rounded-md space-y-1'>
                            <p className='font-black text-text-gray'>Телефон</p>
                            <p className='font-bold'>+998 94 600 70 81</p>
                        </div>
                        <div className='bg-gray text-[10px] p-2 w-28 rounded-md space-y-1'>
                            <p className='font-black text-text-gray'>Telegram</p>
                            <p className='font-bold'>@dilmurod1227</p>
                        </div>
                    </div>
                </div>
                <div className='absolute right-4 top-4 cursor-pointer'>
                    <img src={moreIcon} alt="more" width={32} height={32} />
                </div>
            </div>
        </div>
    );
};

export default UserProfile;