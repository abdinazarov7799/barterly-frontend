import React from 'react';
import ItemViewContainer from "../containers/ItemViewContainer.jsx";
import {useParams} from "react-router-dom";

const ItemViewPage = () => {
    const { category,id } = useParams();
    return <ItemViewContainer category={category} id={id} />
};

export default ItemViewPage;