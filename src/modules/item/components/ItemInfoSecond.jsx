import React from 'react';
import PropertyCard from "./PropertyCard.jsx";

const ItemInfoSecond = () => {
    const items = [
        {
            label: 'Количество комнат',
            value: '3 комнаты',
        },
        {
            label: 'Общая площадь',
            value: '104 м2',
        },
        {
            label: 'Площадь кухни',
            value: '27 м2',
        },
        {
            label: 'Этаж',
            value: '5 из 12',
        },
        {
            label: 'Балкон или лоджия',
            value: 'Балкон',
        },
        {
            label: 'Санузел',
            value: 'Раздельный',
        },
        {
            label: 'Окна',
            value: 'Во двор',
        },
        {
            label: 'Ремонт',
            value: 'Косметический',
        },
        {
            label: 'Мебель',
            value: 'Кухня',
        },
        {
            label: 'Техника',
            value: 'Базовая',
        },
    ]
    const items2 = [
        {
            label: 'Тип дома',
            value: 'Кирпичный',
        },
        {
            label: 'Год постройки',
            value: '1986',
        },
        {
            label: 'Пассажирский лифт',
            value: 'Есть',
        },
        {
            label: 'Детская площадка',
            value: 'Есть',
        },
        {
            label: 'Парковка',
            value: 'Подземная',
        },
        {
            label: 'Спорт-площадка',
            value: 'Отсутствует',
        },
    ]
    const tags= [
        "Новостройки",
        "Квартира",
        "Кирпичный",
        "3 комнаты",
        "48 — 106 м2",
        "5 этаж"
    ]
    return (
        <div>
            <p className='text-center font-black text-[10px] text-gray mb-[38px]'>25 июля 17:53</p>
            <div className='w-full bg-gray-extra-light rounded-[10px] p-[16px] mb-[16px]'>
                <p className='font-extrabold text-[12px] mb-[17px]'>О квартире</p>
                <div className='grid grid-cols-3 gap-[8px]'>
                    {
                        items?.map((item, index) => {
                            return <PropertyCard item={item} key={index} />
                        })
                    }
                </div>
            </div>
            <div className='w-full bg-gray-extra-light rounded-[10px] p-[16px] mb-[24px]'>
                <p className='font-extrabold text-[12px] mb-[17px]'>О доме</p>
                <div className='grid grid-cols-3 gap-[8px]'>
                    {
                        items2?.map((item, index) => {
                            return <PropertyCard item={item} key={index} />
                        })
                    }
                </div>
            </div>
            <div className='flex flex-wrap gap-[8px] w-1/2 mb-[24px]'>
                {
                    tags?.map((tag,index) => {
                        return <div className='bg-gray-light rounded-[6px] font-black text-[10px] px-[7px] py-[6px] text-gray' key={index}><p>{tag}</p></div>
                    })
                }
            </div>
            <div className='flex gap-[16px]'>
                <button className='py-[13px] px-[17px] text-[12px] bg-gray rounded-[8px]'>Предложить обмен</button>
                <button className='py-[13px] px-[17px] text-[12px] bg-gray rounded-[8px]'>Отправить сообщение</button>
                <div className='ml-[16px] flex items-center gap-[8px]'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="#E3E3E3"/>
                            <path
                                d="M21.0747 11.9725C20.7815 11.6642 20.4333 11.4196 20.0502 11.2527C19.667 11.0859 19.2563 11 18.8415 11C18.4268 11 18.0161 11.0859 17.6329 11.2527C17.2497 11.4196 16.9016 11.6642 16.6084 11.9725L15.9998 12.612L15.3913 11.9725C14.7991 11.35 13.9958 11.0003 13.1582 11.0003C12.3206 11.0003 11.5173 11.35 10.925 11.9725C10.3327 12.5949 10 13.4392 10 14.3195C10 15.1998 10.3327 16.044 10.925 16.6665L11.5335 17.306L15.9998 22L20.4662 17.306L21.0747 16.6665C21.368 16.3583 21.6007 15.9924 21.7595 15.5897C21.9183 15.187 22 14.7554 22 14.3195C22 13.8836 21.9183 13.4519 21.7595 13.0492C21.6007 12.6465 21.368 12.2806 21.0747 11.9725Z"
                                fill="white"/>
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="#E3E3E3"/>
                            <path d="M9.99999 22L22 10M22 10H15.6244M22 10V16.3756" stroke="white" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemInfoSecond;