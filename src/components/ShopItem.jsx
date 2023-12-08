import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { ShopUpdate } from './ShopUpdate';

export const ShopItem = ({shop, handleCompleteShop, handleDeleteShop, handleUpdateShop}) => {
    return (
        <li>
            <span onClick={()=>handleCompleteShop(shop.id)}>
                <label className={`container-done ${shop.done ? 'active' :''}`}></label>
            </span>
            <ShopUpdate shop={shop} handleUpdateShop={handleUpdateShop}/>
            <button 
            className="btn-delete" 
            onClick={() => handleDeleteShop(shop.id)}
            >
                <FaTrashCan />
                </button>
        </li>
    )
}
export default ShopItem;
