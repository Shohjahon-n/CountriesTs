import React, { useState } from 'react';
import { ModalComponent } from '../Modal/Modal';

interface ICardListItemProps {
    flags: string;
    name: string;
    capital: string;
    region: string;
    population: number;
    subregion: string;
    topLevelDomain: string;
    currencies: string;
    languages: string;
    borders: string[];
    nativeName: string;
}

export const CardListItem: React.FC<ICardListItemProps> = ({
    flags, name, capital, region, population, subregion, topLevelDomain, currencies, languages, borders, nativeName }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <>
            <ModalComponent
                isOpen={isModalOpen}
                toggle={toggleModal}
                flags={flags}
                name={name}
                capital={capital}
                region={region}
                population={population}
                subregion={subregion}
                topLevelDomain={topLevelDomain}
                currencies={currencies}
                languages={languages}
                borders={borders}
                nativeName={nativeName}
            />
            <div onClick={toggleModal} className="w-[264px] h-[336px] flex flex-col bg-secondary rounded-lg shadow-md shadow-[#00000008]">
                <div>
                    <img className="w-full h-[172px] rounded-t-lg" src={flags} alt="flag" />
                </div>
                <div className="p-4 flex flex-col gap-1 flex-1 justify-evenly text-textColor">
                    <h2 className="text-lg font-extrabold">{name}</h2>
                    {population && <p className="text-sm font-semibold">Population: <span className="text-textPrimary">{population.toLocaleString('en-US')}</span></p>}
                    {region && <p className="text-sm font-semibold">Region: <span className="text-textPrimary">{region}</span></p>}
                    {capital && <p className="text-sm font-semibold">Capital: <span className="text-textPrimary">{capital}</span></p>}
                </div>
            </div>
        </>
    );
};
