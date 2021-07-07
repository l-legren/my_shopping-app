// Third-party imports
import React, { useState } from "react";
import { CardHeader } from "@material-ui/core";
import { useDispatch } from "react-redux";

// Global imports

// Local imports
import {
    SingleCard,
    MinusPlusButton,
    ButtonWrapper,
    Quantity,
} from "./styles";
import { getOrder } from "../../actions";

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
const GridCard = ({ title, image, id }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);

    const addToMenu = () => {
        if (quantity < 10) {
            let newQuantity = quantity + 1;
            setQuantity(newQuantity);
            dispatch(
                getOrder({
                    dish: title,
                    quantity: newQuantity,
                    id
                })
            );
        } else {
            setQuantity(10);
        }
    };

    const removeFromMenu = () => {
        if (quantity > 0) {
            let newQuantity = quantity - 1;
            setQuantity(newQuantity);
            dispatch(
                getOrder({
                    dish: title,
                    quantity: newQuantity,
                    id
                })
            );
        } else {
            setQuantity(0);
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
                <Quantity>{quantity}</Quantity>
                <MinusPlusButton onClick={() => addToMenu()}>+</MinusPlusButton>
            </ButtonWrapper>
        </SingleCard>
    );
};

export default GridCard;
