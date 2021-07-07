// Third-party imports
import styled from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function ComponentName
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {?} param? - ?
 */
export const GridContainer = styled.div`
    width: 100%;
    max-width: 1240px;
    display: grid;
    column-gap: 24px;
    row-gap: 12px;
    grid-template-columns: repeat(3, 1fr);
    overflow-x: hidden;
    margin: auto;
    margin-bottom: 70px;

    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
