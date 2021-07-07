// Third-party imports
import React from "react";

// Global imports

// Local imports
import {
    TotalContainer,
    WithoutDiscount,
    Discount,
    FinalTotal,
} from "./styles";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function TotalToPay
 * @category Components
 * @param {?} param? - ?
 */
const TotalToPay = ({ selectedProducts }) => {
    let totalWithoutDiscount = selectedProducts.reduce((acc, cur) => {
        acc = acc + cur.price;
        return acc;
    }, 0);

    let sumOfDiscounts = selectedProducts.reduce((acc, cur) => {
        acc = acc + (cur.price - cur.discount)
        return acc
    }, 0)

    let totalSum = totalWithoutDiscount - sumOfDiscounts

    return (
        <TotalContainer>
            <WithoutDiscount>{`${totalWithoutDiscount} €`}</WithoutDiscount>
            <Discount>{`${sumOfDiscounts} €`}</Discount>
            <FinalTotal>{`${totalSum} €`}</FinalTotal>
        </TotalContainer>
    );
};

export default TotalToPay;
