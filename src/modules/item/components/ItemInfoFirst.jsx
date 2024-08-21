import React from 'react';

const ItemInfoFirst = () => {
    return (
        <div>
            <h3 className='font-bold text-[18px] mb-[26px]'>3-к. квартира, 104 м2, 5/12 эт., ЖК GoldenHouse</h3>
            <div className='w-full h-[288px] bg-gray rounded-[8px] mb-[16px] flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path
                        d="M33 33L25.2667 25.2667M29.4444 15.2222C29.4444 23.0769 23.0769 29.4444 15.2222 29.4444C7.36751 29.4444 1 23.0769 1 15.2222C1 7.36751 7.36751 1 15.2222 1C23.0769 1 29.4444 7.36751 29.4444 15.2222Z"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.1412 14.6569H9.82752M15.4844 9V20.3137" stroke="white" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className='grid grid-cols-4 gap-[16px] mb-[32px]'>
                <div className='w-[96px] h-[64px] bg-gray rounded-[8px]'></div>
                <div className='w-[96px] h-[64px] bg-gray rounded-[8px]'></div>
                <div className='w-[96px] h-[64px] bg-gray rounded-[8px]'></div>
                <div className='w-[96px] h-[64px] bg-gray rounded-[8px]'></div>
            </div>
            <div>
                <h4 className='font-extrabold text-[12px] mb-[17px]'>Информация о бартере</h4>
                <div className='w-full p-[24px] bg-gray-light border border-gray rounded-[6px]'>
                    <p className='font-semibold text-[12px] leading-[17px]'>
                        Готов обменять трёхкомнатную квaртиру в Ташкенте пo ул. Махтумкули в Мирзо-Улугбекском paйоне.
                        Квартиpа 104 кв.м. бeз учётa балкoнa. B квaртире улучшeнa планирoвка, увеличенa кухня и ваннaя , официaльно офopмлeнo. Cвeжий, xоpoший рeмoнт. Пол в кухне и в кopидope в плитке , в комнaтe ламинат, вaннaя кoмнaта такжe отделанная новой современной плиткой. В кухне и в комнате пластиковые окна. натяжные потолки по всей квартире. При обмене остаётся кухня, встроенная техника, холодильник, микроволновка, сплит-система. Рядом с домой два детских сада, школа. Во дворе детская и спортивная площадки. Подземная парковка, включая официальное парковочное место.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItemInfoFirst;