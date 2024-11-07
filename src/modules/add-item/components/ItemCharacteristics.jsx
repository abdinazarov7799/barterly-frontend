import React from 'react';
import {Select} from "../../../components/ui/Select.jsx";

const ItemCharacteristics = () => {
    return (
        <>
            <p className='font-extrabold text-[12px] mb-[16px]'>Характеристики</p>
            <div className='grid grid-cols-3 gap-[16px]'>
                <Select
                    items={[{
                        key: "2014",
                        value: "2014",
                        label: "2014",
                    }]}
                    label={"Год выпуска"}
                />
                <Select
                    items={[{
                        key: "Бензин",
                        value: "Бензин",
                        label: "Бензин",
                    }]}
                    label={"Тип двигателя"}
                />
                <Select
                    items={[{
                        key: "0",
                        value: "0",
                        label: "0",
                    }]}
                    label={"Пробег"}
                />
                <Select
                    items={[{
                        key: "Автомат",
                        value: "Автомат",
                        label: "Автомат",
                    }]}
                    label={"Коробка передач"}
                />
                <Select
                    items={[{
                        key: "2014",
                        value: "2014",
                        label: "2014",
                    }]}
                    label={"Объем двигателя"}
                />
                <Select
                    items={[{
                        key: "2014",
                        value: "2014",
                        label: "2014",
                    }]}
                    label={"Привод"}
                />
                <Select
                    items={[{
                        key: "Внедорожник",
                        value: "Внедорожник",
                        label: "Внедорожник",
                    }]}
                    label={"Тип кузова"}
                />
                <Select
                    items={[{
                        key: "2014",
                        value: "2014",
                        label: "2014",
                    }]}
                    label={"Поколение"}
                />
                <Select
                    items={[{
                        key: "2014",
                        value: "2014",
                        label: "2014",
                    }]}
                    label={"Комплектация"}
                />
            </div>
            <p className='font-extrabold text-[12px] mb-[16px] mt-[25px]'>Дополнительные опции</p>
            <div className='grid grid-cols-3 gap-[16px] mb-[8px]'>
                <Select
                    items={[{
                        key: "Ikon Tyres Nordman R18",
                        value: "Ikon Tyres Nordman R18",
                        label: "Ikon Tyres Nordman R18",
                    }]}
                    label={"Шины"}
                />
                <Select
                    items={[{
                        key: "OZ Racing Super Turismo",
                        value: "OZ Racing Super Turismo",
                        label: "OZ Racing Super Turismo",
                    }]}
                    label={"Диски"}
                />
                <Select
                    items={[{
                        key: "Натуральная кожа",
                        value: "Натуральная кожа",
                        label: "Натуральная кожа",
                    }]}
                    label={"Салон"}
                />
                <Select
                    items={[{
                        key: "Teyes CC3L",
                        value: "Teyes CC3L",
                        label: "Teyes CC3L",
                    }]}
                    label={"Система безопасности"}
                />
                <Select
                    items={[{
                        key: "2014",
                        value: "2014",
                        label: "2014",
                    }]}
                    label={"Мультимедия"}
                />
                <Select
                    items={[{
                        key: "2014",
                        value: "2014",
                        label: "2014",
                    }]}
                    label={"Навигация"}
                />
            </div>
        </>
    );
};

export default ItemCharacteristics;