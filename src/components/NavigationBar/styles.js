// Third-party imports
import styled from "styled-components";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
// import { withTheme } from "@material-ui/styles";

// Global imports

// Local imports


////////////////////////////////////////////////////////////////////////////////

export const BarContainer = styled(Box)`
    height: 55px;
    display: flex;
    justify-content: center;
    box-shadow: -1px 1px 8px black;
    background-color: ${({theme}) => theme.palette.common.white};
`;

export const NavBarContent = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
`;

export const Title = styled(Link)`
    font-size: 25px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    color: ${({ theme }) => theme.palette.primary.main};
`;

export const LinksWrapper = styled(Box)`
    display: flex;
`;

export const PageLink = styled(Link)`
    font-size: 20px;
    padding: 10px 15px 10px 15px;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.palette.primary.main};

    &:hover {
        background-color: ${({ theme }) => theme.palette.primary.main};
        color: ${({ theme }) => theme.palette.common.white};
    }
`;
