// Third-party imports
import React from "react";

// Global imports

// Local imports
import { PageContainer } from "./styles";
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

    const passingToMenu = (data) => {
        console.log(Object.entries(data))

    }

    return (
        <PageContainer>
            <h1>Hey</h1>
            <GridProducts passingMenu={passingToMenu} />
        </PageContainer>
    );
};

export default ShoppingPage;
