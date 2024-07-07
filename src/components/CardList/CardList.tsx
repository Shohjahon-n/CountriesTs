import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { CardListItem } from '../CardListItem/CardListItem';
import { CardListItemSkeleton } from '../CardListItemSkeleton/Card.ListItemSkeleton';

export const CardList: React.FC = () => {
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);
    const data = useSelector((state: RootState) => state.data.data);

    if (isLoading) {
        return (
            <main className="container h-screen m-auto mt-8 md:mt-0">
                <div className="w-full flex flex-wrap items-center sm:justify-between gap-y-24 gap-x-14 justify-center">
                    {[...Array(8)].map((_, index) => (
                        <CardListItemSkeleton key={index} />
                    ))}
                </div>
            </main>
        );
    }

    return (
        <main className="container h-screen m-auto mt-8 md:mt-0">
            <div className="w-full flex flex-wrap items-center sm:justify-between gap-y-24 gap-x-14 justify-center">
                {data?.map((country: any, index: number) => {
                    const { flags, name, capital, region, population, subregion,
                        tld, currencies, languages, borders } = country;

                    let money = '';
                    let nativename = '';
                    let language = '';

                    for (const key in currencies) {
                        money = currencies[key]?.name;
                    }

                    for (const key in name?.nativeName) {
                        nativename = name?.nativeName[key].common;
                    }

                    for (const key in languages) {
                        language += ', ' + languages[key];
                    }

                    language = language.substring(1);
                    return (
                        <CardListItem
                            flags={flags.png}
                            name={name.common}
                            capital={capital}
                            region={region}
                            population={population}
                            topLevelDomain={tld}
                            currencies={money}
                            languages={language}
                            subregion={subregion}
                            nativeName={nativename}
                            borders={borders}
                            key={index}
                        />
                    )
                })}
            </div>
        </main>
    );
};
