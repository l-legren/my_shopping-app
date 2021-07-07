// Third-party imports
import React from "react";
import styled from "styled-components";
// Global imports

// Local imports
import { PageContainer } from "./styles";

////////////////////////////////////////////////////////////////////////////////

const WelcomeContainer = styled.div`
    position: relative;
    top: 200px;
    height: 50vh;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: #2fda96;
    background-color: #e36588;
    border-radius: 50px;
    padding: 50px;
`;

/**
 * @function WelcomePage
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {?} param? - ?
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
