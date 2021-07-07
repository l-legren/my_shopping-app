// Third-party imports
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Global imports

// Local imports
import { PageContainer } from "./styles";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function CartPage
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {?} param? - ?
 */
const CartPage = () => {

    const selectedProducts = useSelector(
        (state) => (state && state.products) || []
    );
    useEffect(() => {
        console.log("From Cart", selectedProducts)
    }, [selectedProducts]);

    return <PageContainer>This is the Cart Page</PageContainer>;
};

export default CartPage;
