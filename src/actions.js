export function getOrder(userOrder) {

    console.log("This is the order", userOrder)
    return {
        type: "ADD_ORDER",
        userOrder
    };
}