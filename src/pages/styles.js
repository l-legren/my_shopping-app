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

    @media (max-width: 960px) {
        max-width: 900px;
    }

    @media (max-width: 600px) {
        max-width: 580px;
    }
`;