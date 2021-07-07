// Third-party imports
import React from "react";
import styled from "styled-components";
// Global imports

// Local imports
import { PageContainer } from "./styles";

////////////////////////////////////////////////////////////////////////////////

const WelcomeContainer = styled.div`
    position: relative;
    top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: #f0f6f6;
    background-color: #42bfdd;
    border-radius: 50px;
    padding: 50px;
`;

/**
 * @function WelcomePage
 * @category Pages
 */
const WelcomePage = () => {
    return (
        <PageContainer>
            <WelcomeContainer>
                <div>Welcome to Sneakers Point</div>
            </WelcomeContainer>
        </PageContainer>
    );
};

export default WelcomePage;
