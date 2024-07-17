import React, {Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import utc from 'dayjs/plugin/utc'
import dayjs from "dayjs";

import OverlayLoader from "../components/loader/OverlayLoader";
import Layout from "../layouts/main/Layout.jsx";
import NotFoundPage from "../components/pages/NotFoundPage.jsx";
import HomePage from "../modules/home/pages/HomePage.jsx";
import ProfilePage from "../modules/profile/pages/ProfilePage.jsx";

const Router = () => {
    dayjs.extend(utc)
    return (
        <BrowserRouter>
            <Suspense fallback={<OverlayLoader />}>
                <Routes>
                    <Route path={"/"} element={<Layout />}>
                        <Route
                            path={"/"}
                            index
                            element={<HomePage />}
                        />
                        <Route
                            path={"/profile"}
                            index
                            element={<ProfilePage />}
                        />
                        <Route path={"*"} element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;
