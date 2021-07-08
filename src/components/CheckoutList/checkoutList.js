// Third-party imports
import React, { useEffect } from "react";

// Local imports
import { CheckoutContainer, NoProducts } from "./styles";
import CheckoutElement from "../CheckoutElement/checkoutElement";
import TotalToPay from "../TotalToPay/totalToPay";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function CheckoutList
 * @category Components
 * @param {selectedProducts} Array - Products added to the cart by the user
 */
const CheckoutList = ({ selectedProducts }) => {
    useEffect(() => {
        console.log("From checkout list", selectedProducts);
    }, [selectedProducts]);

    return (
        <CheckoutContainer>
            {selectedProducts.length > 0 ? selectedProducts.map((product) => (
                <CheckoutElement
                    key={product.title}
                    name={product.title}
                    imageUrl={product.image}
                    id={product.id}
                    quantity={product.quantity}
                    price={product.price.toFixed(2)}
                    discount={product.discount.toFixed(2)}
                    isOnSale = {product.sales}
                />
            )) : 
                <NoProducts>
                No products added to the cart
                </NoProducts>}
            <TotalToPay selectedProducts={selectedProducts} />
        </CheckoutContainer>
    );
};

export default CheckoutList;
