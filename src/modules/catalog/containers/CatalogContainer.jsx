import React from 'react';
import Container from "../../../components/Container.jsx";
import CatalogSidebar from "../components/CatalogSidebar.jsx";
import ItemCard from "../../../components/ItemCard.jsx";

const CatalogContainer = ({catalog}) => {
    const items = [
        {
            id: 1,
            title: "Автомобиль Opel Mokka 1.8 MT, 2014, 155 644 км",
            user: "Dilmurod1227",
            count: "07",
            category: "Авто-транспорт",
            date: "12 ЯНВ",
        },
        {
            id: 2,
            title: "Оборудования для автомойки само-обслуживания PRO-87",
            user: "vladimir_ivanovich",
            count: "14",
            category: "Оборудование для бизнеса",
            date: "19 ДЕК",
        },
        {
            id: 3,
            title: "3-к. квартира, 104 м2, 5/12 эт., ЖК GoldenHouse",
            user: "Infinity_realty",
            count: "24",
            category: "Недвижимость",
            date: "27 ФЕВ",
        },
        {
            id: 4,
            title: "Смартфон Realme C51/ 4/128Гб, красный",
            user: "mustafa_store",
            count: "49",
            category: "Электроника",
            date: "04 МАР",
        },
        {
            id: 5,
            title: "Cумка MILLZ KARTA, кросс-боди, бежевая, ORIGINAL",
            user: "Kamilla_DIAMOND",
            count: "29",
            category: "Аксессуары",
            date: "24 АВГ",
        },
        {
            id: 6,
            title: "Cумка MILLZ KARTA, кросс-боди, бежевая, ORIGINAL",
            user: "Kamilla_DIAMOND",
            count: "29",
            category: "Аксессуары",
            date: "24 АВГ",
        },
        {
            id: 7,
            title: "Смартфон Realme C51/ 4/128Гб, красный",
            user: "mustafa_store",
            count: "49",
            category: "Электроника",
            date: "04 МАР",
        },
        {
            id: 8,
            title: "Автомобиль Opel Mokka 1.8 MT, 2014, 155 644 км",
            user: "Dilmurod1227",
            count: "07",
            category: "Авто-транспорт",
            date: "12 ЯНВ",
        },
        {
            id: 9,
            title: "3-к. квартира, 104 м2, 5/12 эт., ЖК GoldenHouse",
            user: "Infinity_realty",
            count: "24",
            category: "Недвижимость",
            date: "27 ФЕВ",
        },
        {
            id: 10,
            title: "Оборудования для автомойки само-обслуживания PRO-87",
            user: "vladimir_ivanovich",
            count: "14",
            category: "Оборудование для бизнеса",
            date: "19 ДЕК",
        },
    ]
    return (
        <Container>
            <div className='grid grid-cols-12 gap-[22px]'>
                <div className='col-span-2'>
                    <div className='pb-[12px] border-b border-gray'>
                        <h3 className='font-bold text-[16px]'>{catalog}</h3>
                    </div>
                    <CatalogSidebar />
                </div>
                <div className='col-span-10'>
                    <div className='pb-[16px] pt-[5px] border-b border-gray flex items-center justify-between'>
                        <h3 className='font-bold text-[10px]'>Показано 727 предложений</h3>
                        <div className='flex items-center space-x-2 font-black text-text-gray text-[10px]'>
                            <span>Главная</span>
                            <span>—</span>
                            <span>Все категории</span>
                            <span>—</span>
                            <span>Недвижимость</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-end gap-[16px] mt-[16px] mb-[24px]'>
                        <button className='flex items-center gap-[8px] py-[6px] px-[16px] text-[10px] rounded-[12px] bg-gray'>
                            Сортировка по дате
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6"
                                 fill="none">
                                <path d="M1 1L5 5L9 1" stroke="black" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <div className='flex items-center gap-[5px]'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="3.25" stroke="#D9D9D9"
                                          stroke-width="1.5"/>
                                    <path
                                        d="M10.6667 7C10.6667 6.44772 10.219 6 9.66667 6H7C6.44772 6 6 6.44771 6 7V9.66667C6 10.219 6.44771 10.6667 7 10.6667H9.66667C10.219 10.6667 10.6667 10.219 10.6667 9.66667V7Z"
                                        fill="#D9D9D9"/>
                                    <path
                                        d="M18 7C18 6.44772 17.5523 6 17 6H14.3333C13.781 6 13.3333 6.44771 13.3333 7V9.66667C13.3333 10.219 13.781 10.6667 14.3333 10.6667H17C17.5523 10.6667 18 10.219 18 9.66667V7Z"
                                        fill="#D9D9D9"/>
                                    <path
                                        d="M18 14.3333C18 13.781 17.5523 13.3333 17 13.3333H14.3333C13.781 13.3333 13.3333 13.781 13.3333 14.3333V17C13.3333 17.5523 13.781 18 14.3333 18H17C17.5523 18 18 17.5523 18 17V14.3333Z"
                                        fill="#D9D9D9"/>
                                    <path
                                        d="M10.6667 14.3333C10.6667 13.781 10.219 13.3333 9.66667 13.3333H7C6.44772 13.3333 6 13.781 6 14.3333V17C6 17.5523 6.44771 18 7 18H9.66667C10.219 18 10.6667 17.5523 10.6667 17V14.3333Z"
                                        fill="#D9D9D9"/>
                                </svg>
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="3.25" stroke="#D9D9D9"
                                          stroke-width="1.5"/>
                                    <path d="M6 6H18V9H6V6Z" fill="#D9D9D9"/>
                                    <path d="M6 15H18V18H6V15Z" fill="#D9D9D9"/>
                                    <path d="M6 10.5H18V13.5H6V10.5Z" fill="#D9D9D9"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-[24px]'>
                        {
                            items?.map((item,index) => (
                                <ItemCard item={item} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CatalogContainer;