const initialState = {
    products: []
}

export default function reducer(state = initialState, action) {
    
    if (action.type === "ADD_ORDER") {
        state = {
            ...state,
            products: state.products.map((product) => {
                if (product.id === action.id) {
                    return {...product, quantity: product.quantity + 1}
                } else {
                    return {...product, quantity: 1}
                }
            }),
        };
    }

    console.log("Redux state", state);
    return state;
}
