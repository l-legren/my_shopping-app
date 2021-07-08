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
 * @param {name} string - Name of the product
 * @param {imageUrl} string - Url of the Image of the product
 * @param {quantity} number - Quantity of units added to the cart
 * @param {discount} number - Discounted price of the product
 * @param {price} number - Price of the product before discount
 * @param {isOnSale} boolean - Gives information wether the product is on sale
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
