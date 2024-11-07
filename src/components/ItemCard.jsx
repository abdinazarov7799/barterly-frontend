import React from 'react';
import Icon1 from '../assets/icons1/cardIcon1.svg'
import Icon2 from '../assets/icons1/cardIcon2.svg'
import Icon3 from '../assets/icons1/cardIcon3.svg'
import IconBarter from '../assets/icons1/icon_Barters.svg'
import {useNavigate} from "react-router-dom";
import {VerifyNew} from "../assets/barterly-icons/index.js";

const ItemCard = ({item}) => {
    const navigate = useNavigate();
    return (
        <div className="rounded-[8px] overflow-hidden border-2 border-gray bg-white cursor-pointer" onClick={() => navigate(`/${item.category}/${item.id}`)}>
            <div className="h-[192px] bg-gray relative">
                <div className="absolute flex space-x-2 right-2 top-2">
                    <img src={Icon1} alt="icon1"/>
                    <img src={Icon2} alt="icon2"/>
                    <img src={Icon3} alt="icon3"/>
                </div>
            </div>
            <div>
                <div className="font-bold text-[12px] bg-gray-light h-14 p-3">
                    <h6>{item.title}</h6>
                </div>
                <div className="flex items-center justify-between font-bold text-[10px] p-3">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray rounded-full"></div>
                        <div className="text-gray-700 font-bold">{item.user}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="bg-gray text-white rounded-full px-2 text-sm">pro</div>
                        <VerifyNew />
                    </div>
                </div>
                <div className="flex justify-between items-center font-black text-[10px] p-3">
                    <div className="text-text-gray">{item.category}</div>
                    <div className="text-gray">{item.date}</div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
