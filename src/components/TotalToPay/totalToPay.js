// Third-party imports
import React from "react";

// Local imports
import {
    TotalContainer,
    WithWithout,
    FinalTotal,
    BillWrapper,
} from "./styles";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function TotalToPay
 * @category Components
 * @param {selectedProducts} Array - Products added to the cart by the user
 */
const TotalToPay = ({ selectedProducts }) => {
    let totalWithoutDiscount = selectedProducts
        .reduce((acc, cur) => {
            acc = acc + cur.price;
            return acc;
        }, 0)
        .toFixed(2);

    let sumOfDiscounts = selectedProducts
        .reduce((acc, cur) => {
            acc = acc + (cur.price - cur.discount);
            return acc;
        }, 0)
        .toFixed(2);

    let totalSum = (totalWithoutDiscount - sumOfDiscounts).toFixed(2);

    return (
        <TotalContainer>
            <BillWrapper>
                <WithWithout>Total before discount</WithWithout>
                <WithWithout>{`${totalWithoutDiscount} €`}</WithWithout>
            </BillWrapper>
            <BillWrapper>
                <WithWithout>Discount</WithWithout>
                <WithWithout>{`${sumOfDiscounts} €`}</WithWithout>
            </BillWrapper>
            <BillWrapper>
                <FinalTotal>Total</FinalTotal>
                <FinalTotal>{`${totalSum} €`}</FinalTotal>
            </BillWrapper>
        </TotalContainer>
    );
};

export default TotalToPay;
