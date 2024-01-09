import React, { useEffect, useState } from 'react';

type InputProps = {
    value?: string;
    onChange?: (value: string) => void;
};

const Input: React.FC<InputProps> = ({ value: propsValue, onChange }) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (propsValue === undefined) return;
        setValue(propsValue);
    }, [propsValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <>
            <p>Your input : {value}</p>
            <input type="text" value={value} onChange={handleChange} />
        </>
    );
};

export default Input;
