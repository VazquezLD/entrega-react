import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const SearchContext = createContext();

export function SearchProvider ({children}) {

    const [results, setResults] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const res = await fetch(`https://dummyjson.com/products/search?q=${search}`)
                const data = await res.json()
                setResults(data.products || [])
                
            }catch(error){
                prompt(error)
            }
        }
        if (search){
            fetchProduct()
        }
    }, [search])

    return(
        <SearchContext.Provider value={{ search, setSearch, results}}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch (){
    return useContext(SearchContext)
}