import React from 'react';
import AccordionItemContainer from "./AccordionItemContainer.jsx";
import FilterCheckbox from "../FilterCheckbox.jsx";
import {get} from "lodash";

const Filter = () => {
    const items = [
        {
            id: 1,
            title: "Новостройки",
            count: "327",
            checked: true
        },
        {
            id: 2,
            title: "Вторичка",
            count: "400",
            checked: false
        },
    ]
    return (
        <div>
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
        </div>
    );
};

export default Filter;