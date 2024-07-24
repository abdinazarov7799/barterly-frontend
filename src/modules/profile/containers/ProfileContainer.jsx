import React from 'react';
import TopBar from "../../home/components/TopBar.jsx";
import UserProfile from "../components/UserProfile.jsx";
import UserBarters from "../components/UserBarters.jsx";
import Container from "../../../components/Container.jsx";

const ProfileContainer = () => {
    return (
        <div className="space-y-5">
            <Container>
                <TopBar />
            </Container>
            <Container>
                <UserProfile />
            </Container>
            <Container>
                <UserBarters />
            </Container>
        </div>
    );
};

export default ProfileContainer;