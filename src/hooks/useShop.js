import { useEffect } from "react";
import { shopReducer } from "../shopreducer";
import { useReducer } from 'react';

export const useShop = () => {
    const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('shops')) || [];
    };

    const [shops, dispatch] = useReducer(
        shopReducer,
        initialState,
        init
    );

    const shopsCount = shops.length;
    const pendingShopsCount = shops.filter(shop => !shop.done).length;

    useEffect(() => {
        localStorage.setItem('shops', JSON.stringify(shops));
    }, [shops]);

    const handleNewShop = shop => {
        const action = {
            type: 'Add Shop',
            payload: shop,
        };
        dispatch(action);
    };

    const handleDeleteShop = id => {
        const action = {
            type: 'Delete Shop',
            payload: id,
        };
        dispatch(action);
    };

    const handleCompleteShop = id => {
        const action = {
            type: 'Complete Shop',
            payload: id,
        };
        dispatch(action);
    };

    const handleUpdateShop = (id, description) => {
        const action = {
            type: 'Update Shop',
            payload: {
                id,
                description,
            },
        };
        dispatch(action);
    };

    return {
        shops,
        shopsCount,
        pendingShopsCount,
        handleNewShop,
        handleCompleteShop,
        handleDeleteShop,
        handleUpdateShop
    };
};
