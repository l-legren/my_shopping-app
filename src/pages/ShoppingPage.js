// Third-party imports
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Global imports

// Local imports
import { PageContainer, HeadlineContainer, HeadlineShopping } from "./styles";
import GridProducts from "../components/GridProducts/gridProducts";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function ShoppingPage
 * @category Pages
 * @subcategory ?
 * @description ?
 * @param {?} param? - ?
 */

const ShoppingPage = () => {
    const selectedProducts = useSelector(
        (state) => (state && state.products) || []
    );
    useEffect(() => {
        console.log(selectedProducts);
    }, [selectedProducts]);

    return (
        <PageContainer>
            <HeadlineContainer>
                <HeadlineShopping>Take what you want!</HeadlineShopping>
            </HeadlineContainer>
            <GridProducts />
        </PageContainer>
    );
};

export default ShoppingPage;
