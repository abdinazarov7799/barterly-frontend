import React from 'react';
import Container from "../../../components/Container.jsx";
import TopBar from "../../home/components/TopBar.jsx";
import ItemInfo from "../components/ItemInfo.jsx";

const ItemViewContainer = ({category,id}) => {

    return (
        <>
            <Container>
                <TopBar />
            </Container>
            <Container>
                <ItemInfo category={category} id={id} />
            </Container>
        </>
    );
};

export default ItemViewContainer;