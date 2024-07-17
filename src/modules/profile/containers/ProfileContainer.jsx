import React from 'react';
import TopBar from "../../home/components/TopBar.jsx";
import UserProfile from "../components/UserProfile.jsx";
import UserBarters from "../components/UserBarters.jsx";

const ProfileContainer = () => {
    return (
        <div className="space-y-5">
            <section>
                <TopBar />
            </section>
            <section>
                <UserProfile />
            </section>
            <section>
                <UserBarters />
            </section>
        </div>
    );
};

export default ProfileContainer;