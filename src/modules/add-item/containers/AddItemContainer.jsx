import React from 'react';
import TopBar from "../../home/components/TopBar.jsx";
import Container from "../../../components/Container.jsx";
import PreviewItem from "../../my-profile/components/PreviewItem.jsx";
import ItemCharacteristics from "../components/ItemCharacteristics.jsx";
import {Select} from "../../../components/ui/Select.jsx";
import ItemInfo from "../components/ItemInfo.jsx";

const AddItemContainer = () => {
    return (
        <div className="space-y-5">
            <Container>
                <TopBar />
            </Container>
            <Container>
                <div className='flex justify-between items-center border-b-2 border-gray pb-3 mb-[24px]'>
                    <p className='font-bold text-[16px]'>Добавить объявление</p>
                    <div className='flex items-center space-x-2 font-black text-text-gray text-[10px]'>
                        <span>Главная</span>
                        <span>—</span>
                        <span>Добавить объявление</span>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-[24px] mb-[16px]'>
                    <div className='col-span-8'>
                        <div className='grid grid-cols-12 gap-[24px] mb-[40px]'>
                            <div className='font-extrabold col-span-4'>
                                <p className='text-[14px]'>Основная информация</p>
                                <p className='text-[12px] text-gray'>Выберите категорию</p>
                            </div>
                            <div className="col-span-4">
                                <Select items={[
                                    {
                                        key: "Транспорт",
                                        value: "Транспорт",
                                        label: "Транспорт"
                                    }]}
                                />
                            </div>
                            <div className='col-span-4'>
                                <button className='bg-gray rounded-[12px] text-[10px] font-black py-[6px] px-[12px]'>
                                    Сбросить
                                </button>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-[24px] mb-[40px]'>
                            <div className='col-span-4'>
                                <p className='text-gray font-extrabold text-[12px] mb-[9px]'>Выберите раздел</p>
                                <Select items={[
                                    {
                                        key: "Коммерческий транспорт",
                                        value: "Коммерческий транспорт",
                                        label: "Коммерческий транспорт"
                                    }
                                ]}/>
                            </div>
                            <div className='col-span-4'>
                                <p className='text-gray font-extrabold text-[12px] mb-[9px]'>Марка</p>
                                <Select items={[
                                    {
                                        key: "Марка автомобиля",
                                        value: "Марка автомобиля",
                                        label: "Марка автомобиля"
                                    }
                                ]}/>
                            </div>
                            <div className='col-span-4'>
                                <p className='text-gray font-extrabold text-[12px] mb-[9px]'>Модель</p>
                                <Select items={[
                                    {
                                        key: "Nexia",
                                        value: "Nexia",
                                        label: "Nexia"
                                    }
                                ]}/>
                            </div>
                        </div>
                        <div className='w-full rounded-[4px] bg-gray-light py-[16px] px-[24px] mb-[32px]'>
                            <ItemCharacteristics/>
                        </div>
                        <ItemInfo />
                        <button className='flex items-center p-[16px] bg-gray rounded-[6px] text-[12px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9"
                                 fill="none">
                                <path d="M11 1L4.125 8L1 4.81818" stroke="black" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                            <span className='ml-[14px]'>Опубликовать</span>
                        </button>
                    </div>
                    <div className='col-span-4 font-extrabold'>
                        <p className='text-[12px] mb-[17px]'>Фотографии</p>
                        <div className='h-[288px] bg-gray rounded-[8px] p-[24px] mb-[16px]'>
                            <div className='w-full h-full border-dashed border-black rounded-[8px] flex flex-col items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                     fill="none">
                                    <circle cx="16" cy="16" r="16" fill="#E3E3E3"/>
                                    <path
                                        d="M24 21.1391C24 21.5221 23.8468 21.8895 23.574 22.1604C23.3012 22.4313 22.9312 22.5835 22.5455 22.5835H9.45455C9.06878 22.5835 8.69881 22.4313 8.42603 22.1604C8.15325 21.8895 8 21.5221 8 21.1391V13.1946C8 12.8115 8.15325 12.4441 8.42603 12.1732C8.69881 11.9023 9.06878 11.7502 9.45455 11.7502H12.3636L13.8182 9.5835H18.1818L19.6364 11.7502H22.5455C22.9312 11.7502 23.3012 11.9023 23.574 12.1732C23.8468 12.4441 24 12.8115 24 13.1946V21.1391Z"
                                        stroke="#A5A4A3" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M16 19.6946C17.6066 19.6946 18.9091 18.4012 18.9091 16.8057C18.9091 15.2102 17.6066 13.9168 16 13.9168C14.3934 13.9168 13.0909 15.2102 13.0909 16.8057C13.0909 18.4012 14.3934 19.6946 16 19.6946Z"
                                        stroke="#A5A4A3" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </svg>
                                <p className='text-[12px] mb-[8px] mt-[33px]'>Перетащите фото сюда</p>
                                <p className='text-[10px] text-[#A5A4A3] mb-[20px]'>или нажмите на кнопку</p>
                                <button className='w-[104px] h-[32px] rounded-[4px] bg-[#D7D6D6] text-[10px]'>Выбрать фото</button>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-[16px] mb-[41px]'>
                            <div className='h-[96px] bg-gray rounded-[6px] flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <circle cx="12" cy="12" r="11" stroke="#D7D6D6" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.4848 12.2426H7.99955M12.2422 8V16.4853" stroke="#D7D6D6"
                                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='h-[96px] bg-gray rounded-[6px] flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <circle cx="12" cy="12" r="11" stroke="#D7D6D6" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15 9L9 15M9 9L15 15" stroke="#D7D6D6" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='h-[96px] bg-gray rounded-[6px]'></div>
                            <div className='h-[96px] bg-gray rounded-[6px]'></div>
                        </div>
                        <PreviewItem />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AddItemContainer;