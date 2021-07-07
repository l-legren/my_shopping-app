// Third-party imports
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Local imports
import {
    SingleCard,
    MinusPlusButton,
    ButtonWrapper,
    Quantity,
    CardHeader,
} from "./styles";
import { newProduct, addUnit, removeUnit, removeProduct } from "../../actions";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function GridCard
 * @category Components
 * @param {title} string - Name of the product
 * @param {image} string - Image of the product
 * @param {discount} number - Discounted price of the product
 * @param {id} number - ID of the product
 * @param {price} number - Price of the product before discount
 * @param {sales} boolean - Gives information wether the product is on sale
 */
const GridCard = ({ title, image, id, discount, price, sales }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);

    const addToMenu = () => {
        if (quantity < 10) {
            let newQuantity = quantity + 1;
            setQuantity(newQuantity);
            if (newQuantity === 1) {
                dispatch(
                    newProduct({
                        id,
                        title,
                        image,
                        price,
                        discount,
                        sales,
                        quantity: 1,
                    })
                );
            } else {
                dispatch(addUnit(id));
            }
        } else {
            setQuantity(10);
        }
    };

    const removeFromMenu = () => {
        if (quantity > 0) {
            let newQuantity = quantity - 1;
            setQuantity(newQuantity);
            if (quantity === 1) {
                dispatch(removeProduct(id));
            } else {
                dispatch(removeUnit(id));
            }
        } else {
            setQuantity(0);
        }
    };

    return (
        <SingleCard styles={{ width: "max-content" }}>
            <CardHeader>{title}</CardHeader>
            <img src={image} alt={title} />
            <ButtonWrapper>
                <MinusPlusButton onClick={() => removeFromMenu()}>-</MinusPlusButton>
                <Quantity>{quantity}</Quantity>
                <MinusPlusButton onClick={() => addToMenu()}>+</MinusPlusButton>
            </ButtonWrapper>
        </SingleCard>
    );
};

export default GridCard;
