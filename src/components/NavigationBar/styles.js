// Third-party imports
import styled from "styled-components";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const BarContainer = styled.div`
    width: 100%;
    height: 55px;
    position: sticky;
    top: 0px;
    display: flex;
    justify-content: center;
    box-shadow: -1px 1px 8px black;
    z-index: 1;
    background-color: #E36588;
`;

export const NavBarContent = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
`;

export const Title = styled(Link)`
    margin-left: 20px;
    font-size: 25px;
    cursor: pointer;
    text-decoration: none;
    color: #2fda96;
`;

export const LinksWrapper = styled(Box)`
    display: flex;
    margin-right: 20px;
`;

export const PageLink = styled(Link)`
    font-size: 20px;
    padding: 10px 15px 10px 15px;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
    color: #2fda96;

    &:hover {
        background-color: #2fda96;
        color: white;
    }
`;
