import React from 'react';

const TextInput = (props) => {
    const inputId = `${props.label.toLowerCase()}-input`; // Create a unique ID for the input

    return (
        <div className='flex flex-col gap-1'>
            <label htmlFor={inputId} className='font-light text-gray-600 text-sm'>{props.label}</label>
            <input
                id={inputId}
                type={props.type}
                className='border-gray-200 border rounded w-full p-2 focus:outline-0'
                value={props.value} // Use the 'value' prop to set the input value
                onChange={props.onChange} // Use the 'onChange' prop to handle input changes
            />
        </div>
    );
};

export default TextInput;
