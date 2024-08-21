import React from 'react';
import CatalogContainer from "../containers/CatalogContainer.jsx";
import {useParams} from "react-router-dom";

const CatalogPage = () => {
    const { catalog } = useParams()
    return <CatalogContainer catalog={catalog}/>
};

export default CatalogPage;