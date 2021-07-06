// Third-party imports
import React from "react"

// Global imports

// Local imports
import { BarContainer, NavBarContent, Title, PageLink, LinksWrapper } from "./styles"

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
                    <PageLink>Cart</PageLink>
                    <PageLink>Shop</PageLink>
                </LinksWrapper>
            </NavBarContent>
        </BarContainer>
    );
}

export default Navigation