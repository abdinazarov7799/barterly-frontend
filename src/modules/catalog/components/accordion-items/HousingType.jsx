import React from 'react';
import AccordionItemContainer from "./AccordionItemContainer.jsx";
import FilterCheckbox from "../FilterCheckbox.jsx";
import {get} from "lodash";

const HousingType = () => {
    const items = [
        {
            id: 1,
            title: "Квартира",
            count: "172",
            checked: true
        },
        {
            id: 2,
            title: "Дом, дача, коттедж",
            count: "172",
            checked: false
        },
        {
            id: 3,
            title: "Земельный участок",
            count: "86",
            checked: false
        },
        {
            id: 4,
            title: "Гараж или паркоместо",
            count: "46",
            checked: false
        },
        {
            id: 5,
            title: "Коммерч.  недвижимость",
            count: "127",
            checked: false
        },
    ]
    return (
        <AccordionItemContainer>
            {
                items?.map(item => {
                    return <FilterCheckbox
                        title={get(item,'title')}
                        count={get(item,'count')}
                        checked={get(item,'checked')}
                        key={get(item,'id')}
                    />
                })
            }
        </AccordionItemContainer>
    );
};

export default HousingType;