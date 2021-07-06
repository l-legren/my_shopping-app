// Third-party imports
import React from "react"

// Global imports

// Local imports
import {GridContainer} from './styles'
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

    return (
        <GridContainer>
            {mockedItems.map(item => 
                (<GridCard title={item.title} image={item.thumbnailUrl} />)
            )}
        </GridContainer>
    )
}

export default GridProducts