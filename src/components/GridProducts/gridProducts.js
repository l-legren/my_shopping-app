// Third-party imports
import React, { useState } from "react";
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
const GridProducts = ({ passingMenu }) => {
    
    // const dispatch = useDispatch();
    const [menu, setMenu] = useState([]);

    const addingToMenu = (order) => {
        let newOrder = [...menu, order];

        let reducedOrder = newOrder.reduce((acc, cur) => {
            acc[cur.dish] = cur.quantity;
            return acc;
        }, {});

        setMenu(newOrder);
        passingMenu(reducedOrder)
    };

    return (
        <GridContainer>
            {mockedItems.map((item) => (
                <GridCard
                    key={item.title}
                    title={item.title}
                    id={item.id}
                    image={item.thumbnailUrl}
                    addingToCart={addingToMenu}
                />
            ))}
        </GridContainer>
    );
};

export default GridProducts;
