import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import locationIcon from '../../assets/icons/location.svg';
import searchIcon from '../../assets/icons/search.svg';
import profileIcon from '../../assets/icons/profile.svg';
import barterIcon from '../../assets/icons/barter.svg';
import favoriteIcon from '../../assets/icons/favorite.svg';
import menuIcon from '../../assets/icons/burger.svg';
import closeIcon from '../../assets/icons/close.svg';
import plusIcon from '../../assets/icons/plus.svg';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderCatalog from "./components/HeaderCatalog.jsx";
import Container from "../../components/Container.jsx";

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
                <div className="flex justify-between items-center py-2 font-black text-text-gray text-[12px] relative ">
                    <div className="flex items-center space-x-2">
                        <img src={locationIcon} width={16} height={20} alt="location icon"/>
                        <p className="underline">Ташкент</p>
                    </div>
                    <ul className="w-8/12 flex items-center justify-end space-x-10">
                        <li><Link to="/">{t("Бизнес - аккаунт")}</Link></li>
                        <li><Link to="/">{t("О сервисе")}</Link></li>
                        <li><Link to="/">{t("Как пользоваться?")}</Link></li>
                        <li><Link to="/">{t("Помощь")}</Link></li>
                    </ul>
                    <p>UZ</p>
                </div>
            </Container>
            <div className="w-full bg-white py-4 relative z-50">
                <Container>
                    <div className="flex justify-between items-center space-x-2">
                        <div className="flex items-center space-x-4">
                            <Link to='/'><img src={logo} alt="Logo"/></Link>
                            <button onClick={toggleCatalog}
                                    className="bg-gray p-3 rounded-md flex items-center font-extrabold text-[12px]">
                                <img
                                    src={catalogOpen ? closeIcon : menuIcon}
                                    alt="menu-icon"
                                    className="mr-2"
                                    width={catalogOpen ? 10 : 18}
                                    height={catalogOpen ? 10 : 12}
                                />
                                <span>Каталог</span>
                            </button>
                        </div>
                        <div className="relative flex-auto">
                            <button
                                onClick={toggleDropdown}
                                className="absolute inset-y-0 left-0 bg-gray p-3 rounded-l-md flex items-center font-extrabold text-[12px]">
                                <span>Везде</span>
                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                          d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                            {dropdownOpen && (
                                <div
                                    className="absolute left-0 mt-12 bg-white rounded-md shadow-lg z-50 p-8 w-full transition-all transform opacity-100 scale-100 font-bold text-[12px]">
                                    <ul className="grid grid-cols-2 gap-6">
                                        {
                                            items.map((item, index) => (
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
                                <img src={searchIcon} width={20} height={20} alt="search icon"/>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                className="flex items-center justify-between bg-gray p-3 font-extrabold text-[12px] rounded-md ml-5">
                                <img src={plusIcon} alt="plus"/>
                                <span className='ml-2'>Добавить бартер</span>
                            </button>
                            <div className='flex items-center space-x-3 font-extrabold text-[10px]'>
                                <Link to='/profile' className="flex flex-col items-center">
                                    <div className="bg-gray py-2 px-3 rounded-md">
                                        <img src={profileIcon} width={14} height={14} alt="profile icon"/>
                                    </div>
                                    <span className="mt-1">Профиль</span>
                                </Link>
                                <Link to='/' className="flex flex-col items-center">
                                    <div className="bg-gray py-2 px-3 rounded-md">
                                        <img src={barterIcon} width={14} height={14} alt="barter icon"/>
                                    </div>
                                    <span className="mt-1">Бартеры</span>
                                </Link>
                                <Link to='/' className="flex flex-col items-center">
                                    <div className="bg-gray py-2 px-3 rounded-md">
                                        <img src={favoriteIcon} width={14} height={14} alt="favorite icon"/>
                                    </div>
                                    <span className="mt-1">Избранное</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
}

export default Header;
