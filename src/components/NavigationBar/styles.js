// Third-party imports
import styled from "styled-components"

// Global imports

// Local imports
import { Box, Link } from "@material-ui/core";

////////////////////////////////////////////////////////////////////////////////

export const BarContainer = styled(Box)`
    height: 55px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
    box-shadow: 0px 1px 1px black;
`;

export const NavBarContent = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    background-color: gray;
`

export const Title = styled(Link)`
    font-size: 25px;
    cursor: pointer;
`

export const LinksWrapper = styled(Box)`
    display: flex;
`

export const PageLink = styled(Link)`
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
`