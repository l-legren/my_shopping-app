// Third-party imports
import React, { useState } from "react";
import { CardHeader, Button } from "@material-ui/core";

// Global imports

// Local imports
import mockedItems from "./mockedItems.json";
import {
    SingleCard,
    AddButton,
} from "./styles";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function GridCard
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {?} param? - ?
 */
const GridCard = ({ title, image }) => {

    const addToBasket = () => {
        console.log("added")
    }

    return (
        <SingleCard styles={{ width: "max-content" }}>
            <CardHeader title={title} />
            <img src={image} alt={title} />
            <AddButton variant="contained" color="primary" onClick={addToBasket}>Add to basket</AddButton>
        </SingleCard>
    );
};

export default GridCard;
