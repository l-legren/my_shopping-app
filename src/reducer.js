const initialState = {
    products: [],
};

export default function reducer(state = initialState, action) {
    if (action.type === "NEW_PRODUCT") {
        state = {
            ...state,
            products: [...state.products, action.userOrder],
        };
    }

    if (action.type === "ADD_UNIT") {
        state = {
            ...state,
            products: state.products.map((prod) =>
                prod.id === action.id
                    ? { ...prod, quantity: prod.quantity + 1 }
                    : prod
            ),
        };
    }

    if (action.type === "REMOVE_UNIT") {
        state = {
            ...state,
            products: state.products.map((prod) =>
                prod.id === action.id
                    ? { ...prod, quantity: prod.quantity - 1 }
                    : prod
            ),
        };
    }

    if (action.type === "REMOVE_PRODUCT") {
        state = {
            ...state,
            products: state.products.filter((prod) => prod.id !== action.id),
        };
    }

    console.log("Redux state", state);
    return state;
}
