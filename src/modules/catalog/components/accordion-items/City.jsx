import React from 'react';
import AccordionItemContainer from "./AccordionItemContainer.jsx";
import FilterCheckbox from "../FilterCheckbox.jsx";
import {get} from "lodash";
import InputSearch from "../../../../components/InputSearch.jsx";

const City = () => {
    const items = [
        {
            id: 1,
            title: "Ташкент",
            count: "727",
            checked: true
        },
        {
            id: 2,
            title: "Наманган",
            count: "564",
            checked: false
        },
        {
            id: 3,
            title: "Самарканд",
            count: "478",
            checked: false
        },
        {
            id: 4,
            title: "Андижан",
            count: "391",
            checked: false
        },
        {
            id: 5,
            title: "Нукус",
            count: "260",
            checked: false
        },
        {
            id: 6,
            title: "Фергана",
            count: "278",
            checked: false
        },
        {
            id: 7,
            title: "Бухара",
            count: "224",
            checked: false
        },
        {
            id: 8,
            title: "Карши",
            count: "179",
            checked: false
        },
    ]
    return (
        <>
            <div>
                <InputSearch placeholder={'Введите название города'}/>
            </div>
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
        </>
    );
};

export default City;