import React from 'react';
import UserProfile from "../../../components/UserProfile.jsx";
import ItemViewPageAds from "../../../components/ads/ItemViewPageAds.jsx";
import ItemInfoFirst from "../components/ItemInfoFirst.jsx";
import ItemInfoSecond from "../components/ItemInfoSecond.jsx";
import UserBarters from "../../../components/UserBarters.jsx";

const ItemInfo = ({category,id}) => {
    const items = [
        {
            id: 1,
            title: "Автомобиль Opel Mokka 1.8 MT, 2014, 155 644 км",
            category: "Авто-транспорт",
            date: "12 ЯНВ",
            description: "Готов обменять Автомобиль Opel Mokka 1.8 MT, 2014 года выпуска. Автомобиль в отличном техническом состоянии, бережная эксплуатация. В ДТП не участвовал. Вложений не требует."
        },
        {
            id: 2,
            title: "3-к. квартира, 104 м2, 5/12 эт., ЖК GoldenHouse",
            category: "Недвижимость",
            date: "27 ФЕВ",
            description: "Готов обменять трёхкомнатную квaртиру в Ташкенте пo ул. Махтумкули в Мирзо-Улугбекском paйоне.\n" +
                "Квартиpа 104 кв.м. бeз учётa балкoнa. B квaртире улучшeнa планирoвка."
        },
        {
            id: 3,
            title: "Автомобиль Opel Mokka 1.8 MT, 2014, 155 644 км",
            category: "Авто-транспорт",
            date: "12 ЯНВ",
            description: "Готов обменять Автомобиль Opel Mokka 1.8 MT, 2014 года выпуска. Автомобиль в отличном техническом состоянии, бережная эксплуатация. В ДТП не участвовал. Вложений не требует."
        },
        {
            id: 4,
            title: "3-к. квартира, 104 м2, 5/12 эт., ЖК GoldenHouse",
            category: "Недвижимость",
            date: "27 ФЕВ",
            description: "Готов обменять трёхкомнатную квaртиру в Ташкенте пo ул. Махтумкули в Мирзо-Улугбекском paйоне.\n" +
                "Квартиpа 104 кв.м. бeз учётa балкoнa. B квaртире улучшeнa планирoвка."
        },
        {
            id: 5,
            title: "Автомобиль Opel Mokka 1.8 MT, 2014, 155 644 км",
            category: "Авто-транспорт",
            date: "12 ЯНВ",
            description: "Готов обменять Автомобиль Opel Mokka 1.8 MT, 2014 года выпуска. Автомобиль в отличном техническом состоянии, бережная эксплуатация. В ДТП не участвовал. Вложений не требует."
        },
    ]
    const items2 = [
        {
            id: 1,
            title: "Автомобиль Opel Mokka 1.8 MT, 2014, 155 644 км",
            category: "Авто-транспорт",
            date: "12 ЯНВ",
            description: "Готов обменять Автомобиль Opel Mokka 1.8 MT, 2014 года выпуска. Автомобиль в отличном техническом состоянии, бережная эксплуатация. В ДТП не участвовал. Вложений не требует."
        },
        {
            id: 2,
            title: "3-к. квартира, 104 м2, 5/12 эт., ЖК GoldenHouse",
            category: "Недвижимость",
            date: "27 ФЕВ",
            description: "Готов обменять трёхкомнатную квaртиру в Ташкенте пo ул. Махтумкули в Мирзо-Улугбекском paйоне.\n" +
                "Квартиpа 104 кв.м. бeз учётa балкoнa. B квaртире улучшeнa планирoвка."
        },
        {
            id: 3,
            title: "Автомобиль Opel Mokka 1.8 MT, 2014, 155 644 км",
            category: "Авто-транспорт",
            date: "12 ЯНВ",
            description: "Готов обменять Автомобиль Opel Mokka 1.8 MT, 2014 года выпуска. Автомобиль в отличном техническом состоянии, бережная эксплуатация. В ДТП не участвовал. Вложений не требует."
        },
        {
            id: 4,
            title: "3-к. квартира, 104 м2, 5/12 эт., ЖК GoldenHouse",
            category: "Недвижимость",
            date: "27 ФЕВ",
            description: "Готов обменять трёхкомнатную квaртиру в Ташкенте пo ул. Махтумкули в Мирзо-Улугбекском paйоне.\n" +
                "Квартиpа 104 кв.м. бeз учётa балкoнa. B квaртире улучшeнa планирoвка."
        },
        {
            id: 5,
            title: "Автомобиль Opel Mokka 1.8 MT, 2014, 155 644 км",
            category: "Авто-транспорт",
            date: "12 ЯНВ",
            description: "Готов обменять Автомобиль Opel Mokka 1.8 MT, 2014 года выпуска. Автомобиль в отличном техническом состоянии, бережная эксплуатация. В ДТП не участвовал. Вложений не требует."
        },
    ]
    return (
        <div className="my-5">
            <div className='flex justify-between items-center border-b-2 border-gray pb-3'>
                <p className='font-normal text-[16px]'>{category}</p>
                <div className='flex items-center space-x-2 font-black text-text-gray text-[10px]'>
                    <span>Главная</span>
                    <span>—</span>
                    <span>Все категории</span>
                    <span>—</span>
                    <span>Недвижимость</span>
                    <span>—</span>
                    <span>Квартиры</span>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-5 pt-[24px]'>
                <div className='col-span-4'>
                    <ItemInfoFirst />
                </div>
                <div className='col-span-6'>
                    <ItemInfoSecond />
                </div>
                <div className='col-span-2'>
                    <p className='font-extrabold text-gray text-[12px]'>Информация о пользователе</p>
                    <UserProfile />
                    <ItemViewPageAds />
                </div>
            </div>
            <div className='mt-[16px] mb-[24px]'>
                <UserBarters data={items} title={"Бартеры Dilmurod1227"} />
            </div>
            <div className='mt-[16px] mb-[24px]'>
                <UserBarters data={items2} title={"Похожие предложения"}/>
            </div>
        </div>
    );
};

export default ItemInfo;