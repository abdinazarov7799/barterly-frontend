import React from 'react';
import Container from "../../../components/Container.jsx";
import { get } from "lodash";
import { useTranslation } from "react-i18next";

const HeaderCatalog = ({ isOpen, toggleDropdown }) => {
    const { t } = useTranslation();
    const categories = [
        { label: "Транспорт", value: "Транспорт" },
        { label: "Автотовары и запчасти", value: "Автотовары и запчасти" },
        { label: "Недвижимость", value: "Недвижимость" },
        { label: "Электроника", value: "Электроника" },
        { label: "Одежда и обувь", value: "Одежда и обувь" },
        { label: "Для ремонта", value: "Для ремонта" },
        { label: "Детские товары", value: "Детские товары" },
        { label: "Игрушки", value: "Игрушки" },
        { label: "Красота и здоровье", value: "Красота и здоровье" },
        { label: "Готовый бизнес", value: "Готовый бизнес" },
        { label: "Аксессуары", value: "Аксессуары" },
        { label: "Мебель", value: "Мебель" },
        { label: "Оборудование", value: "Оборудование" },
    ];
    const subCategories = [
        { label: "Легковые автомобили", value: "Легковые автомобили" },
        { label: "Мотоциклы и мототехника", value: "Мотоциклы и мототехника" },
        { label: "Грузовики и спецтехника", value: "Грузовики и спецтехника" },
        { label: "Запчасти и аксессуары", value: "Запчасти и аксессуары" },
    ];
    const childrens = [
        { label: "Автобусы", value: "Автобусы" },
        { label: "Автодома", value: "Автодома" },
        { label: "Автокраны", value: "Автокраны" },
        { label: "Бульдозеры", value: "Бульдозеры" },
        { label: "Грузовики", value: "Грузовики" },
        { label: "Коммунальная техника", value: "Коммунальная техника" },
        { label: "Коммерческий транспорт", value: "Коммерческий транспорт" },
        { label: "Навесное оборудование", value: "Навесное оборудование" },
        { label: "Погрузчики", value: "Погрузчики" },
        { label: "Прицепы", value: "Прицепы" },
        { label: "Сельхозтехника", value: "Сельхозтехника" },
        { label: "Строительная техника", value: "Строительная техника" },
        { label: "Тягачи", value: "Тягачи" },
        { label: "Экскаваторы", value: "Экскаваторы" },
        { label: "Другое", value: "Другое" },
    ];

    return (
        isOpen && (
            <div className="absolute w-full top-full z-40">
                <Container>
                    <div className="bg-gray-light rounded-2xl w-full font-bold text-[12px] text-start py-6">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-3">
                                {categories.map((item, index) => (
                                    <button
                                        className="flex items-center justify-between w-full py-3 px-6 hover:bg-gray"
                                        key={index}
                                    >
                                        <p>{get(item, 'label')}</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="6"
                                            height="10"
                                            viewBox="0 0 6 10"
                                            fill="none"
                                        >
                                            <path
                                                d="M1 9L5 5L1 1"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                            <div className="col-span-5">
                                <p className="pl-24 text-[16px] mb-8">{t("Транспорт")}</p>
                                {subCategories.map((item, index) => (
                                    <button
                                        className="flex items-center justify-between w-full py-3 pr-6 pl-24 hover:bg-gray"
                                        key={index}
                                    >
                                        <p>{get(item, 'label')}</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="6"
                                            height="10"
                                            viewBox="0 0 6 10"
                                            fill="none"
                                        >
                                            <path
                                                d="M1 9L5 5L1 1"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                            <div className="col-span-4">
                                <p className="pl-24 text-[16px] mb-4">{t("Грузовики и спецтехника")}</p>
                                {childrens.map((item, index) => (
                                    <button
                                        className="flex items-center justify-between w-full py-3 pr-6 pl-24 hover:bg-gray"
                                        key={index}
                                    >
                                        {get(item, 'label')}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    );
};

export default HeaderCatalog;
