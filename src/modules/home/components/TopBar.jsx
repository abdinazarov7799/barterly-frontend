import React from 'react';

const TopBar = () => {
    const items = [
        {
            title: "Авто",
            value: "Авто"
        },
        {
            title: "Недвижимость",
            value: "Недвижимость"
        },
        {
            title: "Электроника",
            value: "Электроника"
        },
        {
            title: "Смартфоны",
            value: "Смартфоны"
        },
        {
            title: "Одежда",
            value: "Одежда"
        },
        {
            title: "Продукты",
            value: "Продукты"
        },
        {
            title: "Игрушки",
            value: "Игрушки"
        },
        {
            title: "Бизнес",
            value: "Бизнес"
        },
        {
            title: "Книги",
            value: "Книги"
        },
        {
            title: "Аксессуары",
            value: "Аксессуары"
        },
        {
            title: "Автотовары",
            value: "Автотовары"
        },
        {
            title: "Обувь",
            value: "Обувь"
        },
        {
            title: "Косметика",
            value: "Косметика"
        },
        {
            title: "Детские товары",
            value: "Детские товары"
        },
        {
            title: "Планшеты",
            value: "Планшеты"
        },
        {
            title: "Приставки",
            value: "Приставки"
        },
    ]
    return (
        <div className="flex justify-between items-center text-text-gray text-[11px] mt-1">
            {items.map(item => (
                <span key={item.value} className='underline'>
                    {item.title}
                </span>
            ))}
            <button className='bg-gray py-1 px-3 rounded-md flex items-center'>
                <span className='pt-1'>Ещё</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                          d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"/>
                </svg>
            </button>
        </div>
    );
};

export default TopBar;