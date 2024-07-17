import React from 'react';
import TopBar from "../components/TopBar.jsx";
import Carousel from "../../../components/Carousel.jsx";
import Categories from "../components/Categories.jsx";
import PremiumItems from "../components/PremiumItems.jsx";
import RecommendedItems from "../components/RecommendedItems.jsx";

const HomeContainer = () => {

    return (
        <div className="space-y-5">
            <section>
                <TopBar />
            </section>
            <section>
                <Carousel />
            </section>
            <section>
                <Categories />
            </section>
            <section>
                <PremiumItems />
            </section>
            <section>
                <RecommendedItems />
            </section>
        </div>
    )
};

export default HomeContainer;