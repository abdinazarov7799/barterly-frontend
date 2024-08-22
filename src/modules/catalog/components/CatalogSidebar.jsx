import React, {useState} from 'react';
import {get} from "lodash";
import District from "./accordion-items/District.jsx";
import Filter from "./accordion-items/Filter.jsx";
import HousingType from "./accordion-items/HousingType.jsx";
import HouseType from "./accordion-items/HouseType.jsx";
import City from "./accordion-items/City.jsx";

const AccordionItem = ({ title, children, isOpen, onClick }) => (
    <div>
        <button
            className="flex justify-between items-center my-[8px] w-full p-[8px] bg-gray-extra-light rounded-[6px]"
            onClick={onClick}
        >
            <span className='ml-[8px] font-black text-[12px]'>{title}</span>
            {isOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="16" y="16" width="16" height="16" rx="2" transform="rotate(-180 16 16)" fill="#F0F0F0"/>
                    <path d="M12 10L8 6L4 10" stroke="#D7D6D6" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect width="16" height="16" rx="2" fill="#F0F0F0"/>
                    <path d="M4 6L8 10L12 6" stroke="#D7D6D6" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            }
        </button>
        {isOpen && <div>{children}</div>}
    </div>
);

const CatalogSidebar = () => {
    const [openIndexes, setOpenIndexes] = useState([]);
    const items = [
        {
            id: 1,
            title: "Город",
            children: <City />,
        },
        {
            id: 2,
            title: "Район",
            children: <District />,
        },
        {
            id: 3,
            title: "Фильтры",
            children: <Filter />,
        },
        {
            id: 4,
            title: "Тип жилья",
            children: <HousingType />,
        },
        {
            id: 5,
            title: "Тип дома",
            children: <HouseType />,
        },
        {
            id: 6,
            title: "Количество комнат",
            children: <></>,
        },
        {
            id: 7,
            title: "Общая площадь (м2)",
            children: <></>,
        },
        {
            id: 8,
            title: "Этаж",
            children: <></>,
        },
        {
            id: 9,
            title: "Ремонт",
            children: <></>,
        },
        {
            id: 10,
            title: "Балкон/лоджия",
            children: <></>,
        },
        {
            id: 11,
            title: "Окна",
            children: <></>,
        },
        {
            id: 12,
            title: "Санузел",
            children: <></>,
        },
    ]

    const toggleAccordion = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter(i => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
    };
    return (
        <div className='divide-y divide-gray'>
            {
                items?.map(item => {
                    return <AccordionItem
                        title={get(item,'title')}
                        isOpen={openIndexes.includes(get(item,'id'))}
                        onClick={() => toggleAccordion(get(item,'id'))}
                        children={get(item,'children')}
                    />
                })
            }
        </div>
    );
};

export default CatalogSidebar;