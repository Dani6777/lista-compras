export const shopReducer =(initialState, action)=>{

    switch (action.type) {
        case 'Add Shop':
            return [...initialState, action.payload];      
            case 'Delete Shop':
                return initialState.filter(shop => shop.id !== action.payload);
            case 'Complete Shop':
                return initialState.map(shop =>{
                    if(shop.id === action.payload){
                        return{
                            ...shop,
                            done: !shop.done
                        };  
                    }
                    return shop;
                });
            case 'Update Shop':
                return initialState.map(shop =>{
                    if(shop.id === action.payload.id){
                        return{
                            ...shop,
                            description: action.payload.description,
                        };  
                    }
                    return shop;
                });
        default:
            return initialState
    }
}