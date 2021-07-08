// Third-party imports
import styled from "styled-components";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1280px;
    margin: 0 auto;
    height: 100%;

    @media (max-width: 960px) {
        max-width: 900px;
    }

    @media (max-width: 600px) {
        max-width: 580px;
    }
`;

export const HeadlineContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dotted #ff66b3;
    margin: 30px 0 30px 0;
`;

export const HeadlineShopping = styled.h1`
    font-size: 30px;
    color: #ff66b3;
    cursor: default;
`;