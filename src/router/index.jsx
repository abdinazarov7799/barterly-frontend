import React, {Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import utc from 'dayjs/plugin/utc'
import dayjs from "dayjs";

import OverlayLoader from "../components/loader/OverlayLoader";
import Layout from "../layouts/main/Layout.jsx";
import NotFoundPage from "../components/pages/NotFoundPage.jsx";
import HomePage from "../modules/home/pages/HomePage.jsx";
import UserProfilePage from "../modules/user-profile/pages/UserProfilePage.jsx";
import ItemViewPage from "../modules/item/pages/ItemViewPage.jsx";
import MyProfilePage from "../modules/my-profile/pages/MyProfilePage.jsx";
import CatalogPage from "../modules/catalog/pages/CatalogPage.jsx";

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
                            path={"/user/:id"}
                            index
                            element={<UserProfilePage />}
                        />
                        <Route
                            path={"/profile"}
                            index
                            element={<MyProfilePage />}
                        />
                        <Route
                            path={"/:catalog"}
                            index
                            element={<CatalogPage />}
                        />
                        <Route
                            path={"/:category/:id"}
                            index
                            element={<ItemViewPage />}
                        />
                        <Route path={"*"} element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;