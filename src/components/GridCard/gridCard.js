// Third-party imports
import React, { useState } from "react";
import { CardHeader } from "@material-ui/core";

// Global imports

// Local imports
import { SingleCard, MinusPlusButton, ButtonWrapper, Quantity } from "./styles";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function GridCard
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {title} string - Name of the dish
 * @param {image} string - Image of the dish
 * @param {inBasket} boolean - Indicates if the dish is already added to the menu
 */
const GridCard = ({ title, image, addingToCart }) => {
    const [menu, setMenu] = useState(0);

    const addToMenu = () => {
        if (menu < 10) {
            let newQuantity = menu + 1;
            setMenu(newQuantity);
            addingToCart({
                dish: title,
                quantity: newQuantity,
            });
        } else {
            setMenu(10)
        }
    };

    const removeFromMenu = () => {
        if (menu > 0) {
            let newQuantity = menu - 1;
            setMenu(newQuantity);
            addingToCart({
                dish: title,
                quantity: newQuantity,
            });
        } else {
            setMenu(0)
        }
    };

    return (
        <SingleCard styles={{ width: "max-content" }}>
            <CardHeader title={title} />
            <img src={image} alt={title} />
            <ButtonWrapper>
                <MinusPlusButton onClick={() => removeFromMenu()}>
                    -
                </MinusPlusButton>
                <Quantity>{menu}</Quantity>
                <MinusPlusButton onClick={() => addToMenu()}>+</MinusPlusButton>
            </ButtonWrapper>
        </SingleCard>
    );
};

export default GridCard;
