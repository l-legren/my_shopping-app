// Third-party imports
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Global imports

// Local imports
import { PageContainer } from "./styles";
import CheckoutList from "../components/CheckoutList/checkoutList";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function CartPage
 * @category Components
 * @param {?} param? - ?
 */
const CartPage = () => {

    const selectedProducts = useSelector(
        (state) => (state && state.products) || []
    );
    useEffect(() => {
        console.log("From Cart", selectedProducts)
    }, [selectedProducts]);

    return (<PageContainer>
        <CheckoutList selectedProducts={selectedProducts} />
    </PageContainer>)
};

export default CartPage;
