// Third-party imports
import React from "react";

// Global imports

// Local imports
import {
    ItemContainer,
    Price,
    Quantity,
    ItemImage,
    InfoContainer,
    PriceSection,
    QuantitySection,
} from "./styles";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function CheckoutElement
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {?} param? - ?
 */
const CheckoutElement = () => {
    return (
        <ItemContainer>
            <ItemImage src="https://via.placeholder.com/150/92c952" />
            <InfoContainer>
                <QuantitySection>Quantity</QuantitySection>
                <Quantity>4 units</Quantity>
                <PriceSection>Price</PriceSection>
                <Price>125$</Price>
            </InfoContainer>
        </ItemContainer>
    );
};

export default CheckoutElement;
