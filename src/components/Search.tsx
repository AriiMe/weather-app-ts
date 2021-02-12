import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { setAlert } from '../store/actions/alertActions';
import { getWeather, setLoading } from '../store/actions/weatherActions';

interface SearchProps {
    title: string;
}

const Search: FC<SearchProps> = ({title}) => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (city.trim() === '') {
            return dispatch(setAlert('city is required!'))
        }

        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('')
    }

    return(

    )
}
export default Search;