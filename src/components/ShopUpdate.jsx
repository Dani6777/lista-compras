import React, { useRef, useState } from 'react'
import { TbEyeEdit } from "react-icons/tb";
import { useForm } from '../hooks/useForm';

export const ShopUpdate = ({shop, handleUpdateShop}) => {

    const {updateDescription, onInputChange} = useForm({
        updateDescription: shop.description,
    });

    const [disable, setDisable] = useState(true);
    const focusInputRef = useRef();

    const onSubmitUpdate = e =>{
        e.preventDefautl();

        const id = shop.id;
        const description = updateDescription;

        handleUpdateShop(id, description);

        setDisable(!disable);

        focusInputRef.current.focus()
    }
    return (
        <form onSubmit={onSubmitUpdate}>
        <input type='text' className={`input-update ${shop.done ? 'text-decoration-dashed':''}` } name='updateDescription' value={updateDescription} onChange={handleUpdateShop} placeholder='compras' readOnly={disable} ref={focusInputRef} />
        <button className='btn-edit' type='submit'><TbEyeEdit /></button>
    </form>
    )
};
