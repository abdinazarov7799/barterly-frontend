import React from 'react';
import Icon1 from "../../../assets/icons/cardIcon1.svg";
import Icon3 from "../../../assets/icons/cardIcon3.svg";

const PreviewItem = () => {
    return (
        <div>
            <p className='text-[12px] mb-[17px]'>Предпросмотр объявления</p>
            <div className='p-[24px] bg-gray-light rounded-[8px]'>
                <div className="rounded-[8px] w-[216px] mx-auto overflow-hidden border-2 border-[#A5A4A3] bg-white cursor-pointer">
                    <div className="h-[192px] bg-gray relative">
                        <div className="absolute flex space-x-2 right-2 top-2">
                            <img src={Icon1} alt="icon1"/>
                            <img src={Icon3} alt="icon3"/>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-[12px] bg-gray-light h-14 p-3">
                            <h6>Автомобиль Opel Mokka 1.8 MT, 2014, 155 644 км</h6>
                        </div>
                        <div className="flex items-center justify-between font-bold text-[10px] p-3">
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 bg-gray rounded-full"></div>
                                <div className="text-gray-700 font-bold">Dilmurod1227</div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="bg-gray text-white rounded-full px-2 text-sm">pro</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                     fill="none">
                                    <rect x="0.75" y="0.75" width="14.5" height="14.5" rx="7.25" fill="#FBFBFB"
                                          stroke="#A5A4A3" stroke-width="1.5"/>
                                    <path d="M11 6L6.875 10L5 8.18182" stroke="#A5A4A3" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-between items-center bg-gray-light font-black text-[10px] p-3">
                            <div className="text-text-gray">Авто-транспорт</div>
                            <div className="text-gray">17:27</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewItem;