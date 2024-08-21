import React from 'react';
import barterIcon from "../assets/icons/icon_Barters.svg";
import predlojeniyaIcon from "../assets/icons/kub.svg";
import moreIcon from "../assets/icons/more.svg";
import seeButton from "../assets/icons/button_9_24_see.svg";
import addButton from "../assets/icons/button_9_24_add.svg";
import authorizedButton from "../assets/icons/button_9_24_authorized.svg";
import {useNavigate} from "react-router-dom";

const UserProfile = () => {
    const navigate = useNavigate();
    const navigateToProfile = () => {
        navigate(`/user/1`);
    }
    return (
        <div className='pr-[16px]'>
            <div className='mt-6 py-5 relative'>
                <div className='relative'>
                    <div className="absolute bg-gray text-white rounded-full px-2 text-sm left-[72px]">pro</div>
                    <div className='w-[60px] h-[60px] bg-gray rounded-full'></div>
                    <div className='flex justify-between'>
                        <div>
                            <p className='w-28 font-bold text-[16px] my-[12px] cursor-pointer' onClick={navigateToProfile}>Dilmurod Ishonkulov</p>
                            <p className='font-black text-[12px] text-text-gray mb-[17px]'>Dilmurod1227</p>
                        </div>
                        <div className='my-[12px]'>
                            <p className='font-black text-text-gray text-[10px]'>Уровень</p>
                            <span className='font-bold text-[12px]'>LVL 7</span>
                        </div>
                    </div>
                </div>
                <div className='space-y-[8px]'>
                    <div className='bg-gray rounded-[4px] p-[8px] flex justify-between'>
                        <p className='font-extrabold text-[10px]'>Бартеры</p>
                        <div className='flex items-center'>
                            <img src={barterIcon} width={12} height={12} alt="barter"/>
                            <span className='font-bold text-[12px] ml-[6px] mr-[16px]'>39</span>
                            <img src={seeButton} width={24} height={24} alt="seeButton"/>
                        </div>
                    </div>
                    <div className='bg-gray rounded-[4px] p-[8px] flex justify-between'>
                        <p className='font-extrabold text-[10px]'>Предложения</p>
                        <div className='flex items-center'>
                            <img src={predlojeniyaIcon} width={12} height={12} alt="barter"/>
                            <span className='font-bold text-[12px] ml-[6px] mr-[16px]'>26</span>
                            <img src={addButton} width={24} height={24} alt="seeButton"/>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='font-normal text-text-gray text-[10px] mt-[16px] mb-[12px]'>Личная информация</p>
                    <div className='grid grid-cols-2 gap-[8px]'>
                        <div className='bg-gray text-[10px] px-[16px] py-[8px] rounded-[4px]'>
                            <p className='font-black text-text-gray'>ID</p>
                            <p className='font-bold'>#2745-09</p>
                        </div>
                        <div className='bg-gray text-[10px] px-[16px] py-[8px] rounded-[4px]'>
                            <p className='font-black text-text-gray'>На сайте с</p>
                            <p className='font-bold'>27.07.2024</p>
                        </div>
                        <div className='bg-gray text-[10px] px-[16px] py-[8px] rounded-[4px]'>
                            <p className='font-black text-text-gray'>Доп. опции</p>
                            <p className='font-bold'>Включены</p>
                        </div>
                        <div className='bg-gray text-[10px] px-[16px] py-[8px] rounded-[4px]'>
                            <p className='font-black text-text-gray'>Город</p>
                            <p className='font-bold'>Ташкент</p>
                        </div>
                    </div>
                    <div className='space-y-[8px] mt-[8px]'>
                        <div className='bg-gray text-[10px] px-[16px] py-[8px] rounded-[4px]'>
                            <p className='font-black text-text-gray'>Район</p>
                            <p className='font-bold'>Мирзо-Улугбекский</p>
                        </div>
                        <div className='bg-gray text-[10px] px-[16px] py-[8px] rounded-[4px]'>
                            <p className='font-black text-text-gray'>Телефон</p>
                            <p className='font-bold'>+998 94 600 70 81</p>
                        </div>
                        <div className='bg-gray text-[10px] px-[16px] py-[8px] rounded-[4px] flex justify-between'>
                            <div>
                                <p className='font-black text-text-gray'>Telegram</p>
                                <p className='font-bold'>@dilmurod1227</p>
                            </div>
                            <img src={authorizedButton} alt="authorizedButton" width={24} height={24}/>
                        </div>
                    </div>
                </div>
                <div className='absolute right-4 top-4 cursor-pointer'>
                    <img src={moreIcon} alt="more" width={32} height={32}/>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;