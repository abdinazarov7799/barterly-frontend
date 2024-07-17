import React, { useState } from 'react';

const HeaderCatalog = ({ isOpen, toggleDropdown }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(null);

    const toggleSubMenu = (index) => {
        setSubMenuOpen(subMenuOpen === index ? null : index);
    };

    const items = [
        {
            title: "Транспорт",
            subItems: [
                "Легковые автомобили",
                "Мотоциклы и мототехника",
                {
                    title: "Грузовики и спецтехника",
                    subItems: [
                        "Автобусы",
                        "Автодома",
                        "Автокраны",
                        "Бульдозеры",
                        "Грузовики",
                        "Коммунальная техника",
                        "Коммерческий транспорт",
                        "Навесное оборудование",
                        "Погрузчики",
                        "Прицепы",
                        "Сельхозтехника",
                        "Строительная техника",
                        "Тягачи",
                        "Экскаваторы",
                        "Другое"
                    ]
                },
                "Запчасти и аксессуары"
            ]
        },
        "Автотовары и запчасти",
        "Недвижимость",
        "Электроника",
        "Одежда и обувь",
        "Для ремонта",
        "Детские товары",
        "Готовый бизнес",
        "Оборудование",
        "Игрушки",
        "Красота и здоровье",
        "Аксессуары",
        "Мебель",
        "Оборудование"
    ];

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity ${isOpen ? 'opacity-70' : 'opacity-0 pointer-events-none'}`} onClick={toggleDropdown}>
            {isOpen && (
                <div className="absolute left-0 mt-12 bg-white rounded-md shadow-lg z-50 p-8 w-full transition-all transform opacity-100 scale-100 font-bold text-[12px]">
                    <div className="flex">
                        <ul className="w-1/4 space-y-3">
                            {items.map((item, index) => (
                                <li key={index}>
                                    <button className="flex justify-between w-full text-left" onClick={() => toggleSubMenu(index)}>
                                        {item.title || item}
                                        {item.subItems && <span className="ml-2">{subMenuOpen === index ? '▲' : '▶'}</span>}
                                    </button>
                                    {item.subItems && subMenuOpen === index && (
                                        <ul className="pl-4 mt-2 space-y-2">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    {typeof subItem === 'string' ? (
                                                        <button className="text-left w-full">{subItem}</button>
                                                    ) : (
                                                        <div>
                                                            <button className="flex justify-between w-full text-left" onClick={() => toggleSubMenu(subIndex)}>
                                                                {subItem.title}
                                                                <span className="ml-2">{subMenuOpen === subIndex ? '▲' : '▶'}</span>
                                                            </button>
                                                            {subMenuOpen === subIndex && (
                                                                <ul className="pl-4 mt-2 space-y-2">
                                                                    {subItem.subItems.map((nestedItem, nestedIndex) => (
                                                                        <li key={nestedIndex}>
                                                                            <button className="text-left w-full">{nestedItem}</button>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="w-3/4 bg-gray-100 p-4 rounded-md">
                            <h3 className="font-bold text-lg">Выберите категорию</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeaderCatalog;
