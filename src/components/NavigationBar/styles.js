// Third-party imports
import styled from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const BarContainer = styled.div`
    height: 55px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
    box-shadow: 0px 1px 1px black;
`;

export const NavBarContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    background-color: gray;
`

export const Title = styled.a`
    font-size: 25px;
    cursor: pointer;
`

export const LinksWrapper = styled.div`
    display: flex;
`

export const Link = styled.a`
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
`