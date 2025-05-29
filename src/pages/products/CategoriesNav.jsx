import React, { useState } from "react";
import '../../styles/Products.css';
import { useSearch } from "../../context/ContextProvider";

export const CategoriesNav = ({ setCategory }) => {
    const { setSearch } = useSearch();
    const [activeCategory, setActiveCategory] = useState('');

    const handleSearch = (category) => {
        setCategory(category);
        setSearch("");
        setActiveCategory(category);
    };

    return (
        <ul className="categoriesNav">
            <li
                className={`navbarCat ${activeCategory === 'beauty' ? 'active' : ''}`}
                onClick={() => handleSearch('beauty')}
            >Beauty</li>
            <li
                className={`navbarCat ${activeCategory === 'fragrances' ? 'active' : ''}`}
                onClick={() => handleSearch('fragrances')}
            >Fragrances</li>
            <li
                className={`navbarCat ${activeCategory === 'home-decoration' ? 'active' : ''}`}
                onClick={() => handleSearch('home-decoration')}
            >Decoración</li>
            <li
                className={`navbarCat ${activeCategory === 'kitchen-accessories' ? 'active' : ''}`}
                onClick={() => handleSearch('kitchen-accessories')}
            >Cocina</li>
            <li
                className={`navbarCat ${activeCategory === 'laptops' ? 'active' : ''}`}
                onClick={() => handleSearch('laptops')}
            >Laptops</li>
            <li
                className={`navbarCat ${activeCategory === 'mens-watches' ? 'active' : ''}`}
                onClick={() => handleSearch('mens-watches')}
            >Relojes</li>
            <li
                className={`navbarCat ${activeCategory === 'skin-care' ? 'active' : ''}`}
                onClick={() => handleSearch('skin-care')}
            >Skin Care</li>
            <li
                className={`navbarCat ${activeCategory === 'smartphones' ? 'active' : ''}`}
                onClick={() => handleSearch('smartphones')}
            >Smartphones</li>
        </ul>
    );
};

