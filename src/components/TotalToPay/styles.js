// Third-party imports
import styled from "styled-components";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const TotalContainer = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    width: 460px;
    margin: 50px 0 0 10px;
    border: 3px solid #42bfdd;
    border-radius: 2px;
    background-color: #f0f6f6;

    @media (max-width: 600px) {
        width: auto;
    }
`;

export const BillWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const WithWithout = styled.p`
    margin: 20px;
    text-decoration: underline;
`;

export const FinalTotal = styled.p`
    margin: 20px;
    font-size: 25px;
`;
