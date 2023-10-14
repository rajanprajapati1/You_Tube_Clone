import React, { createContext, useState, useEffect } from 'react';
import { FetchDataFromApi } from '../utils/api';

export const Context = createContext();

export const Appcontext = (props) => {
    const [Loading, setLoading] = useState(false);
    const [SearchResult, setSearchResult] = useState([]);
    const [SelectCategories, setSelectCategories] = useState("New");
    const [MobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        FetchSelectedCategories(SelectCategories);
    }, [SelectCategories])

   
    const FetchSelectedCategories = (query) => {
        setLoading(true);
        FetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            setSearchResult(contents)
            setLoading(false)
        })
    }
    return (
        <Context.Provider value={{
            Loading,
            SearchResult,
            SelectCategories,
            MobileMenu,
            setLoading,
            setSearchResult,
            setSelectCategories,
            setMobileMenu
        }}
        >
            {props.children}
        </Context.Provider>
    )
}