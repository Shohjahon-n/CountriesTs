interface IModalProps {
    isOpen: boolean;
    toggle: () => void;
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

export const ModalComponent: React.FC<IModalProps> = ({
    isOpen, toggle, flags, name, capital, region, population, subregion,
    topLevelDomain, currencies, languages, borders, nativeName
}) => {
    if (!isOpen) return null;

    return (
        <div
            onClick={toggle}
            className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 backdrop-blur-sm"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-secondary rounded-lg w-full md:w-[95%] h-full md:h-[90%] relative items-center flex flex-col md:flex-row"
            >
                <div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer"
                    onClick={toggle}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="flex flex-col md:flex-row gap-4 p-4 justify-center items-center">
                    <div className="mt-10 md:mt-0 mx-0 md:mx-10">
                        <img
                            className="max-w-full w-[560px] h-auto object-cover rounded-md"
                            src={flags}
                            alt="flags"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="text-white flex flex-col gap-3 justify-between">
                            <h2 className="text-2xl md:text-3xl font-extrabold pb-5">{name}</h2>
                            {nativeName && (
                                <p className="text-sm md:text-base font-semibold">
                                    Native Name: <span className="text-textPrimary">{nativeName}</span>
                                </p>
                            )}
                            {population && (
                                <p className="text-sm md:text-base font-semibold">
                                    Population: <span className="text-textPrimary">{population.toLocaleString('en-US')}</span>
                                </p>
                            )}
                            {region && (
                                <p className="text-sm md:text-base font-semibold">
                                    Region: <span className="text-textPrimary">{region}</span>
                                </p>
                            )}
                            {subregion && (
                                <p className="text-sm md:text-base font-semibold">
                                    Subregion: <span className="text-textPrimary">{subregion}</span>
                                </p>
                            )}
                            {capital && capital.length > 0 && (
                                <p className="text-sm md:text-base font-semibold mb-5">
                                    Capital: <span className="text-textPrimary">{capital}</span>
                                </p>
                            )}
                            <div className="bordercountries flex flex-wrap gap-2">
                                {borders && borders.length > 0 && (
                                    <p className="w-full h-full flex flex-wrap gap-2 text-sm md:text-base font-semibold">
                                        Borders: {borders.map((border, index) => (
                                            <span
                                                key={index}
                                                className="w-16 h-8 flex items-center bg-dark shadow-sm shadow-[#0000001B] justify-center rounded-sm text-center"
                                            >
                                                {border}
                                            </span>
                                        ))}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="more-infos text-white flex flex-col gap-3 justify-center">
                            <p className="text-sm md:text-base font-semibold">
                                Top Level Domain: <span className="text-textPrimary">{topLevelDomain}</span>
                            </p>
                            <p className="text-sm md:text-base font-semibold">
                                Currencies: <span className="text-textPrimary">{currencies}</span>
                            </p>
                            <p className="text-sm md:text-base font-semibold">
                                Languages: <span className="text-textPrimary">{languages}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
