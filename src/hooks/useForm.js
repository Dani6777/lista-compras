import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(
        typeof initialForm === 'object' && initialForm !== null ? initialForm : {}
    );

    const onInputChange = e => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        onInputChange,
        onResetForm,
    };
};
