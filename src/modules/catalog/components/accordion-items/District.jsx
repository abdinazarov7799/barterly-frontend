import React from 'react';
import FilterCheckbox from "../FilterCheckbox.jsx";
import AccordionItemContainer from "./AccordionItemContainer.jsx";
import {get} from "lodash";

const District = () => {
    const items = [
        {
            id: 1,
            title: "Алмазарский",
            count: "727",
            checked: false
        },
        {
            id: 2,
            title: "Бектемирский",
            count: "564",
            checked: false
        },
        {
            id: 3,
            title: "Мирабадский",
            count: "478",
            checked: false
        },
        {
            id: 4,
            title: "Мирзо-Улугбекский",
            count: "391",
            checked: true
        },
        {
            id: 5,
            title: "Сергелийский",
            count: "260",
            checked: false
        },
        {
            id: 6,
            title: "Шайхонтохурский",
            count: "278",
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

export default District;