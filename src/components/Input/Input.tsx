import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from '../../app/reducers/inputSlice';

export const Input: React.FC = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setValue(inputValue));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="input w-full md:max-w-[480px] px-2 mb-10 md:mb-0 flex shadow-inner shadow-[#0000000E] justify-between h-12 md:h-14 md:pl-4 items-center cursor-pointer text-textColor bg-secondary rounded-lg"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
                className="ml-2 md:ml-0 search text-xs md:text-sm leading-5 w-full md:w-[92%] h-full rounded-lg bg-inherit border-none outline-none"
                type="search"
                placeholder="Search for a country…"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    );
};
