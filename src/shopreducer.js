export const shopReducer = (initialState = [], action) => {
    switch (action.type) {
        case 'Add Shop':
            return [...initialState, action.payload];
        case 'Delete Shop':
            return initialState.filter(shop => shop.id !== action.payload);
        case 'Complete Shop':
            return initialState.map(shop => (shop.id === action.payload)
                ? { ...shop, done: !shop.done }
                : shop
            );
        case 'Update Shop':
            return initialState.map(shop => (shop.id === action.payload.id)
                ? { ...shop, description: action.payload.description }
                : shop
            );
        default:
            return initialState;
    }
};
