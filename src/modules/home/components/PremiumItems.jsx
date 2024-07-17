import React from 'react';
import ProductCard from "../../../components/ProductCard.jsx";

const PremiumItems = () => {
    const items = [
        {
            title: "Автомобиль Opel Mokka 1.8 MT, 2014, 155 644 км",
            user: "Dilmurod1227",
            count: "07",
            category: "Авто-транспорт",
            date: "12 ЯНВ",
        },
        {
            title: "Оборудования для автомойки само-обслуживания PRO-87",
            user: "vladimir_ivanovich",
            count: "14",
            category: "Оборудование для бизнеса",
            date: "19 ДЕК",
        },
        {
            title: "3-к. квартира, 104 м2, 5/12 эт., ЖК GoldenHouse",
            user: "Infinity_realty",
            count: "24",
            category: "Недвижимость",
            date: "27 ФЕВ",
        },
        {
            title: "Смартфон Realme C51/ 4/128Гб, красный",
            user: "mustafa_store",
            count: "49",
            category: "Электроника",
            date: "04 МАР",
        },
        {
            title: "Cумка MILLZ KARTA, кросс-боди, бежевая, ORIGINAL",
            user: "Kamilla_DIAMOND",
            count: "29",
            category: "Аксессуары",
            date: "24 АВГ",
        },
        {
            title: "Cумка MILLZ KARTA, кросс-боди, бежевая, ORIGINAL",
            user: "Kamilla_DIAMOND",
            count: "29",
            category: "Аксессуары",
            date: "24 АВГ",
        },
        {
            title: "Смартфон Realme C51/ 4/128Гб, красный",
            user: "mustafa_store",
            count: "49",
            category: "Электроника",
            date: "04 МАР",
        },
        {
            title: "Автомобиль Opel Mokka 1.8 MT, 2014, 155 644 км",
            user: "Dilmurod1227",
            count: "07",
            category: "Авто-транспорт",
            date: "12 ЯНВ",
        },
        {
            title: "3-к. квартира, 104 м2, 5/12 эт., ЖК GoldenHouse",
            user: "Infinity_realty",
            count: "24",
            category: "Недвижимость",
            date: "27 ФЕВ",
        },
        {
            title: "Оборудования для автомойки само-обслуживания PRO-87",
            user: "vladimir_ivanovich",
            count: "14",
            category: "Оборудование для бизнеса",
            date: "19 ДЕК",
        },
    ]
    return (
        <div className='pt-4'>
            <div className='flex justify-center'>
                <p className='font-extrabold text-[18px]'>Премиум объявления</p>
            </div>
            <div className='grid grid-cols-5 gap-5 py-3'>
                {
                    items.map((item,index) => (
                        <ProductCard item={item} key={index} />
                    ))
                }
            </div>
            <div>
                <button className='bg-gray w-full rounded-md p-2 font-extrabold text-[12px]'>
                    Показать еще
                </button>
            </div>
        </div>
    );
};

export default PremiumItems;