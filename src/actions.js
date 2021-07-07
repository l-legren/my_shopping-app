export function newProduct(userOrder) {
    return {
        type: "NEW_PRODUCT",
        userOrder,
    };
}

export function removeProduct(id) {
    return {
        type: "REMOVE_PRODUCT",
        id,
    };
}

export function addUnit(id) {
    return {
        type: "ADD_UNIT",
        id,
    };
}

export function removeUnit(id) {
    return {
        type: "REMOVE_UNIT",
        id,
    };
}
