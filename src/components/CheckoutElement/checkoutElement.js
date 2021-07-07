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
    ArticleName,
    PriceWrapper,
    PriceDiscounted,
} from "./styles";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function CheckoutElement
 * @category Components
 * @param {?} param? - ?
 */
const CheckoutElement = ({
    quantity,
    price,
    imageUrl,
    discount,
    name,
    isOnSale,
}) => {
    return (
        <ItemContainer>
            <ItemImage src={imageUrl} alt={name} />
            <InfoContainer>
                <ArticleName>{name}</ArticleName>
                <Quantity>Quantity: {`${quantity} units`}</Quantity>
                <PriceWrapper>
                    {isOnSale ? (
                        <strike>
                            <Price>{`Price: ${price} €`}</Price>
                        </strike>
                    ) : (
                        <Price>{`Price: ${price} €`}</Price>
                    )}
                    {isOnSale && (
                        <PriceDiscounted>
                            {`Discount Price: ${discount} €`}
                        </PriceDiscounted>
                    )}
                </PriceWrapper>
            </InfoContainer>
        </ItemContainer>
    );
};

export default CheckoutElement;
