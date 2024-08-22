import React from 'react';
import AccordionItemContainer from "./AccordionItemContainer.jsx";
import FilterCheckbox from "../FilterCheckbox.jsx";
import {get} from "lodash";

const HouseType = () => {
    const items = [
        {
            id: 1,
            title: "Кирпичный",
            count: "172",
            checked: true
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

export default HouseType;