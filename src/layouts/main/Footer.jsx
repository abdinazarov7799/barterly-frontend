import React from 'react';
import footerLogo from '../../assets/footer_logo.svg';
import instagram from '../../assets/icons/instagram.svg';
import telegram from '../../assets/icons/telegram.svg';
import facebook from '../../assets/icons/facebook.svg';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import Container from "../../components/Container.jsx";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="w-full bg-gray-light py-5">
            <Container>
                <div className="flex justify-between items-start font-black text-text-gray text-[10px]">
                    <img src={footerLogo} width={147} height={30} alt="footer logo"/>

                    <div className="flex space-x-16 w-1/2">
                        <ul className="space-y-2">
                            <li><Link to={'/'}>{t("О сервисе")}</Link></li>
                            <li><Link to={'/'}>{t("Как пользоваться?")}</Link></li>
                            <li><Link to={'/'}>{t("Безопасность")}</Link></li>
                            <li><Link to={'/'}>{t("Информация для СМИ")}</Link></li>
                            <li><Link to={'/'}>{t("Связаться с нами")}</Link></li>
                            <li><Link to={'/'}>{t("Контакты")}</Link></li>
                        </ul>
                        <ul className="space-y-2">
                            <li><Link to={'/'}>{t("Пользователям")}</Link></li>
                            <li><Link to={'/'}>{t("Партнёрам")}</Link></li>
                            <li><Link to={'/'}>{t("Бизнес - аккаунт")}</Link></li>
                            <li><Link to={'/'}>{t("Для бизнеса")}</Link></li>
                            <li><Link to={'/'}>{t("Вопрос - ответ")}</Link></li>
                            <li><Link to={'/'}>{t("Помощь")}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex space-x-4 mb-16">
                            <Link to={'/'}><img src={instagram} width={40} alt="instagram"/></Link>
                            <Link to={'/'}><img src={telegram} width={40} alt="telegram"/></Link>
                            <Link to={'/'}><img src={facebook} width={40} alt="facebook"/></Link>
                        </div>

                        <div>
                            {t("© Сервис по обмену Barterly — 2024")}
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
