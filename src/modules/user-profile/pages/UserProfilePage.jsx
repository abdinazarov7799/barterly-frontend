import React from 'react';
import UserProfileContainer from "../containers/UserProfileContainer.jsx";
import {useParams} from "react-router-dom";

const UserProfilePage = () => {
    const { id } = useParams();
    return <UserProfileContainer id={id} />
};

export default UserProfilePage;