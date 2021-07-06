// Third-party imports
import React from "react";
import { CardHeader } from "@material-ui/core";

// Global imports

// Local imports
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
            <AddButton variant="contained" color="primary" onClick={addToBasket}>ADD</AddButton>
        </SingleCard>
    );
};

export default GridCard;
