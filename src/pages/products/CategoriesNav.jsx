import React from "react";
import './Products.css';
import { useSearch } from "../../components/ContextProvider";

export const CategoriesNav = ({ setCategory }) => {

    const {setSearch} = useSearch()
    const handleSearch = (category) => {
        setCategory(category)
        setSearch("")
    }

    return (
        <ul className="categoriesNav">
            <li className="navbarCat" onClick={() => handleSearch('beauty')}>Belleza</li>
            <li className="navbarCat" onClick={() => handleSearch('fragrances')}>Fragrances</li>
            <li className="navbarCat" onClick={() => handleSearch('home-decoration')}>Decoración</li>
            <li className="navbarCat" onClick={() => handleSearch('kitchen-accessories')}>Cocina</li>
            <li className="navbarCat" onClick={() => handleSearch('laptops')}>Laptops</li>
            <li className="navbarCat" onClick={() => handleSearch('mens-watches')}>Relojes</li>
            <li className="navbarCat" onClick={() => handleSearch('skin-care')}>Skin Care</li>
            <li className="navbarCat" onClick={() => handleSearch('smartphones')}>Smartphones</li>
        </ul>
    );
}
