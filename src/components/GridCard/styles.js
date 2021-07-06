// Third-party imports
import styled from "styled-components";

// Global imports
import { Button } from "@material-ui/core";

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function ComponentName
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {?} param? - ?
 */
export const SingleCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

export const ButtonWrapper = styled.div`
    width: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Quantity = styled.p`
    font-size: 20px;

`;

export const MinusPlusButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 10px 0px 10px 0px;
    color: ${({ theme }) => theme.palette.primary.main};
    background-color: white;
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;
    font-size: 20px;

    &:hover {
        background-color: ${({ theme }) => theme.palette.primary.main};
        color: white;
    }
`;
