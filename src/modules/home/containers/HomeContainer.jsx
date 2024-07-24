import React from 'react';
import TopBar from "../components/TopBar.jsx";
import Carousel from "../../../components/Carousel.jsx";
import Categories from "../components/Categories.jsx";
import PremiumItems from "../components/PremiumItems.jsx";
import RecommendedItems from "../components/RecommendedItems.jsx";
import Container from "../../../components/Container.jsx";

const HomeContainer = () => {

    return (
        <div className="space-y-5">
            <Container>
                <TopBar />
            </Container>
            <Container>
                <Carousel />
            </Container>
            <Container>
                <Categories />
            </Container>
            <Container>
                <PremiumItems />
            </Container>
            <Container>
                <RecommendedItems />
            </Container>
        </div>
    )
};

export default HomeContainer;