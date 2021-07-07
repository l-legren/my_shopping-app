// Third-party imports
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// Global imports

// Local imports
import { GridContainer } from "./styles";
import mockedItems from "./mockedItems.json";
import GridCard from "../GridCard/gridCard";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function GridProducts
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {?} param? - ?
 */
const GridProducts = () => {
    const selectedProducts = useSelector(
        (state) => (state && state.products) || []
    );

    useEffect(() => {
        console.log("From Grid", selectedProducts);
    }, [selectedProducts]);

    return (
        <GridContainer>
            {mockedItems.map((item) => (
                <GridCard
                    key={item.title}
                    title={item.title}
                    id={item.id}
                    image={item.thumbnailUrl}
                />
            ))}
        </GridContainer>
    );
};

export default GridProducts;
