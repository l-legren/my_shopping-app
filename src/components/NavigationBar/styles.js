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
    box-shadow: -1px 1px 8px #063760;
    z-index: 1;
    background-color: #f0f6f6;
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
    color: #42bfdd;
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
    color: #42bfdd;

    &:hover {
        background-color: #42bfdd;
        color: #f0f6f6;
    }
`;
