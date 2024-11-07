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
            {items?.map(item => (
                <button key={item.value} className='py-[6px] px-[8px] text-text-gray font-extrabold text-[10px] border-[2px] rounded-lg'>
                    {item.title}
                </button>
            ))}
            <button className='bg-gray py-[5px] px-[16px] rounded-md flex items-center'>
                <span className='mr-[10px]'>Каталог</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
                    <path fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.293245 0.292787C0.481066 0.105316 0.735772 0 1.00135 0C1.26693 0 1.52164 0.105316 1.70946 0.292787L4.00605 2.58579L6.30264 0.292787C6.49153 0.110629 6.74453 0.0098342 7.00714 0.0121126C7.26974 0.014391 7.52095 0.11956 7.70665 0.304968C7.89235 0.490376 7.99768 0.741189 7.99996 1.00339C8.00224 1.26558 7.90129 1.51818 7.71885 1.70679L4.71415 4.70679C4.52633 4.89426 4.27163 4.99957 4.00605 4.99957C3.74047 4.99957 3.48576 4.89426 3.29794 4.70679L0.293245 1.70679C0.10548 1.51926 0 1.26495 0 0.999786C0 0.734622 0.10548 0.480314 0.293245 0.292787Z"
                          fill="#A5A4A3"/>
                </svg>
            </button>
        </div>
    );
};

export default TopBar;