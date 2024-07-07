import { useEffect } from 'react';
import axios from "axios";
import { Header } from "../../components/Header/Header";
import { Search } from "../../components/Search/Search";
import { CardList } from "../../components/CardList/CardList";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setData } from "../../app/reducers/dataSlice";
import { setLoading } from "../../app/reducers/loadingSlice";
import { setError } from "../../app/reducers/errorSlice";
import { NotFound } from '../../components/NotFound/NotFound';

export const Home: React.FC = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state: RootState) => state.value);
    const { region } = useSelector((state: RootState) => state.region);

    const fetchCountries = async () => {
        const response = await axios.get(`https://restcountries.com/v3.1/${value !== '' ? 'name/' + value : 'all'}?fields=name,capital,currencies,flags,region,population,nativeName,borders,subregion,tld,languages`);
        return response.data;
    };

    const fetchCountriesByRegion = async () => {
        const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
        return response.data;
    };

    const { data, isLoading, error } = useQuery(['countries', value, region], region ? fetchCountriesByRegion : fetchCountries);

    useEffect(() => {
        document.title = 'Home';
        if (data) {
            const searchedCountries = data.filter((country: any) => country.name.common.toLowerCase().includes(value.toLowerCase()));
            dispatch(setData(region ? searchedCountries : data));
        }
        dispatch(setLoading(isLoading));
        if (error) {
            dispatch(setError((error as Error).message));
        } else {
            dispatch(setError(''));
        }
    }, [data, isLoading, error, dispatch, region]);

    return (
        <>
            <Header />
            <Search />
            {error ? <NotFound /> : <CardList />}
        </>
    );
};
