const initalState = {
    isLoading: false,
    isError: false,
    products: [],
}

const productReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'deneme':
            return state;
        default:
            return state;
    }
};

export default productReducer;