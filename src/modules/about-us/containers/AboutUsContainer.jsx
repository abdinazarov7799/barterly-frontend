import React from 'react';
import Container from "../../../components/Container.jsx";
import TopBar from "../../home/components/TopBar.jsx";

const AboutUsContainer = () => {
    return (
        <Container>
            <TopBar/>
            <div className="rounded-[8px] bg-gray w-full h-[328px] mt-[16px] mb-[76px]"></div>

            <p className='font-extrabold text-[24px] mb-[41px]'>Душа компании</p>
            <div className='flex items-center space-x-[24px] mb-[15px]'>
                <div className='w-[30%]'>
                    <p className='font-extrabold text-[16px] mb-[18px]'>Тональность</p>
                    <p className='font-semibold text-[12px] leading-[16px]'>
                        Обращаемся к пользователю, как к знакомому — дружелюбно и на равных. При первом знакомстве и в
                        сложных ситуациях выбираем нейтральный тон. При этом избегаем быть скучными и формальными —
                        когда уместно, коммуникация может быть смелой и эмоциональной.
                    </p>
                </div>
                <div className='w-[30%]'>
                    <p className='font-extrabold text-[16px] mb-[18px]'>Язык</p>
                    <p className='font-semibold text-[12px] leading-[16px]'>
                        Мы общаемся простым языком, избегаем сложных терминов, аббревиатур и профессионального жаргона.
                        Наши сообщения сформулированы прямо и понятны самой широкой аудитории.
                    </p>
                </div>
                <div className='w-[30%]'>
                    <p className='font-extrabold text-[16px] mb-[18px]'>Юмор</p>
                    <p className='font-semibold text-[12px] leading-[16px]'>
                        Мы веселые, но хотим, чтобы наши шутки никого не обижали. Поэтому шутим только, когда задача
                        пользователя решена и не острим на острые темы.
                    </p>
                </div>
            </div>
            <div className='flex items-center space-x-[24px]'>
                <div className='w-[30%]'>
                    <p className='font-semibold text-[12px] leading-[16px] whitespace-pre-line'>

                        Мы активно растём, поэтому бренд максимально гибкий. Концепция 360° позволяет нам легко
                        адаптировать фирменный стиль под любые сценарии и форматы коммуникации. Современная платформа
                        e-commerce.
                        <br/><br/>
                        Мы развиваем сервисы для предпринимателей и покупателей по всей стране и создаем продукты, с
                        которыми люди на «ты»
                    </p>
                </div>
                <div className="w-[30%] h-[336px] bg-gray rounded-[8px]"></div>
                <div className='w-[30%]'>
                    <p className='font-semibold text-[16px] leading-normal mb-[6px] h-[58px]'>
                        Наша миссия — давать возможность людям улучшить жизнь себе и другим
                    </p>
                    <p className='font-semibold text-[12px] leading-[16px]'>
                        Через технологии мы помогаем людям и бизнесу, упрощая решение любых задач — от повседневных до
                        самых важных.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default AboutUsContainer;