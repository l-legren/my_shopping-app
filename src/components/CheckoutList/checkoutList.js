// Third-party imports
import React, { useEffect } from "react";

// Global imports

// Local imports
import { CheckoutContainer } from "./styles";
import CheckoutElement from "../CheckoutElement/checkoutElement";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function CheckoutList
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {?} param? - ?
 */
const CheckoutList = ({ selectedProducts }) => {
    useEffect(() => {
        console.log("From checkout list", selectedProducts);
    }, [selectedProducts]);

    return (
        <CheckoutContainer>
            {selectedProducts.map((product) => (
                <CheckoutElement
                    key={product.title}
                    name={product.title}
                    imageUrl={product.image}
                    id={product.id}
                    quantity={product.quantity}
                    price={product.price}
                    discount={product.discount}
                    sales = {product.sales}
                />
            ))}
        </CheckoutContainer>
    );
};

export default CheckoutList;
