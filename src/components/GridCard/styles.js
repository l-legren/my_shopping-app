// Third-party imports
import styled from "styled-components";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const SingleCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f6f6;
    border: 1px solid #42bfdd;
    border-radius: 2px;
`;

export const CardHeader = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #42bfdd;
`;

export const Image = styled.img`
    width: 200px;
    height: 200px;
`;

export const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 60px;
    margin-top: 10px;
`;

export const Price = styled.p`
    margin: 5px;
    color: #42bfdd;
`;

export const ButtonWrapper = styled.div`
    width: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Quantity = styled.p`
    font-size: 20px;
    color: #42bfdd;
`;

export const MinusPlusButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 10px 0px 10px 0px;
    color: #42bfdd;
    background-color: white;
    border: 2px solid #42bfdd;
    cursor: pointer;
    font-size: 20px;

    &:hover {
        background-color: #42bfdd;
        color: white;
    }
`;
