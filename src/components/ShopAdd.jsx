import React from 'react';
import { useForm } from '../hooks/useForm';

export const ShopAdd = ({ handleNewShop }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = e => {
        e.preventDefault();
        if (!description.trim()) return;

        let newShop = {
            id: new Date().getTime(),
            description: description,
            done: false
        };
        handleNewShop(newShop);
        onResetForm();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type='text'
                className='input-add'
                name='description'
                value={description}
                onChange={onInputChange}
                placeholder='compras'
            />
            <button className='btn-add' type='submit'>
                Agregar
            </button>
        </form>
    );
};
