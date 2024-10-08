import React from 'react';
import {useNavigate} from "react-router-dom";
import {get} from "lodash";

const Categories = () => {
    const navigate = useNavigate();
    const items = [
        {
            title: "Авто-транспорт",
            value: "Авто-транспорт"
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
            title: "Готовый бизнес и оборудование",
            value: "Готовый бизнес и оборудование"
        },
    ]
    return (
        <div className='grid grid-cols-5 gap-5 pt-4 font-bold text-[12px]'>
            {
                items?.map(item => (
                    <div
                        key={get(item,'value')}
                        onClick={() => navigate(`/${get(item,'value')}`)}
                        className='h-24 bg-gray rounded-md flex items-center justify-center cursor-pointer'
                    >
                        <p>{get(item,'title')}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Categories;