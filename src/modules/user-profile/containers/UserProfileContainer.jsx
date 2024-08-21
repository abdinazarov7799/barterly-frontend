import React from 'react';
import TopBar from "../../home/components/TopBar.jsx";
import UserProfileBarters from "../components/UserProfileBarters.jsx";
import Container from "../../../components/Container.jsx";
import UserProfile from "../../../components/UserProfile.jsx";

const UserProfileContainer = ({id}) => {
    return (
        <div className="space-y-5">
            <Container>
                <TopBar />
            </Container>
            <Container>
                <div className='flex justify-between items-center border-b-2 border-gray pb-3'>
                    <p className='font-bold text-[16px]'>Профиль пользователя Dilmurod1227</p>
                    <div className='flex items-center space-x-2 font-black text-text-gray text-[10px]'>
                        <span>Главная</span>
                        <span>—</span>
                        <span>Все категории</span>
                        <span>—</span>
                        <span>Недвижимость</span>
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-2 mr-[24px]'>
                        <UserProfile />
                    </div>
                    <div className='col-span-10'>
                        <UserProfileBarters/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default UserProfileContainer;