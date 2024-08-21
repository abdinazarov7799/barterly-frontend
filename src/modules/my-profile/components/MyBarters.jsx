import React from 'react';
import sorting1Icon from '../../../assets/icons/sorting_1.svg'
import sorting2Icon from '../../../assets/icons/sorting_2.svg'
import BarterCard from "../../../components/BarterCard.jsx";

const MyBarters = () => {
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
        {
            id: 6,
            title: "Автомобиль Opel Mokka 1.8 MT, 2014, 155 644 км",
            category: "Авто-транспорт",
            date: "12 ЯНВ",
            description: "Готов обменять Автомобиль Opel Mokka 1.8 MT, 2014 года выпуска. Автомобиль в отличном техническом состоянии, бережная эксплуатация. В ДТП не участвовал. Вложений не требует."
        },
        {
            id: 7,
            title: "3-к. квартира, 104 м2, 5/12 эт., ЖК GoldenHouse",
            category: "Недвижимость",
            date: "27 ФЕВ",
            description: "Готов обменять трёхкомнатную квaртиру в Ташкенте пo ул. Махтумкули в Мирзо-Улугбекском paйоне.\n" +
                "Квартиpа 104 кв.м. бeз учётa балкoнa. B квaртире улучшeнa планирoвка."
        },
        {
            id: 8,
            title: "Автомобиль Opel Mokka 1.8 MT, 2014, 155 644 км",
            category: "Авто-транспорт",
            date: "12 ЯНВ",
            description: "Готов обменять Автомобиль Opel Mokka 1.8 MT, 2014 года выпуска. Автомобиль в отличном техническом состоянии, бережная эксплуатация. В ДТП не участвовал. Вложений не требует."
        },
    ]

    return (
        <div>
            <div className='flex items-center justify-between font-bold text-[10px] mt-3'>
                <p>Бартеры</p>
                <p>Доступно 12 предложений</p>
                <div className='flex items-center space-x-1'>
                    <button className='flex items-center bg-gray px-3 py-2 rounded-full mr-4'>
                        <span>Сортировка по дате</span>
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd"
                                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>
                    <button><img src={sorting1Icon} alt="sorting-1"/></button>
                    <button><img src={sorting2Icon} alt="sorting-2"/></button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5 py-3'>
                {
                    items.map((item, index) => (
                        <BarterCard item={item} key={index}/>
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

export default MyBarters;