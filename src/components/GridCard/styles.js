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
    width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

export const AddButton = styled(Button)`
    border-radius: 10px;
    margin: 10px 0px 10px 0px;
    padding: 10px;
`;
