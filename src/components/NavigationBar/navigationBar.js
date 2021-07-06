// Third-party imports
import React from "react";
// Global imports

// Local imports
import {
    BarContainer,
    NavBarContent,
    Title,
    PageLink,
    LinksWrapper,
} from "./styles";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Navigation
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {?} param? - ?
 */
const Navigation = () => {
    const links = [
        { url: "/cart", routeName: "cart", text: "Cart" },
        { url: "/shopping", routeName: "shopping", text: "Shop" },
    ];

    return (
        <BarContainer>
            <NavBarContent>
                <Title to="/">My Shopping App</Title>
                <LinksWrapper>
                    {links.map((link) => (
                        <PageLink key={link.routeName} to={link.url}>
                            {link.text}
                        </PageLink>
                    ))}
                </LinksWrapper>
            </NavBarContent>
        </BarContainer>
    );
};

export default Navigation;
