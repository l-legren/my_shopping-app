// Third-party imports
import React from "react"

// Global imports

// Local imports
import { BarContainer, NavBarContent, Title, Link, LinksWrapper } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Navigation
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {?} param? - ?
 */
const Navigation = () => {

    return (
        <BarContainer>
            <NavBarContent>
                <Title>My Shopping App</Title>
                <LinksWrapper>
                    <Link>Cart</Link>
                    <Link>Shop</Link>
                </LinksWrapper>
            </NavBarContent>
        </BarContainer>
    )
}

export default Navigation