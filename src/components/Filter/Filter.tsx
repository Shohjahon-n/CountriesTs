import React from 'react';
import { useDispatch } from 'react-redux';
import { setRegion } from '../../app/reducers/regionSclice';

export const Filter: React.FC = () => {
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setRegion(e.target.value));
    };

    return (
        <div className="filter w-full max-w-[200px] flex shadow-inner shadow-[#0000000E] justify-between h-12 md:h-14 pl-4 items-center cursor-pointer text-textColor bg-secondary rounded-lg">
            <select onChange={(e) => handleChange(e)} className="search text-sm  md:text-xs leading-5 w-[92%] h-full rounded-lg bg-inherit border-none outline-none">
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    );
};
