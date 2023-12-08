import React from 'react'
import ShopItem from './ShopItem';


export const ShopList = ({ shops, handleCompleteShop, handleDeleteShop, handleUpdateShop }) => {
    return <ul>
        {shops.map(shop =>
            <ShopItem
                key={shop.id}
                shop={shop}
                handleUpdateShop={handleUpdateShop}
                handleDeleteShop={handleDeleteShop}
                handleCompleteShop={handleCompleteShop}
            />)}
    </ul>;
};
