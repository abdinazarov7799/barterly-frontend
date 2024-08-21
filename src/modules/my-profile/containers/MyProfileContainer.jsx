import React from 'react';
import TopBar from "../../home/components/TopBar.jsx";
import MyBarters from "../components/MyBarters.jsx";
import Container from "../../../components/Container.jsx";
import UserProfile from "../../../components/UserProfile.jsx";

const MyProfileContainer = () => {
    return (
        <div className="space-y-5">
            <Container>
                <TopBar />
            </Container>
            <Container>
                <div className='flex justify-between items-center border-b-2 border-gray pb-3'>
                    <p className='font-bold text-[16px]'>Личный профиль</p>
                    <div className='flex items-center space-x-2 font-black text-text-gray text-[10px]'>
                        <span>Главная</span>
                        <span>—</span>
                        <span>Личный профиль</span>
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-2 mr-[24px]'>
                        <UserProfile />
                    </div>
                    <div className='col-span-10'>
                        <MyBarters/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MyProfileContainer;