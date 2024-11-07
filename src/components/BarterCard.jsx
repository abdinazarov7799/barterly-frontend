import React from 'react';
import Icon1 from '../assets/icons1/cardIcon1.svg'
import Icon2 from '../assets/icons1/cardIcon2.svg'
import Icon3 from '../assets/icons1/cardIcon3.svg'
import {useNavigate} from "react-router-dom";

const BarterCard = ({item}) => {
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
                <div className="font-bold text-[12px] bg-gray-light h-14 py-[8px] px-[16px]">
                    <h6>{item.title}</h6>
                </div>
                <div className="flex justify-between items-center font-black text-[10px] pt-[8px] pb-[5px] px-[16px]">
                    <div className="text-text-gray">{item.category}</div>
                    <div className="text-gray">{item.date}</div>
                </div>
                <div>
                    <p className='font-bold text-[10px] py-[8px] px-[16px]'>
                        Готов обменять Автомобиль Opel Mokka 1.8 MT, 2014 года выпуска. Автомобиль в отличном
                        техническом состоянии, бережная эксплуатация. В ДТП не участвовал. Вложений не требует.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BarterCard;
