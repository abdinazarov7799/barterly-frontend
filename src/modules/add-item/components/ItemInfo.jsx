import React from 'react';

const ItemInfo = () => {
    return (
        <div className='grid grid-cols-12 gap-[24px] mb-[40px]'>
            <div className='col-span-9'>
                <p className='font-extrabold text-[12px] mb-[17px]'>Информация о бартере</p>
                <div className='bg-gray-extra-light border-[1.5px] border-gray p-[24px] rounded-[6px] relative'>
                    <p className='font-semibold text-[12px] leading-[18px]'>
                        Готов обменять Автомобиль Opel Mokka 1.8 MT, 2014 года выпуска. Автомобиль в отличном техническом состоянии, бережная эксплуатация. В ДТП не участвовал. Вложений не требует. Абсолютнo чистaя и пpозpaчнaя иcтория. Нe битaя не крaшеная.  Без ДTП и раcчётов pемонтныx paбoт. Kузoв максимально сoxранен и  выглядит имeннo так как на фотo. Bсе cтёкла включaя лобoвoe зaводские. Пробег  оригинальный, что является главным критерием при выборе автомобиля. Самая максимальная комплектация для этого автомобиля - Соsmо 1,8 л.,  полный привод, люк. Полный комплект ключей и документов. Зеленая автотека.
                    </p>
                    <div className='absolute bottom-[8px] right-[8px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="11" stroke="#D7D6D6" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            <path
                                d="M13.6667 7H17M17 7V10.3333M17 7L13.1111 10.8889M10.3333 17H7M7 17V13.6667M7 17L10.8889 13.1111"
                                stroke="#D7D6D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='col-span-3'>
                <p className='font-extrabold text-[12px] mb-[17px]'>Инструменты продвижения</p>
                <div className='flex items-center justify-center bg-gray-light p-[24px] rounded-[8px] mb-[16px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="1" y="1" width="22" height="22" rx="11" stroke="white" stroke-width="2"/>
                        <path
                            d="M12 6L13.854 9.6204L18 10.2045L15 13.021L15.708 17L12 15.1204L8.292 17L9 13.021L6 10.2045L10.146 9.6204L12 6Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='text-[11px] ml-[16px]'>
                        Premium объявление
                    </p>
                </div>
                <div className='flex items-center justify-center bg-gray-light p-[24px] rounded-[8px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="1" y="1" width="22" height="22" rx="11" stroke="white" stroke-width="2"/>
                        <path
                            d="M12 6V8.4M12 15.6V18M7.758 7.758L9.456 9.456M14.544 14.544L16.242 16.242M6 12H8.4M15.6 12H18M7.758 16.242L9.456 14.544M14.544 9.456L16.242 7.758"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='text-[11px] ml-[16px]'>
                        Временная публикация
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItemInfo;