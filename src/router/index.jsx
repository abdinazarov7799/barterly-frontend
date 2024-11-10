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
import AddItemPage from "../modules/add-item/pages/AddItemPage.jsx";
import AboutUsPage from "../modules/about-us/pages/AboutUsPage.jsx";

const Router = () => {
    dayjs.extend(utc)
    return (
        <BrowserRouter>
            <Suspense fallback={<OverlayLoader />}>
                <Routes>
                    <Route path={"/"} element={<Layout />}>
                        <Route path={"/"} index element={<HomePage />}/>
                        <Route path={"/user/:id"} element={<UserProfilePage />}/>
                        <Route path={"/profile"} element={<MyProfilePage />}/>
                        <Route path={"/:catalog"} element={<CatalogPage />}/>
                        <Route path={"/:category/:id"} element={<ItemViewPage />}/>
                        <Route path={"/add-item"} element={<AddItemPage />}/>
                        <Route path={"/about-us"} element={<AboutUsPage />}/>
                        <Route path={"*"} element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;