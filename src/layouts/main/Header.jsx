import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderCatalog from "./components/HeaderCatalog.jsx";
import Container from "../../components/Container.jsx";
import {
    AddPlusFile,
    ArrowDown,
    Barters,
    Catalog,
    Delete, Favorites,
    Location, Messages,
    Search,
    User
} from "../../assets/barterly-icons/index.js";

const Header = () => {
    const { t } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [catalogOpen, setCatalogOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const toggleCatalog = () => {
        setCatalogOpen(!catalogOpen);
    };

    const items = [
        {
            title: "Транспорт",
            value: "Транспорт"
        },
        {
            title: "Автотовары и запчасти",
            value: "Автотовары и запчасти"
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
            title: "Одежда и обувь",
            value: "Одежда и обувь"
        },
        {
            title: "Для ремонта",
            value: "Для ремонта"
        },
        {
            title: "Детские товары",
            value: "Детские товары"
        },
        {
            title: "Готовый бизнес",
            value: "Готовый бизнес"
        },
        {
            title: "Оборудование",
            value: "Оборудование"
        },
        {
            title: "Игрушки",
            value: "Игрушки"
        },
        {
            title: "Красота и здоровье",
            value: "Красота и здоровье"
        },
        {
            title: "Аксессуары",
            value: "Аксессуары"
        },
        {
            title: "Мебель",
            value: "Мебель"
        },
        {
            title: "Оборудование",
            value: "Оборудование"
        },
    ]

    return (
        <header className="w-full bg-gray-light relative">
            <HeaderCatalog isOpen={catalogOpen} toggleDropdown={toggleCatalog} />
            <div className={`fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity ${dropdownOpen ? 'opacity-70' : 'opacity-0 pointer-events-none'}`} onClick={toggleDropdown}></div>
            <Container>
                <div className="flex justify-between items-center py-2 font-black text-text-gray text-[12px] relative">
                    <div className="flex items-center">
                        <Location width={16} height={20} color={"#A5A4A3"}/>
                        <p className="underline ml-[16px] mr-[11px]">Выберите город или область</p>
                        <ArrowDown width={8} height={5} color={"#A5A4A3"}/>
                    </div>
                    <ul className="w-8/12 flex items-center justify-end space-x-10">
                        <li><Link to="/">{t("Бизнес - аккаунт")}</Link></li>
                        <li><Link to="/about-us">{t("О сервисе")}</Link></li>
                        <li><Link to="/">{t("Как пользоваться?")}</Link></li>
                        <li><Link to="/">{t("Помощь")}</Link></li>
                    </ul>
                    <div className="flex items-center space-x-[9px]">
                        <p>UZB</p>
                        <ArrowDown width={8} height={5} color={"#A5A4A3"}/>
                    </div>
                </div>
            </Container>
            <div className="w-full bg-white py-4 relative z-50">
                <Container>
                    <div className="flex justify-between items-center space-x-2">
                        <div className="flex items-center space-x-4">
                            <Link to='/'><img src={logo} alt="Logo"/></Link>
                            <button onClick={toggleCatalog}
                                    className="bg-gray p-3 rounded-md flex items-center font-extrabold text-[12px]">
                                {
                                    catalogOpen ? <Delete width={16} height={16}/> : <Catalog width={16} height={14}/>
                                }
                                <span className='ml-[12px]'>Каталог</span>
                            </button>
                            <button className="bg-gray p-3 rounded-md flex items-center font-extrabold text-[12px]">
                                <AddPlusFile width={10.5} height={14} className="mr-2" />
                                <span>Добавить айтем</span>
                            </button>
                        </div>
                        <div className="relative flex-auto">
                            <button
                                onClick={toggleDropdown}
                                className="absolute inset-y-0 left-0 bg-gray p-3 rounded-l-md flex items-center font-extrabold text-[12px]">
                                <span className='mr-[18px]'>Везде</span>
                                <ArrowDown viewBox="0 0 8 5" width={8} height={5} color={"#A5A4A3"}/>
                            </button>
                            {dropdownOpen && (
                                <div
                                    className="absolute left-0 mt-12 bg-white rounded-md shadow-lg z-50 p-8 w-full transition-all transform opacity-100 scale-100 font-bold text-[12px]">
                                    <ul className="grid grid-cols-2 gap-6">
                                        {
                                            items?.map((item, index) => (
                                                <li key={index+1}>
                                                    <button>{item.title}</button>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )}
                            <input
                                type="text"
                                placeholder="Искать среди более 20000 предложений"
                                className="w-full block pl-24 pr-12 p-3 font-bold text-[12px] rounded-md bg-gray-light focus:outline-none"
                            />
                            <div className="absolute inset-y-0 right-3 flex items-center">
                                <Search width={20} height={20}/>
                            </div>
                        </div>
                        <div className="flex items-center space-x-[8px]">
                            <Link to='/profile'>
                                <div className="bg-gray p-[13px] rounded-md">
                                    <Messages width={14} height={14}/>
                                </div>
                            </Link>
                            <Link to='/'>
                                <div className="bg-gray p-[13px] rounded-md">
                                    <Barters width={14} height={14}/>
                                </div>
                            </Link>
                            <Link to='/'>
                                <div className="bg-gray p-[13px] rounded-md">
                                    <Favorites width={14} height={14}/>
                                </div>
                            </Link>
                            <div className={'flex items-center'}>
                                <div className={'bg-gray p-[9px] rounded-full'}>
                                    <User width="14" height="15" viewBox="0 0 14 15" fill="none"/>
                                </div>
                                <p className='text-[10px] font-black ml-[8px]'>Войти</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
}

export default Header;
